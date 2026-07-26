"use client"
import { motion } from "framer-motion"

const education = [
  {
    degree: "B.E. Artificial Intelligence and Data Science",
    institution: "Chaitanya Bharathi Institute of Technology",
    period: "2023 – 2027",
    score: "CGPA: 8.95/10",
  },
  {
    degree: "Intermediate",
    institution: "Prathibha Junior College",
    period: "2021 – 2023",
    score: "96.2%",
  },
  {
    degree: "SSC",
    institution: "Krishnaveni Talent School",
    period: "2020 – 2021",
    score: "100%",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary"
          />
        </div>

        <div className="relative border-l border-border/50 ml-3 md:ml-4">
          {education.map((item, i) => (
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
                  {item.degree}
                </h3>
                <span className="text-sm font-medium text-muted-foreground font-mono mt-1 md:mt-0">
                  {item.period}
                </span>
              </div>

              <p className="text-lg text-primary font-medium mb-3">
                {item.institution}
              </p>

              <div className="inline-flex items-center px-2 py-1 rounded-md border border-border bg-card text-xs font-medium text-muted-foreground mt-1">
                {item.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
