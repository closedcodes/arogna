"use client"

import { Dna, Home, FolderOpen, Database, Brain, BookOpen, FileText, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  onLogout: () => void
}

export default function Sidebar({ activeSection, setActiveSection, onLogout }: SidebarProps) {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "data", label: "Data", icon: Database },
    { id: "models", label: "Models", icon: Brain },
    { id: "knowledge", label: "Knowledge", icon: BookOpen },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="w-64 bg-white border-r h-screen flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <Dna className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold">Arogna</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
      
      <div className="p-4 border-t">
        <Button onClick={onLogout} variant="outline" className="w-full">
          <LogOut className="h-4 w-4 mr-2" />
          Log Out
        </Button>
      </div>
    </div>
  )
}