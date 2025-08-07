"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Search, Plus, ChevronRight, ChevronDown, Folder, FileText, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Knowledge() {
  const [expandedTopics, setExpandedTopics] = useState(["crispr"])
  const [selectedNote, setSelectedNote] = useState(null)
  
  const knowledgeTree = [
    {
      id: "crispr",
      name: "CRISPR Research",
      type: "topic",
      children: [
        { id: "crispr-efficiency", name: "Efficiency Studies", type: "subtopic", notes: 12 },
        { id: "crispr-offtarget", name: "Off-target Effects", type: "subtopic", notes: 8 },
      ]
    },
    {
      id: "proteins",
      name: "Protein Analysis",
      type: "topic",
      children: [
        { id: "protein-folding", name: "Folding Mechanisms", type: "subtopic", notes: 15 },
        { id: "protein-structure", name: "Structure Prediction", type: "subtopic", notes: 23 },
      ]
    },
    {
      id: "drug-discovery",
      name: "Drug Discovery",
      type: "topic",
      children: [
        { id: "drug-targets", name: "Target Identification", type: "subtopic", notes: 7 },
        { id: "drug-screening", name: "Virtual Screening", type: "subtopic", notes: 11 },
      ]
    }
  ]

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Knowledge Vault</h1>
          <p className="text-gray-600">Research insights and documentation</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Note
        </Button>
      </div>
      
      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input placeholder="Semantic search across all notes..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Sparkles className="h-4 w-4 mr-2" />
          AI Summarize
        </Button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Knowledge Tree</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {knowledgeTree.map((topic) => (
                <div key={topic.id}>
                  <div 
                    className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                    onClick={() => toggleTopic(topic.id)}
                  >
                    {expandedTopics.includes(topic.id) ? 
                      <ChevronDown className="h-4 w-4 mr-2" /> : 
                      <ChevronRight className="h-4 w-4 mr-2" />
                    }
                    <Folder className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm font-medium">{topic.name}</span>
                  </div>
                  {expandedTopics.includes(topic.id) && (
                    <div className="ml-6 space-y-1">
                      {topic.children.map((subtopic) => (
                        <div key={subtopic.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                          <div className="flex items-center">
                            <FileText className="h-3 w-3 mr-2 text-gray-500" />
                            <span className="text-sm">{subtopic.name}</span>
                          </div>
                          <span className="text-xs text-gray-400">{subtopic.notes}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Recent Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">CRISPR Efficiency Optimization</h3>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Key findings from recent experiments show 23% improvement in on-target efficiency...
                </p>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">CRISPR</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Efficiency</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">AlphaFold Integration Results</h3>
                  <span className="text-xs text-gray-500">1 week ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Comparative analysis of AlphaFold predictions vs experimental structures...
                </p>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Protein</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Structure</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">Drug-Target Interaction Patterns</h3>
                  <span className="text-xs text-gray-500">3 days ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Analysis of binding affinity patterns across 1,247 drug-target pairs...
                </p>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Drug Discovery</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Binding</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}