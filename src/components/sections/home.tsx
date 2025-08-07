import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Zap, TrendingUp, Plus, Upload, Brain } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Empowering Bio-AI Innovation
        </h1>
        <p className="text-gray-600 text-lg mb-6">Accelerate biological discovery through intelligent computation</p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">
            <Plus className="h-4 w-4 mr-2" />
            Start New Project
          </Button>
          <Button variant="outline" size="lg">
            <Upload className="h-4 w-4 mr-2" />
            Upload Dataset
          </Button>
          <Button variant="outline" size="lg">
            <Brain className="h-4 w-4 mr-2" />
            Explore Models
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Activity className="h-5 w-5 mr-2 text-green-600" />
              Active Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-sm text-gray-600">Running experiments</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Zap className="h-5 w-5 mr-2 text-blue-600" />
              Models Trained
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-sm text-gray-600">This month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
              Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-sm text-gray-600">Model accuracy</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">GPU Cluster</span>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-green-600">Online</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Data Pipeline</span>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-green-600">Active</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Model Registry</span>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-yellow-600">Syncing</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>CRISPR Model trained</span>
                </div>
                <span className="text-gray-500">2h ago</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Dataset uploaded</span>
                </div>
                <span className="text-gray-500">4h ago</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span>Analysis completed</span>
                </div>
                <span className="text-gray-500">1d ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}