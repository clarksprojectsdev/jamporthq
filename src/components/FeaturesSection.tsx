import React from 'react'

export default function FeaturesSection() {
  const features = [
    {
      icon: '🎵',
      title: 'Beat Marketplace',
      description: 'Upload, showcase, and sell your beats to artists worldwide. Set your own prices and keep 100% of your earnings.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎫',
      title: 'Event Promotion',
      description: 'Create and promote music events, concerts, and shows. Sell tickets directly through the platform.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '👥',
      title: 'Artist Network',
      description: 'Connect with producers, artists, and industry professionals. Build your network and grow together.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track your sales, event attendance, and audience engagement with detailed analytics and insights.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '💬',
      title: 'Direct Messaging',
      description: 'Chat directly with buyers, collaborators, and fans. Build relationships that last beyond transactions.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🔒',
      title: 'Secure Payments',
      description: 'Safe and secure payment processing. Get paid instantly with built-in escrow protection.',
      color: 'from-teal-500 to-blue-500'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            JamPort combines the best of beat selling and event promotion in one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="beat-card group">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              <div className={`mt-4 w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gray-800/50 rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Live Platform</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Mobile App</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Web Platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
