
import React, { useState, useRef, useEffect } from 'react';
import { projects } from '../data/projects';
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from 'lucide-react';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const sliderRef = useRef(null);

    // Minimum swipe distance (in px) 
    const minSwipeDistance = 50;

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    // Touch Handlers
    const onTouchStart = (e) => {
        setTouchEnd(null); // Reset
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    // Auto-advance (optional, good for carousels) usually, but per request "centered one at a time" often implies manual control.
    // I will stick to manual navigation to give the user control to read the content.

    return (
        <section id="projects" className="section" style={{ overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 className="animate-fade-in" style={{ margin: 0 }}>Featured Projects</h2>
                    {/* Counter for Desktop */}
                    <div className="hidden-mobile" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)' }}>
                        0{activeIndex + 1} / 0{projects.length}
                    </div>
                </div>

                {/* Carousel Container */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto', overflow: 'hidden' }}>

                    {/* Slides Track */}
                    <div
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        style={{
                            display: 'flex',
                            width: '100%', // Ensure track takes full width
                            transform: `translateX(-${activeIndex * 100}%)`,
                            transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                            cursor: 'grab'
                        }}
                    >
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                style={{
                                    minWidth: '100%',
                                    width: '100%', // Explicitly force 100% width
                                    padding: '0 10px',
                                    boxSizing: 'border-box',
                                    flexShrink: 0, // Prevent shrinking
                                    opacity: 1,
                                }}
                            >
                                <div className="glass-panel" style={{
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%', // Ensure consistent height
                                    minHeight: '500px'
                                }}>
                                    {/* Image Section */}
                                    <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: `url(${project.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)'
                                        }} />
                                    </div>

                                    {/* Content Section */}
                                    <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                                            <div>
                                                <div style={{
                                                    color: 'var(--color-primary)',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.9rem',
                                                    fontWeight: 'bold',
                                                    letterSpacing: '1px',
                                                    textTransform: 'uppercase'
                                                }}>
                                                    {project.category}
                                                </div>
                                                <h3 style={{ fontSize: '2rem', marginBottom: '0' }}>{project.title}</h3>
                                            </div>
                                            <div style={{ display: 'flex', gap: '1rem' }}>
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            padding: '0.8rem',
                                                            borderRadius: '50%',
                                                            background: 'rgba(255,255,255,0.1)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            transition: 'background 0.3s'
                                                        }}
                                                        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                                                        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                                                    >
                                                        <Github size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.7' }}>
                                            {project.description}
                                        </p>

                                        <div style={{ marginTop: 'auto' }}>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                                {project.tech.map(t => (
                                                    <span key={t} style={{
                                                        fontSize: '0.85rem',
                                                        background: 'rgba(59, 130, 246, 0.1)',
                                                        color: '#60a5fa',
                                                        padding: '0.4rem 1rem',
                                                        borderRadius: '50px',
                                                        border: '1px solid rgba(59, 130, 246, 0.2)'
                                                    }}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows (Desktop) */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            left: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            opacity: 0.5,
                            transition: 'opacity 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.opacity = 1}
                        onMouseOut={(e) => e.target.style.opacity = 0.5}
                        className="hidden-mobile-nav"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            right: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            opacity: 0.5,
                            transition: 'opacity 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.opacity = 1}
                        onMouseOut={(e) => e.target.style.opacity = 0.5}
                        className="hidden-mobile-nav"
                    >
                        <ChevronRight size={48} />
                    </button>

                </div>

                {/* Pagination Dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '2rem' }}>
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={{
                                width: index === activeIndex ? '30px' : '10px',
                                height: '10px',
                                borderRadius: '5px',
                                background: index === activeIndex ? 'var(--color-primary)' : 'rgba(255,255,255,0.2)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile Styles Injection (since we are not using css modules) */}
            <style>{`
                @media (max-width: 768px) {
                    .hidden-mobile-nav {
                        display: none !important;
                    }
                    .hidden-mobile {
                        display: none;
                    }
                }
            `}</style>
        </section>
    )
}

export default Projects;
