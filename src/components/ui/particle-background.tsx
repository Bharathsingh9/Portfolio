"use client"
import * as React from "react"
import { motion } from "framer-motion"

export function ParticleBackground() {
  const [particles, setParticles] = React.useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([])

  React.useEffect(() => {
    // Generate particles only on the client side
    const generatedParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Abstract floating nodes representing Neural Networks */}
      <svg className="absolute w-full h-full opacity-20 hidden md:block" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 100,300 C 200,200 300,400 400,300 C 500,200 600,400 700,300"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M 200,400 C 300,500 400,300 500,400 C 600,500 700,300 800,400"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        />
      </svg>
    </div>
  )
}
