"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Key, Bell, Palette, Building, Link, Shield, Moon, Sun } from "lucide-react"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("account")
  const [darkMode, setDarkMode] = useState(false)
  
  const tabs = [
    { id: "account", name: "Account", icon: User },
    { id: "organization", name: "Organization", icon: Building },
    { id: "integrations", name: "Integrations", icon: Link },
    { id: "appearance", name: "Appearance", icon: Palette },
    { id: "security", name: "Security", icon: Shield },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>
      
      <div className="flex gap-6">
        <div className="w-64">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{tab.name}</span>
                    </button>
                  )
                })}
              </nav>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex-1">
      
          {activeTab === "account" && (
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name</label>
                    <Input defaultValue="Dr. Sarah Johnson" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input defaultValue="sarah.johnson@arogna.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Bio</label>
                  <textarea className="w-full p-2 border rounded" rows={3} placeholder="Tell us about your research focus..."></textarea>
                </div>
                <div className="flex space-x-2">
                  <Button>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "organization" && (
            <Card>
              <CardHeader>
                <CardTitle>Organization Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Organization Name</label>
                  <Input defaultValue="Arogna Research Lab" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Team Members</label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm">Dr. Sarah Johnson (Admin)</span>
                      <Button size="sm" variant="outline">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm">Dr. Mike Chen (Researcher)</span>
                      <Button size="sm" variant="outline">Edit</Button>
                    </div>
                  </div>
                  <Button size="sm">Invite Member</Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "integrations" && (
            <Card>
              <CardHeader>
                <CardTitle>API Keys & Integrations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Research API Key</label>
                  <div className="flex space-x-2">
                    <Input value="ak_live_••••••••••••••••••••••••••••••••" readOnly />
                    <Button variant="outline">Regenerate</Button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Model API Key</label>
                  <div className="flex space-x-2">
                    <Input value="mk_live_••••••••••••••••••••••••••••••••" readOnly />
                    <Button variant="outline">Regenerate</Button>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">External Integrations</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span className="text-sm">GitHub Repository</span>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span className="text-sm">Slack Notifications</span>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "appearance" && (
            <Card>
              <CardHeader>
                <CardTitle>Appearance & Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Theme</label>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setDarkMode(false)}
                      className={`flex items-center space-x-2 p-3 border rounded ${
                        !darkMode ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                    >
                      <Sun className="h-4 w-4" />
                      <span className="text-sm">Light</span>
                    </button>
                    <button 
                      onClick={() => setDarkMode(true)}
                      className={`flex items-center space-x-2 p-3 border rounded ${
                        darkMode ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                    >
                      <Moon className="h-4 w-4" />
                      <span className="text-sm">Dark</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Language</label>
                  <select className="w-full p-2 border rounded">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Notifications</label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email notifications</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Model completion alerts</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Weekly reports</span>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "security" && (
            <Card>
              <CardHeader>
                <CardTitle>Security & Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Password</h3>
                  <Button variant="outline">Change Password</Button>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Enable 2FA</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Data Backup</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">Download Data Export</Button>
                    <Button variant="outline" className="w-full justify-start">Backup Settings</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}