import React from 'react'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import AppPreviewSection from '@/components/AppPreviewSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeaturesSection />
      <AppPreviewSection />
      <HowItWorksSection />
      <Footer />
    </main>
  )
}