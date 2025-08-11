"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Play, Pause, MoreHorizontal, Filter, Calendar, Tag } from "lucide-react"

export default function Projects() {
  type Project = {
    id: number;
    name: string;
    status: string;
    progress: number;
    stage: string;
    lastUpdate: string;
    tags: string[];
  };
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState("all")
  
  const projects = [
    { id: 1, name: "CRISPR Gene Editing", status: "Training", progress: 75, stage: "Training", lastUpdate: "2 hours ago", tags: ["Gene Therapy", "CRISPR"] },
    { id: 2, name: "Protein Folding Analysis", status: "Exploration", progress: 45, stage: "Exploration", lastUpdate: "1 day ago", tags: ["Protein", "Structure"] },
    { id: 3, name: "Drug Discovery Pipeline", status: "Deployment", progress: 90, stage: "Deployment", lastUpdate: "3 hours ago", tags: ["Drug Discovery", "ML"] },
    { id: 4, name: "Cell Culture Optimization", status: "Completed", progress: 100, stage: "Deployment", lastUpdate: "1 week ago", tags: ["Cell Biology"] },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-gray-600">Manage your research projects</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>
      
      <div className="flex space-x-4 items-center">
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <select className="px-3 py-1 border rounded text-sm" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Status</option>
          <option value="running">Running</option>
          <option value="paused">Paused</option>
          <option value="completed">Completed</option>
        </select>
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Date
        </Button>
        <Button variant="outline" size="sm">
          <Tag className="h-4 w-4 mr-2" />
          Tags
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedProject(project)}>
            <CardHeader>
              <CardTitle className="text-lg">{project.name}</CardTitle>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.stage === "Training" ? "bg-blue-100 text-blue-800" :
                  project.stage === "Exploration" ? "bg-yellow-100 text-yellow-800" :
                  "bg-green-100 text-green-800"
                }`}>
                  {project.stage}
                </span>
                <span className="text-xs text-gray-500">{project.lastUpdate}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-xs rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
          <div className="bg-white h-full w-96 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
              <Button variant="outline" onClick={() => setSelectedProject(null)}>×</Button>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Project Details</h3>
                <p className="text-sm text-gray-600">Stage: {selectedProject.stage}</p>
                <p className="text-sm text-gray-600">Last Updated: {selectedProject.lastUpdate}</p>
                <p className="text-sm text-gray-600">Progress: {selectedProject.progress}%</p>
              </div>
              <div className="space-y-2">
                <Button className="w-full">Edit Project</Button>
                <Button variant="outline" className="w-full">Archive</Button>
                <Button variant="outline" className="w-full">Share</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}