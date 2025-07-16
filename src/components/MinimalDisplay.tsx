import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MinimalDisplayProps {
  className?: string
}

export function MinimalDisplay({ className }: MinimalDisplayProps) {
  return (
    <div className={cn("w-full min-h-screen flex items-center justify-center", className)}>
      <Card className="p-16 text-center border-none shadow-2xl bg-gradient-to-br from-background to-muted/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-8xl md:text-9xl font-light tracking-wider text-foreground"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.1em", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          >
            Hello World
          </motion.h1>
          
          <motion.div
            className="mt-8 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          />
          
          <motion.p 
            className="mt-6 text-sm text-muted-foreground font-light tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            Simple. Clean. Elegant.
          </motion.p>
        </motion.div>
      </Card>
    </div>
  )
}