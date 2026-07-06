"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Activity, Terminal, ArrowRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

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
    <section className="py-24 relative bg-secondary/30">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground"
          >
            Developer Footprint
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-0.5 w-12 bg-primary"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Profile */}
          <motion.a
            href="https://github.com/Bharathsingh9"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block group"
          >
            <div className="h-full bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-foreground/20 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 -translate-y-2 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-foreground" />
              </div>

              <div className="flex items-center gap-4 mb-10">
                <div className="text-foreground">
                  <FaGithub className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">GitHub</h3>
                  <p className="text-muted-foreground font-mono text-sm mt-0.5">@Bharathsingh9</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="flex flex-col items-start pt-4 border-t border-border/50">
                  <Activity className="w-4 h-4 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Contributions</span>
                  <span className="text-lg font-semibold text-foreground">Consistent</span>
                </div>
                <div className="flex flex-col items-start pt-4 border-t border-border/50">
                  <Terminal className="w-4 h-4 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Repositories</span>
                  <span className="text-lg font-semibold text-foreground">{repoCount}</span>
                </div>
              </div>
            </div>
          </motion.a>

          {/* LeetCode Profile */}
          <motion.a
            href="https://leetcode.com/u/Bharath_singh_090/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="block group"
          >
            <div className="h-full bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-[#FFA116]/40 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 -translate-y-2 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-[#FFA116]" />
              </div>

              <div className="flex items-center gap-4 mb-10">
                <div className="text-foreground group-hover:text-[#FFA116] transition-colors">
                  <SiLeetcode className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-[#FFA116] transition-colors">LeetCode</h3>
                  <p className="text-muted-foreground font-mono text-sm mt-0.5">@Bharath_singh_090</p>
                </div>
              </div>

              <div className="flex flex-col pt-4 border-t border-border/50 mt-auto">
                <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Focus Area</span>
                <span className="text-lg font-semibold text-foreground mb-2">Data Structures & Algo</span>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  Active participant in algorithmic challenges and logic building.
                </p>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
