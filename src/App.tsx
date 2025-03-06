
import React from 'react'
import { ThemeProvider } from './components/theme/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="container p-4 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Motion Mentors</h1>
          <p className="text-center">Your fitness journey begins here.</p>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
