"use client" 
import { ThemeProvider } from '@/app/Contexts/ThemeContext'
import './globals.css'
import { SessionProvider } from 'next-auth/react'



export default function RootLayout({ children }) {
 
  return (
    <ThemeProvider>
      <SessionProvider>
    <html lang="en">
    <link rel="manifest" href="manifest.json"></link>
      <body>{children}</body>

    </html>
    </SessionProvider>
    </ThemeProvider>
  )
}
