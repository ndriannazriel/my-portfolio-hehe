import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app-container">
      {/* Background Overlay for tinting */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(5, 5, 10, 0.6)',
        zIndex: -1
      }} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', opacity: 0.6, fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Andrian Nazriel. Built with React.</p>
      </footer>
    </div>
  )
}

export default App
