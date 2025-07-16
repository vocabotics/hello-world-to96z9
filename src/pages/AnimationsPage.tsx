import { motion } from "framer-motion"
import { TextAnimationShowcase } from "@/components/TextAnimationShowcase"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function AnimationsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Animation Studio
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the power of motion design with various animation styles applied to 
              the "Hello World" text. Each animation demonstrates different timing, easing, 
              and visual effects to bring text to life.
            </p>
          </div>
        </motion.div>

        {/* Animation Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TextAnimationShowcase />
        </motion.div>
      </div>
    </div>
  )
}