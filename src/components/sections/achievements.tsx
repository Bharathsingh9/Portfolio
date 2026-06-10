"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
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
    <section id="achievements" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Accolades & Certifications */}
          <div>
            <div className="mb-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Key <span className="text-gradient">Achievements</span>
              </motion.h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-4 mb-12">
              {accolades.map((item, i) => (
                <motion.div
                  key={`acc-${i}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="glass-card border-l-4 border-l-yellow-500 hover:border-l-yellow-400 transition-colors">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-2 rounded-full bg-yellow-500/10 text-yellow-500 shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <p className="font-medium text-foreground/90">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mb-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Licenses & <span className="text-gradient">Certifications</span>
              </motion.h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-4 mb-12">
              {certifications.map((cert, i) => (
                <motion.div
                  key={`cert-${i}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + accolades.length) * 0.1 }}
                >
                  <Card className="glass-card border-l-4 border-l-primary hover:border-l-accent transition-colors">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0">
                        <Star className="w-5 h-5" />
                      </div>
                      <p className="font-medium text-foreground/90">{cert}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mb-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Position of <span className="text-gradient">Responsibility</span>
              </motion.h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-4">
              {responsibilities.map((resp, i) => (
                <motion.div
                  key={`resp-${i}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + accolades.length + certifications.length) * 0.1 }}
                >
                  <Card className="glass-card border-l-4 border-l-green-500 hover:border-l-green-400 transition-colors">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-green-500/10 text-green-500 shrink-0">
                          <Users className="w-5 h-5" />
                        </div>
                        <p className="font-medium text-foreground/90">{resp.role}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{resp.period}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
