import Link from "next/link"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bharath Singh Palthyavath. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/Bharathsingh9" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/bharath-singh-palthyavath-120016324" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaLinkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:bharathpalthyavath@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
