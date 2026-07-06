"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 md:pt-32">
      <div className="container px-4 md:px-6 relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start text-left space-y-8 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground shadow-sm"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-2" />
              AI/ML Engineer & Developer
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
            >
              Building intelligent <br className="hidden lg:block"/>
              <span className="text-primary">systems</span> that scale.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground max-w-[480px] leading-relaxed"
            >
              I specialize in Machine Learning, Generative AI, and software architecture to solve complex problems with elegant code.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a 
                href="#projects" 
                className={cn(buttonVariants({ size: "lg" }), "rounded-md bg-foreground text-background hover:bg-foreground/90 transition-all font-medium px-8 hover:-translate-y-0.5")}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#contact" 
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-md border-border bg-card hover:bg-secondary transition-all font-medium px-8 hover:-translate-y-0.5")}
              >
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 pt-4 text-muted-foreground"
            >
              <a href="https://github.com/Bharathsingh9" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors block transform duration-200">
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/bharathsingh" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors block transform duration-200">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 md:order-2 flex justify-center md:justify-end relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-[2rem] overflow-hidden border border-border shadow-md bg-secondary/50">
              <Image 
                src="/profile.jpg" 
                alt="Bharath Singh Palthyavath" 
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
