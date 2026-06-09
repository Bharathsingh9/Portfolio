"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-2 md:order-1 flex justify-center"
          >
            <div className="w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden glass-card relative group border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50 mix-blend-overlay z-10 pointer-events-none" />
              <Image 
                src="/profile.jpg" 
                alt="Bharath Singh Palthyavath" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-[60px] -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-[60px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 order-1 md:order-2 flex flex-col justify-center"
          >
            <div className="space-y-6 text-lg text-muted-foreground/90 leading-relaxed text-justify text-pretty">
              <p>
                I am an Artificial Intelligence and Data Science undergraduate at Chaitanya Bharathi Institute of Technology (CBIT) with a CGPA of 8.92.
              </p>
              <p>
                My expertise spans across Machine Learning, Generative AI, Retrieval-Augmented Generation (RAG), Explainable AI, Graph Neural Networks, Software Development, and Cybersecurity.
              </p>
              <p>
                I thrive on designing intelligent systems that bridge the gap between complex algorithms and real-world applications, focusing on data-driven decision making, automation, and scalable architectures.
              </p>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}
