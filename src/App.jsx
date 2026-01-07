import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import PresentationMode from './components/PresentationMode'
import Background from './components/Background'


function App() {
  const [showPresentation, setShowPresentation] = useState(false);

  return (
    <div className="app-container">
      {/* Animated Particles & Parallax Background */}
      <Background />

      {/* Presentation Mode Rendering */}
      {showPresentation && (
        <PresentationMode onClose={() => setShowPresentation(false)} />
      )}

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', opacity: 0.6, fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Andrian Nazriel. Built with React.</p>
        <button
          onClick={() => setShowPresentation(true)}
          style={{
            marginTop: '1rem',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#aaa',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '0.8rem'
          }}
        >
          Start Presentation Mode
        </button>
      </footer>
    </div>
  )
}

export default App
