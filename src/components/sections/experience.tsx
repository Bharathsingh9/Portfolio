"use client"
import { motion } from "framer-motion"

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Cognifyz Technologies",
    period: "Jun 2025 – Jul 2025",
    description: [
      "Built end-to-end ML pipelines including preprocessing, feature engineering, model training and evaluation.",
      "Conducted exploratory data analysis and created insights using Python, Pandas and Matplotlib.",
      "Containerized models using Docker improving deployment reproducibility."
    ],
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
          >
            Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary"
          />
        </div>

        <div className="relative border-l border-border/50 ml-3 md:ml-4">
          {experiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-12 relative pl-8 md:pl-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute w-2 h-2 bg-foreground rounded-full -left-[4.5px] top-2" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {item.role}
                </h3>
                <span className="text-sm font-medium text-muted-foreground font-mono mt-1 md:mt-0">
                  {item.period}
                </span>
              </div>
              
              <p className="text-lg text-primary font-medium mb-4">
                {item.company}
              </p>
              
              <ul className="space-y-3">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="text-muted-foreground leading-relaxed flex items-start">
                    <span className="mr-3 mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
