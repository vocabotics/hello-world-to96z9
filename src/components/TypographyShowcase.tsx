import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TypographyVariant {
  name: string
  className: string
  description: string
}

const typographyVariants: TypographyVariant[] = [
  {
    name: "Display Large",
    className: "text-8xl font-bold tracking-tight",
    description: "Massive display text for hero sections"
  },
  {
    name: "Display Medium",
    className: "text-6xl font-bold tracking-tight",
    description: "Large display text for main headings"
  },
  {
    name: "Display Small",
    className: "text-4xl font-bold tracking-tight",
    description: "Smaller display text for sub-headings"
  },
  {
    name: "Heading 1",
    className: "text-3xl font-semibold",
    description: "Primary heading style"
  },
  {
    name: "Heading 2",
    className: "text-2xl font-semibold",
    description: "Secondary heading style"
  },
  {
    name: "Heading 3",
    className: "text-xl font-medium",
    description: "Tertiary heading style"
  },
  {
    name: "Body Large",
    className: "text-lg font-normal",
    description: "Large body text for emphasis"
  },
  {
    name: "Body Regular",
    className: "text-base font-normal",
    description: "Standard body text"
  },
  {
    name: "Body Small",
    className: "text-sm font-normal",
    description: "Small body text for details"
  },
  {
    name: "Caption",
    className: "text-xs font-normal text-muted-foreground",
    description: "Caption and helper text"
  }
]

const fontFamilies = [
  { name: "Sans Serif", className: "font-sans", description: "Modern, clean typeface" },
  { name: "Serif", className: "font-serif", description: "Traditional, elegant typeface" },
  { name: "Monospace", className: "font-mono", description: "Fixed-width, code-style typeface" }
]

const colorVariants = [
  { name: "Default", className: "text-foreground" },
  { name: "Muted", className: "text-muted-foreground" },
  { name: "Primary", className: "text-primary" },
  { name: "Blue Gradient", className: "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent" },
  { name: "Purple Gradient", className: "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" },
  { name: "Green Gradient", className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" }
]

export function TypographyShowcase() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Typography Showcase</h2>
        <p className="text-muted-foreground text-lg">
          Explore different typography styles for displaying "Hello World"
        </p>
      </div>

      {/* Size Variants */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Size Variants</h3>
        <div className="space-y-8">
          {typographyVariants.map((variant) => (
            <Card key={variant.name} className="p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge variant="outline">{variant.name}</Badge>
                  <span className="text-sm text-muted-foreground">{variant.description}</span>
                </div>
                <h1 className={cn(variant.className, "text-center")}>
                  Hello World
                </h1>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Font Family Variants */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Font Family Variants</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {fontFamilies.map((font) => (
            <Card key={font.name} className="p-8 text-center">
              <div className="space-y-4">
                <div>
                  <Badge variant="outline">{font.name}</Badge>
                  <p className="text-sm text-muted-foreground mt-2">{font.description}</p>
                </div>
                <h1 className={cn("text-4xl font-bold", font.className)}>
                  Hello World
                </h1>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Color Variants */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Color Variants</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colorVariants.map((color) => (
            <Card key={color.name} className="p-8 text-center">
              <div className="space-y-4">
                <Badge variant="outline">{color.name}</Badge>
                <h1 className={cn("text-4xl font-bold", color.className)}>
                  Hello World
                </h1>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Combined Examples */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Creative Combinations</h3>
        <div className="space-y-8">
          <Card className="p-12 text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <h1 className="text-7xl font-bold font-serif bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hello World
            </h1>
            <p className="text-muted-foreground mt-4">Serif + Large + Rainbow Gradient</p>
          </Card>
          
          <Card className="p-12 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <h1 className="text-6xl font-bold font-mono bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent tracking-wider">
              Hello World
            </h1>
            <p className="text-muted-foreground mt-4">Monospace + Bold + Green Gradient</p>
          </Card>
          
          <Card className="p-12 text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
            <h1 className="text-8xl font-bold font-sans bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Hello World
            </h1>
            <p className="text-muted-foreground mt-4">Sans Serif + Extra Large + Sunset Gradient</p>
          </Card>
        </div>
      </section>
    </div>
  )
}