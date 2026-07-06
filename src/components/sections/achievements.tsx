"use client"
import { motion } from "framer-motion"
import { Trophy, Award, Star, Users } from "lucide-react"

const certifications = [
  "Python for Data Science (NPTEL)",
  "MongoDB Python Developer (MongoDB University)",
  "Microsoft Azure Fundamentals (AZ-900)",
  "Cyber Security & Forensics Workshop (CSI)",
]

const accolades = [
  { text: "Runner-Up — Cyber Fest Hackathon", icon: Trophy },
  { text: "Strong Academic Performance (CGPA 8.92)", icon: Award },
]

const responsibilities = [
  { role: "Volunteer — Chaitanya Spandana", period: "Jan 2024 – Present" },
  { role: "Volunteer — InsightX", period: "Feb 2024, Feb 2025" }
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-secondary/30">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground"
          >
            Milestones
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-0.5 w-12 bg-primary"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/60">
              <Star className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-start text-foreground/80">
                  <span className="mr-3 mt-2 h-1 w-1 flex-shrink-0 bg-primary" />
                  <span className="leading-relaxed text-sm font-medium">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Accolades */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/60">
              <Trophy className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground">Achievements</h3>
            </div>
            <ul className="space-y-4">
              {accolades.map((acc, i) => (
                <li key={i} className="flex items-start text-foreground/80">
                  <span className="mr-3 mt-2 h-1 w-1 flex-shrink-0 bg-yellow-600" />
                  <span className="leading-relaxed text-sm font-medium">{acc.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/60">
              <Users className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground">Position of Responsibility</h3>
            </div>
            <ul className="space-y-5">
              {responsibilities.map((resp, i) => (
                <li key={i} className="flex flex-col text-foreground/80">
                  <span className="font-medium text-sm">{resp.role}</span>
                  <span className="text-xs font-mono text-muted-foreground mt-1">{resp.period}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
