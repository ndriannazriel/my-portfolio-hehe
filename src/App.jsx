import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InteractiveMenu from './components/InteractiveMenu'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import PresentationMode from './components/PresentationMode'
import Background from './components/Background'
import Loader from './components/Loader'
import BlogSidebar from './components/BlogSidebar'
import BlogPost from './components/BlogPost'

function App() {
  const [showPresentation, setShowPresentation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const location = useLocation();

  const toggleBlog = () => {
    setIsBlogOpen(!isBlogOpen);
  };

  const isBlogPostPage = location.pathname.startsWith('/blog/');

  return (
    <div className="app-container">
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Animated Particles & Parallax Background */}
      <Background />

      {/* Presentation Mode Rendering */}
      {showPresentation && (
        <PresentationMode onClose={() => setShowPresentation(false)} />
      )}

      {/* Blog Sidebar - only show on home page */}
      {!isBlogPostPage && <BlogSidebar isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />}

      {/* Navbar - only show on home page */}
      {!isBlogPostPage && <Navbar onBlogToggle={toggleBlog} />}

      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <InteractiveMenu />
            <About />
            <Projects />
            <Contact />
          </main>
        } />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>

      {/* Footer - only show on home page */}
      {!isBlogPostPage && (
        <footer style={{ textAlign: 'center', padding: '6rem 2rem', opacity: 0.6, fontSize: '1.2rem', fontFamily: 'var(--font-body)', color: 'var(--color-gray-700)' }}>
          <p>&copy; {new Date().getFullYear()} Andrian Nazriel. Built with React.</p>
          <button
            onClick={() => setShowPresentation(true)}
            style={{
              marginTop: '2rem',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'inherit',
              padding: '0.8rem 1.6rem',
              borderRadius: '2px',
              cursor: 'pointer',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Presentation Mode
          </button>
        </footer>
      )}
    </div>
  )
}

export default App
