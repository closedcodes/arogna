"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"
import Home from "@/components/sections/home"
import Projects from "@/components/sections/projects"
import Data from "@/components/sections/data"
import Models from "@/components/sections/models"
import Knowledge from "@/components/sections/knowledge"
import Reports from "@/components/sections/reports"
import Settings from "@/components/sections/settings"

export default function ConsolePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated")
    if (auth === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/auth/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/auth/login")
  }

  const renderSection = () => {
    switch (activeSection) {
      case "home": return <Home />
      case "projects": return <Projects />
      case "data": return <Data />
      case "models": return <Models />
      case "knowledge": return <Knowledge />
      case "reports": return <Reports />
      case "settings": return <Settings />
      default: return <Home />
    }
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onLogout={handleLogout}
      />
      <main className="flex-1 overflow-auto p-8">
        {renderSection()}
      </main>
    </div>
  )
}