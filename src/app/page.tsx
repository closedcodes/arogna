"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dna, Microscope, Brain, Zap, Users, Shield } from "lucide-react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (isAuthenticated === "true") {
      router.push("/console")
    }
  }, [router])
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dna className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Arogna</span>
          </div>
          <Button onClick={() => router.push("/auth/login")}>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Biotechnology
          <span className="block text-blue-600">Research & Development</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Accelerating biological discovery through intelligent computation. Build self-learning systems that simulate, model, and optimize biological processes with precision.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => router.push("/auth/login")}>Start Research</Button>
          <Button variant="outline" size="lg" onClick={() => router.push("/auth/login")}>Learn More</Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Microscope className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Drug Discovery</h3>
            <p className="text-gray-600">AI-driven drug discovery with predictive modeling and molecular simulation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Brain className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cell Modeling</h3>
            <p className="text-gray-600">Advanced cell and tissue modeling for biological system understanding.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Dna className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Genomics Analysis</h3>
            <p className="text-gray-600">Comprehensive genomics analysis with machine learning insights.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Zap className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Synthetic Biology</h3>
            <p className="text-gray-600">Design and optimize synthetic biological systems with AI precision.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Users className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration Tools</h3>
            <p className="text-gray-600">Seamless collaboration platform for research teams and labs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Shield className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Infrastructure</h3>
            <p className="text-gray-600">Enterprise-grade security for sensitive biological data and research.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Research?</h2>
          <p className="text-xl mb-8 opacity-90">Join the future of programmable biology</p>
          <Button variant="secondary" size="lg" onClick={() => router.push("/auth/login")}>Start Your Journey</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Dna className="h-6 w-6" />
            <span className="text-lg font-semibold">Arogna</span>
          </div>
          <p className="text-gray-400">Building the future of biological discovery</p>
        </div>
      </footer>
    </div>
  )
}