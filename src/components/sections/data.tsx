"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, BarChart3, Database, Beaker, CheckCircle, AlertCircle } from "lucide-react"

export default function Data() {
  const [activeTab, setActiveTab] = useState("datasets")
  
  const datasets = [
    { name: "protein_sequences.fasta", size: "2.4 MB", rows: "1,247", status: "validated", type: "FASTA" },
    { name: "gene_expression.csv", size: "5.1 MB", rows: "3,891", status: "processing", type: "CSV" },
    { name: "cell_counts.xlsx", size: "1.8 MB", rows: "892", status: "error", type: "Excel" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Data Management</h1>
        <p className="text-gray-600">Upload and analyze biological datasets</p>
      </div>
      
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button 
          onClick={() => setActiveTab("datasets")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "datasets" ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Database className="h-4 w-4 inline mr-2" />
          Datasets
        </button>
        <button 
          onClick={() => setActiveTab("annotations")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "annotations" ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <FileText className="h-4 w-4 inline mr-2" />
          Annotations
        </button>
        <button 
          onClick={() => setActiveTab("records")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "records" ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Beaker className="h-4 w-4 inline mr-2" />
          Lab Records
        </button>
      </div>
      
      {activeTab === "datasets" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload Dataset
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-blue-300 bg-blue-50 rounded-lg p-8 text-center hover:bg-blue-100 transition-colors">
                <Upload className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                <p className="text-gray-700 mb-2">Drag and drop CSV, FASTA, or Excel files</p>
                <p className="text-sm text-gray-500 mb-4">Supports genomic data, protein sequences, and lab results</p>
                <Button>Choose Files</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Dataset Library</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {datasets.map((dataset, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">{dataset.name}</div>
                        <div className="text-sm text-gray-500">
                          {dataset.size} • {dataset.rows} rows • {dataset.type}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        {dataset.status === "validated" && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {dataset.status === "processing" && <div className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />}
                        {dataset.status === "error" && <AlertCircle className="h-4 w-4 text-red-500" />}
                        <span className="text-sm ml-1 capitalize">{dataset.status}</span>
                      </div>
                      <Button size="sm" variant="outline">Preview</Button>
                      <Button size="sm">Analyze</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {activeTab === "annotations" && (
        <Card>
          <CardContent className="p-8 text-center">
            <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Annotation Tools</h3>
            <p className="text-gray-600">Label and annotate your biological data</p>
          </CardContent>
        </Card>
      )}
      
      {activeTab === "records" && (
        <Card>
          <CardContent className="p-8 text-center">
            <Beaker className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Lab Records</h3>
            <p className="text-gray-600">Manage experimental protocols and results</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}