"use client"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sticky top-32"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Background
            </h2>
            <div className="h-0.5 w-12 bg-primary" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed text-justify font-normal"
          >
            <p>
              I am an Artificial Intelligence and Data Science undergraduate at Chaitanya Bharathi Institute of Technology (CBIT) with a CGPA of 8.92.
            </p>
            <p>
              My expertise spans across Data Science, Data Analysis, Machine Learning, Generative AI, Retrieval-Augmented Generation (RAG), Explainable AI, Graph Neural Networks, and Software Development.
            </p>
            <p>
              I thrive on designing intelligent systems that bridge the gap between complex algorithms and real-world applications, focusing on data-driven decision making, automation, and scalable architectures.
            </p>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
