import React from 'react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Sign Up & Create Profile',
      description: 'Join JamPort in seconds. Set up your producer profile, upload your best work, and tell your story.',
      icon: '👤',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '02',
      title: 'Upload Your Beats',
      description: 'Add your beats with high-quality previews, set your prices, and choose your licensing terms.',
      icon: '🎵',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '03',
      title: 'Create Events',
      description: 'Promote your shows, concerts, and music events. Sell tickets and manage your audience.',
      icon: '🎫',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'Connect & Earn',
      description: 'Network with artists, sell your beats, fill your events, and grow your music career.',
      icon: '💰',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">JamPort</span> Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started in minutes and begin your journey to music success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-700 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-xl mb-6`}>
                  {step.number}
                </div>

                {/* Step Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Step Content */}
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Start Your Music Journey?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of producers who are already using JamPort to grow their music careers and connect with artists worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Get Early Access
              </button>
              <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Active Producers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Beats Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1K+</div>
            <div className="text-gray-400">Events Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">$2M+</div>
            <div className="text-gray-400">Earnings Generated</div>
          </div>
        </div>
      </div>
    </section>
  )
}
