"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  Code2, 
  Brain, 
  Sparkles, 
  BarChart, 
  Database, 
  Server, 
  Cloud, 
  Wrench 
} from "lucide-react"

const skillCategories = [
  { id: "Programming Languages", label: "Languages", icon: Code2 },
  { id: "AI & Machine Learning", label: "AI & ML", icon: Brain },
  { id: "Generative AI", label: "Gen AI", icon: Sparkles },
  { id: "Data Science & Analytics", label: "Data Science", icon: BarChart },
  { id: "Backend Development", label: "Backend", icon: Server },
  { id: "Databases & Vector Stores", label: "Databases", icon: Database },
  { id: "Cloud", label: "Cloud", icon: Cloud },
  { id: "Developer Tools", label: "Tools", icon: Wrench },
]

const skills = [
  // Programming Languages
  { name: "Python", category: "Programming Languages" },
  { name: "SQL", category: "Programming Languages" },
  { name: "Java", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },
  
  // AI & Machine Learning
  { name: "Machine Learning", category: "AI & Machine Learning" },
  { name: "Deep Learning", category: "AI & Machine Learning" },
  { name: "Natural Language Processing (NLP)", category: "AI & Machine Learning" },
  { name: "Feature Engineering", category: "AI & Machine Learning" },
  { name: "Model Evaluation", category: "AI & Machine Learning" },
  { name: "Explainable AI (SHAP)", category: "AI & Machine Learning" },
  { name: "Classification & Regression", category: "AI & Machine Learning" },
  { name: "Clustering", category: "AI & Machine Learning" },
  
  // Generative AI
  { name: "Large Language Models (LLMs)", category: "Generative AI" },
  { name: "Prompt Engineering", category: "Generative AI" },
  { name: "LangChain", category: "Generative AI" },
  { name: "Retrieval-Augmented Generation (RAG)", category: "Generative AI" },
  { name: "Embeddings", category: "Generative AI" },
  { name: "Semantic Search", category: "Generative AI" },
  { name: "AI Agents", category: "Generative AI" },
  
  // Data Science & Analytics
  { name: "Data Cleaning & Preprocessing", category: "Data Science & Analytics" },
  { name: "Exploratory Data Analysis (EDA)", category: "Data Science & Analytics" },
  { name: "Statistical Analysis", category: "Data Science & Analytics" },
  { name: "Predictive Modeling", category: "Data Science & Analytics" },
  { name: "Data Visualization", category: "Data Science & Analytics" },
  { name: "Microsoft Excel", category: "Data Science & Analytics" },
  { name: "Power BI", category: "Data Science & Analytics" },
  { name: "Business Analytics", category: "Data Science & Analytics" },
  { name: "Dashboard Development", category: "Data Science & Analytics" },
  
  // Backend Development
  { name: "FastAPI", category: "Backend Development" },
  { name: "REST APIs", category: "Backend Development" },
  
  // Databases & Vector Stores
  { name: "MySQL", category: "Databases & Vector Stores" },
  { name: "PostgreSQL", category: "Databases & Vector Stores" },
  { name: "MongoDB", category: "Databases & Vector Stores" },
  { name: "FAISS", category: "Databases & Vector Stores" },
  { name: "ChromaDB", category: "Databases & Vector Stores" },
  
  // Cloud
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "Azure Fundamentals (AZ-900)", category: "Cloud" },
  
  // Developer Tools
  { name: "Git", category: "Developer Tools" },
  { name: "GitHub", category: "Developer Tools" },
  { name: "Docker", category: "Developer Tools" },
  { name: "VS Code", category: "Developer Tools" },
  { name: "Jupyter Notebook", category: "Developer Tools" },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = React.useState<string>("All")

  const filteredCategories = activeCategory === "All" 
    ? skillCategories 
    : skillCategories.filter(c => c.id === activeCategory)

  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground"
          >
            Technical Arsenal
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-0.5 w-12 bg-primary mb-12"
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory("All")}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors border",
                activeCategory === "All" 
                  ? "bg-foreground text-background border-foreground" 
                  : "bg-transparent text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground"
              )}
            >
              All Skills
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 border",
                  activeCategory === cat.id 
                    ? "bg-foreground text-background border-foreground" 
                    : "bg-transparent text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground"
                )}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const categorySkills = skills.filter(s => s.category === category.id)
              const Icon = category.icon
              
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-xl p-8 border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.id}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span 
                        key={skill.name} 
                        className="px-2.5 py-1 bg-secondary text-foreground border border-border/50 rounded-md text-sm font-medium cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
