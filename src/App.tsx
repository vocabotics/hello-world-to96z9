import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { TypographyPage } from "@/pages/TypographyPage"
import { AnimationsPage } from "@/pages/AnimationsPage"
import { MinimalPage } from "@/pages/MinimalPage"
import { Toaster } from "@/components/ui/sonner"
import "./App.css"

function App() {
  const baseUrl = import.meta.env.BASE_URL || "/"

  return (
    <Router basename={baseUrl}>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/animations" element={<AnimationsPage />} />
          <Route path="/minimal" element={<MinimalPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App