"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, Clock, Users, Edit3, CheckSquare } from "lucide-react"

export default function Reports() {
  const [showGenerator, setShowGenerator] = useState(false)
  const [selectedSections, setSelectedSections] = useState([])
  
  const reports = [
    { name: "Monthly Research Summary", date: "2024-01-15", type: "PDF", status: "Published" },
    { name: "CRISPR Efficiency Analysis", date: "2024-01-12", type: "HTML", status: "Draft" },
    { name: "Protein Structure Report", date: "2024-01-10", type: "PDF", status: "Published" },
    { name: "Drug Discovery Progress", date: "2024-01-08", type: "PDF", status: "Scheduled" },
  ]
  
  const reportSections = [
    { id: "objectives", name: "Objectives", description: "Research goals and hypotheses" },
    { id: "methods", name: "Methods", description: "Experimental procedures and protocols" },
    { id: "results", name: "Results", description: "Data analysis and findings" },
    { id: "discussion", name: "Discussion", description: "Interpretation and implications" },
    { id: "conclusion", name: "Conclusion", description: "Summary and future work" },
  ]

  const toggleSection = (sectionId) => {
    setSelectedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Reports</h1>
          <p className="text-gray-600">Generate and manage research reports</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Clock className="h-4 w-4 mr-2" />
            Schedule
          </Button>
          <Button onClick={() => setShowGenerator(!showGenerator)}>
            <FileText className="h-4 w-4 mr-2" />
            Custom Report
          </Button>
        </div>
      </div>
      
      {showGenerator && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Edit3 className="h-5 w-5 mr-2" />
              Report Generator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-3">Select Sections</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {reportSections.map((section) => (
                    <div key={section.id} className="flex items-start space-x-3">
                      <input 
                        type="checkbox" 
                        id={section.id}
                        checked={selectedSections.includes(section.id)}
                        onChange={() => toggleSection(section.id)}
                        className="mt-1"
                      />
                      <div>
                        <label htmlFor={section.id} className="font-medium text-sm cursor-pointer">
                          {section.name}
                        </label>
                        <p className="text-xs text-gray-500">{section.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button>Generate PDF</Button>
                <Button variant="outline">Generate HTML</Button>
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Share with Team
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Project Summary
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Model Performance
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Data Analysis
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Research Timeline
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <div className="font-medium text-sm">Weekly Progress</div>
                <div className="text-xs text-gray-500">Every Monday at 9:00 AM</div>
              </div>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <div className="font-medium text-sm">Monthly Summary</div>
                <div className="text-xs text-gray-500">1st of each month</div>
              </div>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
            <Button className="w-full" variant="outline">
              <Clock className="h-4 w-4 mr-2" />
              New Schedule
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Report Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-3 text-blue-600" />
                  <div>
                    <div className="font-medium">{report.name}</div>
                    <div className="text-sm text-gray-500 flex items-center space-x-3">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {report.date}
                      </span>
                      <span>{report.type}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        report.status === "Published" ? "bg-green-100 text-green-800" :
                        report.status === "Draft" ? "bg-yellow-100 text-yellow-800" :
                        "bg-blue-100 text-blue-800"
                      }`}>
                        {report.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}