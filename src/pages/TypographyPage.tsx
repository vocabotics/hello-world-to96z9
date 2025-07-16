import { motion } from "framer-motion"
import { TypographyShowcase } from "@/components/TypographyShowcase"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function TypographyPage() {
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
              Typography Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the art of typography with various font styles, sizes, and color combinations 
              for the classic "Hello World" text. Each variant demonstrates different typographic 
              principles and visual impact.
            </p>
          </div>
        </motion.div>

        {/* Typography Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TypographyShowcase />
        </motion.div>
      </div>
    </div>
  )
}