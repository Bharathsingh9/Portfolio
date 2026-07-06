"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Copy } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

export function Contact() {
  const [copiedField, setCopiedField] = React.useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          
          {/* Left: Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                Get in touch
              </h2>
              <div className="h-1 w-12 bg-primary mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                Interested in collaborating or have a question? I&apos;m always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</span>
                <div className="flex items-center gap-4">
                  <a href="mailto:bharathpalthyavath@gmail.com" className="text-xl font-medium text-foreground hover:text-primary transition-colors">
                    bharathpalthyavath@gmail.com
                  </a>
                  <button 
                    onClick={() => copyToClipboard("bharathpalthyavath@gmail.com", "email")}
                    className="p-2 hover:bg-secondary rounded-md text-muted-foreground transition-colors"
                  >
                    {copiedField === "email" ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Phone</span>
                <div className="flex items-center gap-4">
                  <a href="tel:+918688866136" className="text-xl font-medium text-foreground hover:text-primary transition-colors">
                    +91 86888 66136
                  </a>
                  <button 
                    onClick={() => copyToClipboard("+918688866136", "phone")}
                    className="p-2 hover:bg-secondary rounded-md text-muted-foreground transition-colors"
                  >
                    {copiedField === "phone" ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Location</span>
                <span className="text-lg text-foreground">Hyderabad, Telangana, India</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/Bharathsingh9" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/bharath-singh-palthyavath-120016324" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/Bharath_singh_090/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <SiLeetcode className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Clean Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-sm"
          >
            <form action="https://formsubmit.co/bharathpalthyavath@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New message from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input name="name" required placeholder="John Doe" className="bg-background border-border focus-visible:ring-primary h-12 rounded-xl transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" name="email" required placeholder="john@example.com" className="bg-background border-border focus-visible:ring-primary h-12 rounded-xl transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input name="_subject_custom" required placeholder="Project Inquiry" className="bg-background border-border focus-visible:ring-primary h-12 rounded-xl transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  name="message"
                  required
                  placeholder="Tell me about your project..." 
                  className="min-h-[160px] bg-background border-border focus-visible:ring-primary rounded-xl transition-all resize-y p-4" 
                />
              </div>
              
              <Button type="submit" className="w-full h-14 rounded-xl font-medium text-lg bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group mt-4">
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
