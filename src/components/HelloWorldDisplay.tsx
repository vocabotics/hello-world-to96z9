import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface HelloWorldDisplayProps {
  className?: string
}

const textVariations = [
  { text: "Hello World", style: "classic", description: "The timeless greeting" },
  { text: "¡Hola Mundo!", style: "spanish", description: "Spanish variation" },
  { text: "Bonjour le Monde", style: "french", description: "French elegance" },
  { text: "こんにちは世界", style: "japanese", description: "Japanese characters" },
  { text: "Привет мир", style: "russian", description: "Russian greeting" },
  { text: "مرحبا بالعالم", style: "arabic", description: "Arabic welcome" },
  { text: "Hello, Universe!", style: "cosmic", description: "Expanded greeting" },
  { text: "Hello, Beautiful World", style: "poetic", description: "Poetic variation" },
]

const fontStyles = [
  { name: "Sans Serif", className: "font-sans" },
  { name: "Serif", className: "font-serif" },
  { name: "Monospace", className: "font-mono" },
]

const colorThemes = [
  { name: "Default", className: "text-foreground" },
  { name: "Primary", className: "text-primary" },
  { name: "Gradient Blue", className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" },
  { name: "Gradient Sunset", className: "bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent" },
  { name: "Gradient Forest", className: "bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent" },
]

export function HelloWorldDisplay({ className }: HelloWorldDisplayProps) {
  const [currentVariation, setCurrentVariation] = useState(0)
  const [currentFont, setCurrentFont] = useState(0)
  const [currentColor, setCurrentColor] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNext = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentVariation((prev) => (prev + 1) % textVariations.length)
      setIsAnimating(false)
    }, 200)
  }

  const handlePrevious = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentVariation((prev) => (prev - 1 + textVariations.length) % textVariations.length)
      setIsAnimating(false)
    }, 200)
  }

  const currentText = textVariations[currentVariation]
  const currentFontStyle = fontStyles[currentFont]
  const currentColorTheme = colorThemes[currentColor]

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn("w-full max-w-4xl mx-auto space-y-8", className)}>
      {/* Main Text Display */}
      <Card className="p-12 text-center bg-gradient-to-br from-background to-muted/20 border-2">
        <motion.div
          key={`${currentVariation}-${currentFont}-${currentColor}`}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: isAnimating ? 0 : 1, 
            y: isAnimating ? -20 : 0,
            scale: isAnimating ? 0.9 : 1
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 
            className={cn(
              "text-6xl md:text-8xl font-bold tracking-tight",
              currentFontStyle.className,
              currentColorTheme.className,
              "animate-pulse-glow"
            )}
          >
            {currentText.text}
          </h1>
          
          <Badge variant="outline" className="text-sm px-4 py-2">
            {currentText.description}
          </Badge>
        </motion.div>

        <div className="flex justify-center gap-4 mt-8">
          <Button onClick={handlePrevious} variant="outline" size="lg">
            Previous
          </Button>
          <Button onClick={handleNext} variant="default" size="lg">
            Next Variation
          </Button>
        </div>
      </Card>

      {/* Customization Controls */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Font Style Control */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Font Style</h3>
          <div className="space-y-2">
            {fontStyles.map((font, index) => (
              <Button
                key={font.name}
                variant={currentFont === index ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setCurrentFont(index)}
              >
                <span className={font.className}>{font.name}</span>
              </Button>
            ))}
          </div>
        </Card>

        {/* Color Theme Control */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Color Theme</h3>
          <div className="space-y-2">
            {colorThemes.map((theme, index) => (
              <Button
                key={theme.name}
                variant={currentColor === index ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setCurrentColor(index)}
              >
                <span className={cn("font-medium", theme.className)}>
                  {theme.name}
                </span>
              </Button>
            ))}
          </div>
        </Card>

        {/* Language Variations */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Languages</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {textVariations.map((variation, index) => (
              <Button
                key={index}
                variant={currentVariation === index ? "default" : "outline"}
                className="w-full justify-start text-left"
                onClick={() => setCurrentVariation(index)}
              >
                <div className="truncate">
                  <div className="font-medium">{variation.text}</div>
                  <div className="text-xs opacity-70">{variation.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* Information Section */}
      <Card className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">About This Application</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          This is a minimalist "Hello World" application showcasing beautiful typography and international greetings. 
          The text automatically cycles through different languages and variations, or you can manually control the display 
          using the customization options above. Experience the universal greeting in multiple languages with elegant design.
        </p>
      </Card>
    </div>
  )
}