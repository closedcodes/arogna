"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Play, Settings, BarChart3, Download, GitCompare } from "lucide-react"

export default function Models() {
  type Model = {
    name: string;
    type: string;
    accuracy: string;
    application: string;
    dataSource: string;
    lastTrained: string;
  };
  const [selectedModel, setSelectedModel] = useState<Model | null>(null)
  
  const models = [
    { 
      name: "CRISPR Efficiency Predictor", 
      type: "Classification", 
      accuracy: "94.2%", 
      application: "Gene Editing",
      dataSource: "CRISPR-ML Dataset",
      lastTrained: "2 days ago"
    },
    { 
      name: "Protein Structure Analyzer", 
      type: "Deep Learning", 
      accuracy: "89.7%", 
      application: "Protein Folding",
      dataSource: "PDB Database",
      lastTrained: "1 week ago"
    },
    { 
      name: "Drug-Target Interaction", 
      type: "Neural Network", 
      accuracy: "91.5%", 
      application: "Drug Discovery",
      dataSource: "ChEMBL Database",
      lastTrained: "3 days ago"
    },
    { 
      name: "Gene Expression Classifier", 
      type: "Random Forest", 
      accuracy: "87.3%", 
      application: "Cancer Detection",
      dataSource: "TCGA Dataset",
      lastTrained: "5 days ago"
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Models</h1>
          <p className="text-gray-600">Train and deploy machine learning models</p>
        </div>
        <Button variant="outline">
          <GitCompare className="h-4 w-4 mr-2" />
          Compare Models
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {models.map((model, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedModel(model)}>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Brain className="h-5 w-5 mr-2 text-blue-600" />
                {model.name}
              </CardTitle>
              <div className="space-y-2">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{model.type}</span>
                  <span>•</span>
                  <span>Accuracy: {model.accuracy}</span>
                </div>
                <div className="text-sm text-gray-500">
                  <div>Application: {model.application}</div>
                  <div>Data: {model.dataSource}</div>
                  <div>Last trained: {model.lastTrained}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  Deploy
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button size="sm" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Metrics
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {selectedModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{selectedModel.name}</h2>
              <Button variant="outline" onClick={() => setSelectedModel(null)}>×</Button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Model Details</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Type:</strong> {selectedModel.type}</div>
                  <div><strong>Accuracy:</strong> {selectedModel.accuracy}</div>
                  <div><strong>Application:</strong> {selectedModel.application}</div>
                  <div><strong>Data Source:</strong> {selectedModel.dataSource}</div>
                  <div><strong>Last Trained:</strong> {selectedModel.lastTrained}</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Performance Charts</h3>
                <div className="space-y-3">
                  <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">
                    ROC Curve
                  </div>
                  <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">
                    Confusion Matrix
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 mt-6">
              <Button>Retrain Model</Button>
              <Button variant="outline">View Logs</Button>
              <Button variant="outline">Download Report</Button>
            </div>
          </div>
        </div>
      )}
      
      <Card>
        <CardHeader>
          <CardTitle>Active Training</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Protein Folding Model v2.1</div>
                <div className="text-sm text-gray-500">Deep Learning • AlphaFold Architecture</div>
              </div>
              <span className="text-sm text-gray-500">75% complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-gray-500">Epoch</div>
                <div className="font-medium">750/1000</div>
              </div>
              <div>
                <div className="text-gray-500">Loss</div>
                <div className="font-medium">0.0234</div>
              </div>
              <div>
                <div className="text-gray-500">ETA</div>
                <div className="font-medium">2h 15m</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}