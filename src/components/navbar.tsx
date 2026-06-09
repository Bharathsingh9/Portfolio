"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"
import { Download, Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass border-b border-border/50 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-gradient">Bharath Singh Tech</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }), "hidden sm:flex rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 backdrop-blur-sm transition-all")}>
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-b border-border/50 bg-background/95 backdrop-blur-xl p-6 shadow-xl flex flex-col gap-6 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
