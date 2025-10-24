'use client'

import React, { useState } from 'react'

export default function AppPreviewSection() {
  const [activeTab, setActiveTab] = useState('beats')

  const tabs = [
    { id: 'beats', label: 'Beat Marketplace', icon: '🎵' },
    { id: 'events', label: 'Events', icon: '🎫' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ]

  const mockupContent = {
    beats: {
      title: 'Discover Amazing Beats',
      description: 'Browse thousands of high-quality beats from talented producers worldwide',
      items: [
        { title: 'Trap Beat 2024', producer: 'BeatMaster', price: '$29.99', plays: '2.3k' },
        { title: 'Hip Hop Instrumental', producer: 'SoundWizard', price: '$19.99', plays: '1.8k' },
        { title: 'R&B Soul Beat', producer: 'MelodyMaker', price: '$24.99', plays: '3.1k' }
      ]
    },
    events: {
      title: 'Upcoming Events',
      description: 'Find and attend the hottest music events in your city',
      items: [
        { title: 'Summer Music Festival', date: 'July 15, 2024', location: 'Central Park', price: '$45' },
        { title: 'Underground Hip Hop Night', date: 'July 22, 2024', location: 'The Venue', price: '$25' },
        { title: 'Producer Showcase', date: 'July 30, 2024', location: 'Studio 54', price: '$35' }
      ]
    },
    profile: {
      title: 'Your Dashboard',
      description: 'Manage your beats, events, and track your success',
      items: [
        { title: 'Total Sales', value: '$2,450', change: '+12%' },
        { title: 'Active Beats', value: '24', change: '+3' },
        { title: 'Events Created', value: '8', change: '+2' }
      ]
    }
  }

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="gradient-text">JamPort</span> in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of music collaboration and event promotion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="relative">
            <div className="mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-6 h-3 border border-white rounded-sm"></div>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex border-b border-gray-800">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex flex-col items-center py-4 px-2 ${
                        activeTab === tab.id 
                          ? 'text-purple-400 border-b-2 border-purple-400' 
                          : 'text-gray-500'
                      }`}
                    >
                      <span className="text-lg mb-1">{tab.icon}</span>
                      <span className="text-xs">{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Content Area */}
                <div className="p-4 h-full overflow-y-auto">
                  <div className="mb-4">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {mockupContent[activeTab as keyof typeof mockupContent].title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {mockupContent[activeTab as keyof typeof mockupContent].description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {mockupContent[activeTab as keyof typeof mockupContent].items.map((item, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-white font-medium text-sm">{item.title}</h4>
                          {activeTab === 'beats' && (
                            <span className="text-purple-400 font-semibold text-sm">
                              {(item as any).price}
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-400">
                          <span>{(item as any).producer || (item as any).date || (item as any).value}</span>
                          <span>{(item as any).plays || (item as any).location || (item as any).change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                {activeTab === 'beats' && 'Sell Your Beats'}
                {activeTab === 'events' && 'Promote Your Events'}
                {activeTab === 'profile' && 'Track Your Success'}
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {activeTab === 'beats' && 'Upload your beats, set your prices, and start earning from your music. Our platform makes it easy to showcase your talent and connect with artists who need your sound.'}
                {activeTab === 'events' && 'Create and promote music events with ease. Sell tickets, manage attendees, and build a community around your music. From intimate shows to major festivals.'}
                {activeTab === 'profile' && 'Monitor your growth with detailed analytics. Track sales, event attendance, and audience engagement. Make data-driven decisions to grow your music career.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Mobile Optimized</span>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
