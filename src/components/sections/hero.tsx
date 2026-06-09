"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight, Download, Mail } from "lucide-react"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { ParticleBackground } from "@/components/ui/particle-background"
import { cn } from "@/lib/utils"

export function Hero() {
  const words = [
    { text: "Artificial Intelligence", className: "text-gradient" },
    { text: "Machine Learning", className: "text-gradient" },
    { text: "Generative AI", className: "text-gradient" },
    { text: "Intelligent Systems", className: "text-gradient" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      <div className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 z-0 pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
          Open to new opportunities
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl min-h-[140px] md:min-h-[160px] flex flex-col items-center justify-center"
        >
          <span>Building the Future with</span>
          <TypewriterEffect words={words} />
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl"
        >
          AI/ML Engineer, Data Scientist, Data Analyst & Software Developer passionate about Machine Learning, Generative AI, Explainable AI, Graph Neural Networks, Secure Systems, and Intelligent Automation.
        </motion.p>
        

      </div>
    </section>
  )
}
