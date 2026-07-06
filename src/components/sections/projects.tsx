"use client"
import { motion } from "framer-motion"
import { ExternalLink, Check } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { cn } from "@/lib/utils"

const projects = [
  {
    number: "01",
    title: "RecruitIQ",
    subtitle: "AI-Powered Recruitment Intelligence Platform",
    description: "An intelligent hiring platform that automates resume screening, candidate ranking, job-description matching, interview question generation, candidate evaluation, recruiter analytics, and explainable hiring decisions. Designed to handle large volumes of applications with high accuracy.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "LangChain", "FAISS", "Docker"],
    github: "https://github.com/Bharathsingh9/RecruitIQ.git",
    live: "#",
    features: [
      "Resume Parsing & Ranking",
      "RAG Interview Engine",
      "Explainable AI (SHAP)",
      "Skill Gap Analysis",
      "Semantic Search",
      "Recruiter Dashboard"
    ],
    accentColor: "text-emerald-600",
    accentBorder: "border-emerald-600",
    accentBg: "bg-emerald-50",
  },
  {
    number: "02",
    title: "GraphShield AI",
    subtitle: "Graph Neural Network Fraud Detection",
    description: "A comprehensive fraud detection platform using Graph Neural Networks to identify suspicious banking transactions and hidden fraud rings through relationship analysis. Engineered to process complex subgraphs in real-time.",
    technologies: ["Python", "PyTorch", "FastAPI", "Streamlit", "GNNs"],
    github: "https://github.com/Bharathsingh9/GraphShield-AI.git",
    live: "#",
    features: [
      "Real-Time Fraud Detection",
      "Graph Relationship Analytics",
      "Sub-graph extraction",
      "Investigation Dashboard",
      "Explainable AI",
      "Pattern Recognition"
    ],
    accentColor: "text-orange-600",
    accentBorder: "border-orange-600",
    accentBg: "bg-orange-50",
  },
  {
    number: "03",
    title: "AI Research Assistant",
    subtitle: "Academic Mentor & Paper Analyzer",
    description: "A locally hosted AI-powered research assistant for intelligent academic paper analysis, conversational Q&A, and automated PowerPoint presentation generation. Built for researchers to accelerate literature reviews.",
    technologies: ["Python", "Streamlit", "LangChain", "FAISS", "LLMs"],
    github: "https://github.com/Bharathsingh9/AI-Research-Paper-Assistant.git",
    live: "#",
    features: [
      "Academic Paper Analysis",
      "Source-Cited Answers",
      "Conversational Q&A",
      "PPT Generation",
      "Literature Synthesis",
      "Local Processing"
    ],
    accentColor: "text-teal-600",
    accentBorder: "border-teal-600",
    accentBg: "bg-teal-50",
  },
  {
    number: "04",
    title: "MedIntel AI",
    subtitle: "Explainable Multi-Disease Prediction & Health Analytics Platform",
    description: "A production-grade healthcare analytics platform that combines Machine Learning, Explainable AI (SHAP/LIME), and Retrieval-Augmented Generation (RAG) to deliver interpretable disease risk prediction, biological age estimation, and AI-powered health recommendations.",
    technologies: ["FastAPI", "React", "TypeScript", "Machine Learning", "SHAP", "LIME", "RAG"],
    github: "https://github.com/Bharathsingh9/MedIntel-AI.git",
    live: "#",
    features: [
      "Multi-Disease Risk Prediction",
      "Explainable AI (SHAP & LIME)",
      "Biological Age & Health Index",
      "RAG Health Assistant",
      "Synthetic Healthcare Data Generation",
      "Advanced Exploratory Data Analysis",
      "Feature Engineering & SMOTE",
      "Interactive Analytics Dashboard",
      "FastAPI Backend",
      "React + TypeScript Frontend"
    ],
    accentColor: "text-blue-600",
    accentBorder: "border-blue-600",
    accentBg: "bg-blue-50",
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground"
          >
            Engineering Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-0.5 w-12 bg-primary"
          />
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={cn(
                "py-16 md:py-24 border-b border-border/60 last:border-0",
                i === 0 && "pt-0"
              )}
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                
                {/* Left Column: Number, Title, Links */}
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={cn("text-sm font-mono font-medium", project.accentColor)}>
                      {project.number}
                    </span>
                    <div className={cn("h-px w-8", project.accentBg, project.accentBorder, "border-t")} />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-auto pt-8">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-border bg-card hover:bg-secondary text-sm font-medium transition-colors"
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      View Source
                    </a>
                  </div>
                </div>

                {/* Right Column: Details, Features, Tech */}
                <div>
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 text-justify font-normal">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Key Features</h4>
                    <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start text-foreground/80">
                          <Check className={cn("w-4 h-4 mr-3 shrink-0 mt-0.5", project.accentColor)} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
