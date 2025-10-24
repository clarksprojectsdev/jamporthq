'use client'

import React, { useState } from 'react'

export default function HeroSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              JamPort
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Where Beats Meet Events
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-md md:max-w-lg">
            The platform for music producers to sell beats, host events, and
            connect with artists. Turn your passion into profit.
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Get Early Access
            </button>
          </form>

          {/* Small Highlights */}
          <div className="flex flex-wrap gap-6 mt-6 justify-center md:justify-start text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Coming Soon to iOS & Android</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Free to Join</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>

        {/* Mockup Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/mockup-phone.png"
            alt="JamPort App Preview"
            className="w-64 md:w-80 lg:w-96 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}