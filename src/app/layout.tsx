import React from 'react'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>JamPort - Where Beats Meet Events</title>
        <meta name="description" content="The ultimate platform for music producers to sell beats and promote events. Connect with artists, showcase your talent, and grow your music career." />
        <meta name="keywords" content="music, beats, events, producers, artists, music marketplace, tickets" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}