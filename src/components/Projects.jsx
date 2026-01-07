
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
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem' }}>
                    <h2 className="animate-fade-in" style={{ margin: 0, textAlign: 'center' }}>Featured Projects</h2>
                    {/* Counter for Desktop - Absolutely positioned right */}
                    <div className="hidden-mobile" style={{
                        position: 'absolute',
                        right: 0,
                        fontSize: '1.2rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-primary)'
                    }}>
                        0{activeIndex + 1} / 0{projects.length}
                    </div>
                </div>

                {/* Carousel Container */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>

                    {/* Viewport for clipping */}
                    <div style={{ overflow: 'hidden', width: '100%' }}>
                        {/* Slides Track */}
                        <div
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                            style={{
                                display: 'flex',
                                width: '100%',
                                transform: `translateX(-${activeIndex * 100}%)`,
                                transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                                cursor: 'grab'
                            }}
                        >
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows (Outside) */}
                    <button
                        onClick={prevSlide}
                        className="nav-arrow"
                        style={{
                            position: 'absolute',
                            left: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="nav-arrow"
                        style={{
                            position: 'absolute',
                            right: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                    >
                        <ChevronRight size={28} />
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

            {/* Styles Injection */}
            <style>{`
                @media (max-width: 900px) {
                    .nav-arrow {
                        display: none !important; /* Hide arrows on smaller screens where they won't fit */
                    }
                    .hidden-mobile {
                        display: none;
                    }
                }
            `}</style>
        </section>
    )
}

const ProjectCard = ({ project }) => {
    const [bgPos, setBgPos] = useState({ x: 50, y: 50 });
    const isDragging = useRef(false);
    const startPos = useRef({ x: 0, y: 0 });
    const initialBgPos = useRef({ x: 50, y: 50 });

    const handleMouseDown = (e) => {
        e.stopPropagation(); // Prevent carousel swipe
        isDragging.current = true;
        startPos.current = { x: e.clientX, y: e.clientY };
        initialBgPos.current = { ...bgPos };
        e.target.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.stopPropagation();

        const deltaX = e.clientX - startPos.current.x;
        const deltaY = e.clientY - startPos.current.y;

        // Sensitivity factor (how much the image moves vs mouse)
        // Since backgroundPosition is %, we need to scale pixels to %.
        // Assuming approx 400px width, 1px ~ 0.25%
        const sensitivity = 0.2;

        // Inverse the delta because "dragging the image" usually feels like
        // pulling the content. If I pull right, content moves right (which effectively shows left part)
        // Wait, background-position %: 0% is Left, 100% is Right.
        // If I increase %, I show more of the right side? No.
        // position x% means the point x% across the image coincides with x% across container.
        // It's confusing.
        // Let's stick to simple delta addition and clamp 0-100.

        let newX = initialBgPos.current.x - (deltaX * sensitivity);
        let newY = initialBgPos.current.y - (deltaY * sensitivity);

        // Clamp
        newX = Math.max(0, Math.min(100, newX));
        newY = Math.max(0, Math.min(100, newY));

        setBgPos({ x: newX, y: newY });
    };

    const handleMouseUp = (e) => {
        isDragging.current = false;
        if (e.target) e.target.style.cursor = 'grab';
        // Spring back to center
        setBgPos({ x: 50, y: 50 });
    };

    const handleMouseLeave = (e) => {
        isDragging.current = false;
        if (e.target) e.target.style.cursor = 'grab';
        // Spring back to center
        setBgPos({ x: 50, y: 50 });
    };

    return (
        <div
            style={{
                minWidth: '100%',
                width: '100%',
                padding: '0 10px',
                boxSizing: 'border-box',
                flexShrink: 0,
                opacity: 1,
            }}
        >
            <div className="glass-panel" style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                minHeight: '500px'
            }}>
                {/* Image Section */}
                <div
                    style={{ height: '300px', overflow: 'hidden', position: 'relative' }}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `url(${project.image})`,
                        backgroundSize: '120%', // Slightly zoomed in, room to drag
                        backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
                        backgroundRepeat: 'no-repeat',
                        transition: isDragging.current ? 'none' : 'background-position 0.2s ease', // Snap when dragging, smooth otherwise
                        backgroundColor: '#000',
                        cursor: 'grab'
                    }}
                        onMouseDown={handleMouseDown}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                        pointerEvents: 'none'
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
                            {project.tech?.map(t => (
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
    );
};

export default Projects;
