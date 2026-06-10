"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, TrendingUp, Activity, Terminal } from "lucide-react"
import { FaGithub } from "react-icons/fa"

export function CodingProfiles() {
  const [repoCount, setRepoCount] = useState<string | number>("...");

  useEffect(() => {
    fetch("https://api.github.com/users/Bharathsingh9")
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos !== undefined) {
          setRepoCount(data.public_repos);
        } else {
          setRepoCount("13"); // Fallback
        }
      })
      .catch(() => setRepoCount("13"));
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Developer <span className="text-gradient">Footprint</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* GitHub Profile */}
          <motion.a
            href="https://github.com/Bharathsingh9"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block"
          >
            <Card className="glass-card hover:border-primary/50 transition-all duration-300 h-full group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center">
                    <FaGithub className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">GitHub</h3>
                    <p className="text-muted-foreground">@Bharathsingh9</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 rounded-xl p-4 border border-border/50 flex flex-col items-center text-center">
                    <Activity className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Contributions</span>
                    <span className="text-xl font-bold mt-1">Consistent</span>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border border-border/50 flex flex-col items-center text-center">
                    <Terminal className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Repositories</span>
                    <span className="text-xl font-bold mt-1">{repoCount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.a>

          {/* LeetCode Profile */}
          <motion.a
            href="https://leetcode.com/u/Bharath_singh_090/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="block"
          >
            <Card className="glass-card hover:border-[#FFA116]/50 transition-all duration-300 h-full group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFA116]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center">
                    <Code className="w-8 h-8 text-foreground group-hover:text-[#FFA116] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-[#FFA116] transition-colors">LeetCode</h3>
                    <p className="text-muted-foreground">@Bharath_singh_090</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 rounded-xl p-4 border border-border/50 flex flex-col items-center text-center">
                    <TrendingUp className="w-5 h-5 text-[#FFA116] mb-2" />
                    <span className="text-sm text-muted-foreground">Problem Solving</span>
                    <span className="text-xl font-bold mt-1">DSA Focus</span>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border border-border/50 flex flex-col items-center text-center text-sm text-muted-foreground justify-center">
                    Active participant in algorithmic challenges and logic building.
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
