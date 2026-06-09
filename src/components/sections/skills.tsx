"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const skillCategories = ["All", "Programming", "Web Development", "AI & ML", "Generative AI", "Software Development", "Databases"]

const skills = [
  // Programming
  { name: "Python", category: "Programming", level: 95 },
  { name: "Java", category: "Programming", level: 80 },
  { name: "SQL", category: "Programming", level: 90 },
  { name: "JavaScript", category: "Programming", level: 75 },
  { name: "R", category: "Programming", level: 70 },
  
  // AI & Machine Learning
  { name: "Machine Learning", category: "AI & ML", level: 90 },
  { name: "Deep Learning", category: "AI & ML", level: 85 },
  { name: "NLP", category: "AI & ML", level: 85 },
  { name: "Feature Engineering", category: "AI & ML", level: 90 },
  { name: "Model Evaluation", category: "AI & ML", level: 85 },
  { name: "Predictive Analytics", category: "AI & ML", level: 80 },
  { name: "SHAP Explainable AI", category: "AI & ML", level: 85 },
  
  // Generative AI
  { name: "LLMs", category: "Generative AI", level: 90 },
  { name: "Prompt Engineering", category: "Generative AI", level: 95 },
  { name: "RAG", category: "Generative AI", level: 90 },
  { name: "LangChain", category: "Generative AI", level: 85 },
  { name: "Embeddings", category: "Generative AI", level: 90 },
  { name: "Semantic Search", category: "Generative AI", level: 85 },
  { name: "Vector Databases", category: "Generative AI", level: 85 },
  { name: "AI Agents", category: "Generative AI", level: 80 },
  
  // Databases
  { name: "MongoDB", category: "Databases", level: 85 },
  { name: "PostgreSQL", category: "Databases", level: 80 },
  { name: "MySQL", category: "Databases", level: 85 },
  { name: "FAISS", category: "Databases", level: 90 },
  { name: "ChromaDB", category: "Databases", level: 85 },
  
  // Web Development
  { name: "React / Next.js", category: "Web Development", level: 85 },
  { name: "Node.js", category: "Web Development", level: 75 },
  { name: "Express.js", category: "Web Development", level: 80 },
  { name: "TypeScript", category: "Web Development", level: 80 },
  { name: "HTML5 & CSS3", category: "Web Development", level: 90 },
  { name: "Tailwind CSS", category: "Web Development", level: 85 },

  // Software Development
  { name: "FastAPI", category: "Software Development", level: 90 },
  { name: "REST APIs", category: "Software Development", level: 85 },
  { name: "System Design", category: "Software Development", level: 80 },
  { name: "Docker", category: "Software Development", level: 75 },
  { name: "Git & GitHub", category: "Software Development", level: 90 },
]

export function Skills() {
  // We remove the "All" category since we are displaying all grouped by their domains
  const displayCategories = skillCategories.filter(c => c !== "All")

  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary rounded-full mb-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayCategories.map((category, index) => {
            const categorySkills = skills.filter(s => s.category === category)
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="glass-card hover:border-primary/50 transition-all duration-300 h-full group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-6 relative z-10">
                    <h3 className="text-xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {categorySkills.map((skill) => (
                        <span 
                          key={skill.name} 
                          className="px-3.5 py-1.5 bg-background/50 hover:bg-primary/20 text-muted-foreground hover:text-foreground border border-border/50 rounded-full text-sm font-medium transition-colors cursor-default"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
