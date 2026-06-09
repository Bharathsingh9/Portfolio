"use client"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    degree: "B.E. Artificial Intelligence and Data Science",
    institution: "Chaitanya Bharathi Institute of Technology",
    period: "2023 – 2027",
    score: "CGPA: 8.92/10",
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
    <section id="education" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Education <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary rounded-full"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-4 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-[27px] md:left-[11px] top-6 bottom-0 w-px bg-border/50" />

            <div className="space-y-8">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-6 md:gap-8 items-start"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-none mt-5">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <Card className="glass-card hover:border-primary/50 transition-all duration-300 w-full group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <CardContent className="p-6 relative z-10 text-left">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <GraduationCap className="w-5 h-5 flex-shrink-0" />
                          <h3 className="text-xl font-bold">{item.degree}</h3>
                        </div>
                        <p className="text-lg font-medium text-foreground mb-4">{item.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            <span className="text-primary font-medium">{item.score}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
