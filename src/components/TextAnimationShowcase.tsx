import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface AnimationStyle {
  name: string
  description: string
  animation: any
}

const animationStyles: AnimationStyle[] = [
  {
    name: "Fade In",
    description: "Gentle fade with upward movement",
    animation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    }
  },
  {
    name: "Scale Up",
    description: "Growing from center",
    animation: {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  {
    name: "Slide Right",
    description: "Sliding from left side",
    animation: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.7, ease: "easeOut" }
    }
  },
  {
    name: "Bounce",
    description: "Bouncy entrance effect",
    animation: {
      initial: { opacity: 0, y: -30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, type: "spring", bounce: 0.4 }
    }
  },
  {
    name: "Rotate",
    description: "Spinning entrance",
    animation: {
      initial: { opacity: 0, rotate: -180 },
      animate: { opacity: 1, rotate: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }
]

export function TextAnimationShowcase() {
  const [currentAnimation, setCurrentAnimation] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const playAnimation = (index: number) => {
    setCurrentAnimation(index)
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 1000)
  }

  const currentStyle = animationStyles[currentAnimation]

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Text Animation Showcase</h2>
        <p className="text-muted-foreground">
          Explore different animation styles for the "Hello World" text
        </p>
      </div>

      {/* Animation Preview */}
      <Card className="p-12 text-center bg-gradient-to-br from-background to-muted/10 border-2 min-h-[300px] flex items-center justify-center">
        <div className="space-y-6">
          <motion.h1
            key={`${currentAnimation}-${isPlaying}`}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            {...(isPlaying ? currentStyle.animation : { initial: false })}
          >
            Hello World
          </motion.h1>
          
          <Badge variant="outline" className="text-sm px-4 py-2">
            {currentStyle.name} - {currentStyle.description}
          </Badge>
        </div>
      </Card>

      {/* Animation Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animationStyles.map((style, index) => (
          <Card 
            key={style.name} 
            className={cn(
              "p-4 cursor-pointer transition-all hover:shadow-lg",
              currentAnimation === index && "ring-2 ring-primary"
            )}
            onClick={() => playAnimation(index)}
          >
            <div className="space-y-2">
              <h3 className="font-semibold">{style.name}</h3>
              <p className="text-sm text-muted-foreground">{style.description}</p>
              <Button 
                size="sm" 
                variant={currentAnimation === index ? "default" : "outline"}
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation()
                  playAnimation(index)
                }}
              >
                {currentAnimation === index && isPlaying ? "Playing..." : "Preview"}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Play All Button */}
      <div className="text-center">
        <Button 
          size="lg" 
          onClick={() => {
            let index = 0
            const playNext = () => {
              if (index < animationStyles.length) {
                playAnimation(index)
                index++
                setTimeout(playNext, 1500)
              }
            }
            playNext()
          }}
        >
          Play All Animations
        </Button>
      </div>
    </div>
  )
}