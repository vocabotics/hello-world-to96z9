import { motion } from "framer-motion"
import { MinimalDisplay } from "@/components/MinimalDisplay"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function MinimalPage() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-muted/5 to-background">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 z-10"
      >
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="backdrop-blur-sm bg-background/80 hover:bg-background/90"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </motion.div>

      {/* Minimal Display */}
      <MinimalDisplay />

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-xs text-muted-foreground text-center">
          Minimalism is the ultimate sophistication
        </p>
      </motion.div>
    </div>
  )
}