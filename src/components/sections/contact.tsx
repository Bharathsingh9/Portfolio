"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

export function Contact() {
  const [copiedField, setCopiedField] = React.useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary rounded-full mb-4"
          />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Interested in collaborating or have a question? I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="glass-card border-border/50 h-full">
              <CardContent className="p-8 space-y-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                      <div className="flex items-center justify-between">
                        <a href="mailto:bharathpalthyavath@gmail.com" className="font-semibold hover:text-primary transition-colors break-all">
                          bharathpalthyavath@gmail.com
                        </a>
                        <button 
                          onClick={() => copyToClipboard("bharathpalthyavath@gmail.com", "email")}
                          className="text-muted-foreground hover:text-primary transition-colors ml-2"
                        >
                          {copiedField === "email" ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                      <div className="flex items-center justify-between">
                        <a href="tel:+918688866136" className="font-semibold hover:text-primary transition-colors">
                          +91 86888 66136
                        </a>
                        <button 
                          onClick={() => copyToClipboard("+918688866136", "phone")}
                          className="text-muted-foreground hover:text-primary transition-colors ml-2"
                        >
                          {copiedField === "phone" ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                      <p className="font-semibold">Hyderabad, Telangana, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                      <FaLinkedin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</p>
                      <div className="flex items-center justify-between">
                        <a href="https://www.linkedin.com/in/bharath-singh-palthyavath-120016324" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#0077b5] transition-colors break-all">
                          bharath-singh-palthyavath
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="glass-card border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none" />
              <CardContent className="p-8">
                <form action="https://formsubmit.co/bharathpalthyavath@gmail.com" method="POST" className="space-y-6">
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New message from Portfolio!" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <Input name="name" required placeholder="John Doe" className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input type="email" name="email" required placeholder="john@example.com" className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input name="_subject_custom" required placeholder="Project Inquiry" className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      name="message"
                      required
                      placeholder="Hello Bharath, I'd like to discuss..." 
                      className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary/50 transition-colors resize-y" 
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 rounded-lg gap-2 text-md group relative overflow-hidden bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all">
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
