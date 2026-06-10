"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "RecruitIQ – AI-Powered Recruitment Intelligence Platform",
    description: "An intelligent hiring platform that automates resume screening, candidate ranking, job-description matching, interview question generation, candidate evaluation, recruiter analytics, and explainable hiring decisions.",
    technologies: ["Python", "FastAPI", "LangChain", "PostgreSQL", "FAISS", "ChromaDB", "RAG", "LLMs", "SHAP", "Docker"],
    github: "https://github.com/Bharathsingh9/RecruitIQ",
    features: ["Resume Parsing", "Candidate Ranking", "RAG Interview Engine", "Skill Gap Analysis", "Explainable AI", "Recruiter Dashboard"],
  },
  {
    title: "GraphShield AI – Graph Neural Network Fraud Detection",
    description: "A fraud detection platform using Graph Neural Networks to identify suspicious banking transactions and hidden fraud patterns through relationship analysis.",
    technologies: ["Python", "PyTorch", "FastAPI", "Streamlit", "Graph Neural Networks", "SHAP"],
    github: "https://github.com/Bharathsingh9/GraphShield-AI",
    features: ["Fraud Detection", "Graph Analytics", "Real-Time Prediction", "Explainable AI", "Investigation Dashboard"],
  },
  {
    title: "AI Research Paper Assistant & Academic Mentor",
    description: "A locally hosted AI-powered research assistant for intelligent academic paper analysis, conversational Q&A, and automated PowerPoint presentation generation.",
    technologies: ["Python", "Streamlit", "LangChain", "LLMs", "FAISS", "RAG"],
    github: "https://github.com/Bharathsingh9",
    features: ["Paper Analysis", "Conversational Q&A", "Source-Cited Answers", "PPT Generation", "Literature Review Synthesis"],
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex"
            >
              <Card className="glass-card hover:border-primary/50 transition-all duration-300 group flex flex-col h-full w-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-background border-b border-border/50 relative overflow-hidden flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                </div>
                <CardContent className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Features</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-xs flex items-center text-foreground/80">
                          <span className="w-1 h-1 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FaGithub className="w-4 h-4 mr-1.5" />
                    Source Code
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
