import { motion } from "framer-motion"
import { HelloWorldDisplay } from "@/components/HelloWorldDisplay"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"

const features = [
  {
    title: "Interactive Display",
    description: "Customize fonts, colors, and animations in real-time",
    icon: "🎨"
  },
  {
    title: "Multiple Languages",
    description: "Experience greetings in various languages and scripts",
    icon: "🌍"
  },
  {
    title: "Typography Showcase",
    description: "Explore different text styles and formatting options",
    icon: "📝"
  },
  {
    title: "Animation Effects",
    description: "Beautiful entrance animations and transitions",
    icon: "✨"
  },
  {
    title: "Minimal Design",
    description: "Clean, elegant, and distraction-free interface",
    icon: "🎯"
  }
]

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/5 to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm">
            Welcome to the Hello World Experience
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A beautifully crafted application showcasing the timeless "Hello World" greeting 
            with elegant typography, smooth animations, and international variations.
          </p>
        </motion.div>

        {/* Main Display Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HelloWorldDisplay />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Features</h2>
            <p className="text-muted-foreground">
              Discover what makes this Hello World application special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="text-center space-y-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24"
        >
          <Card className="p-8 text-center bg-gradient-to-r from-muted/10 to-muted/5">
            <h2 className="text-2xl font-bold mb-4">Explore More</h2>
            <p className="text-muted-foreground mb-6">
              Dive deeper into typography, animations, and minimal design
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/typography")}
                className="min-w-[150px]"
              >
                Typography
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate("/animations")}
                className="min-w-[150px]"
              >
                Animations
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate("/minimal")}
                className="min-w-[150px]"
              >
                Minimal View
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}