
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const PresentationMode = ({ onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const [zoomImage, setZoomImage] = useState(null);

    // Auto-hide controls logic
    useEffect(() => {
        let timeout;
        const handleMouseMove = () => {
            setShowControls(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => setShowControls(false), 2500);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeout);
        };
    }, []);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    // Extend slides to include an Intro and Outro slide
    // FILTER: Only show specific projects for the presentation (IDs: 1, 2, 5)
    // You can add or remove IDs from this list [1, 2, 5] to control what shows up.
    const selectedProjectIds = [4, 5, 7, 6, 8];
    const presentationProjects = projects.filter(p => selectedProjectIds.includes(p.id));

    const slides = [
        { type: 'intro', title: 'My Work', subtitle: 'Internship Portfolio Presentation' },
        ...presentationProjects.map(p => ({ ...p, type: 'project' })),
        { type: 'outro', title: 'Thank You', subtitle: 'Questions & Discussion' }
    ];

    const currentSlide = slides[currentIndex];

    const nextSlide = () => {
        if (currentIndex < slides.length - 1 && !isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex(prev => prev + 1);
                setIsTransitioning(false);
            }, 300);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0 && !isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex(prev => prev - 1);
                setIsTransitioning(false);
            }, 300);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (zoomImage) {
                if (e.key === 'Escape') setZoomImage(null);
                return;
            }
            if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') onClose();
            if (e.key === 'f') toggleFullScreen();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, isTransitioning, zoomImage]);

    // Gallery auto-cycling for engagement photos
    useEffect(() => {
        setGalleryIndex(0);
    }, [currentIndex]);

    useEffect(() => {
        if (currentSlide?.gallery?.length > 1) {
            const interval = setInterval(() => {
                setGalleryIndex(prev => (prev + 1) % currentSlide.gallery.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [currentSlide]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col overflow-hidden animate-fade-in"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: '#000',
                zIndex: 9999,
                cursor: showControls ? 'default' : 'none'
            }}>

            {/* Background Ambience */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)`,
                    transform: 'scale(1.5)',
                    filter: 'blur(100px)'
                }}
            />

            {/* Header Controls */}
            <div
                className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 transition-all duration-500"
                style={{
                    opacity: showControls ? 1 : 0,
                    transform: showControls ? 'translateY(0)' : 'translateY(-20px)',
                    pointerEvents: showControls ? 'auto' : 'none'
                }}
            >
                <div className="flex items-center gap-6">
                    <div className="text-white/50 text-sm font-mono tracking-widest">
                        {currentIndex + 1} / {slides.length}
                    </div>
                    {/* Navigation Hints */}
                    <div className="hidden-mobile text-white/20 text-xs font-mono">
                        ← PREV | NEXT →
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleFullScreen}
                        className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-all text-white/70 hover:text-white"
                        title="Toggle Fullscreen (F)"
                    >
                        <Maximize2 size={20} />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white"
                        title="Close (Esc)"
                    >
                        <X size={24} />
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className={`flex-1 flex items-center justify-center p-12 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>

                {/* INTRO SLIDE */}
                {currentSlide.type === 'intro' && (
                    <div className="text-center max-w-4xl">
                        <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent"
                            style={{ fontSize: '5rem', lineHeight: 1.1, marginBottom: '2rem' }}>
                            {currentSlide.title}
                        </h1>
                        <p className="text-2xl text-gray-400 font-light">{currentSlide.subtitle}</p>
                        <div className="mt-12 text-sm text-gray-500 animate-pulse">
                            Use ARROW KEYS to navigate
                        </div>
                    </div>
                )}

                {/* PROJECT SLIDE */}
                {currentSlide.type === 'project' && (
                    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                        {/* Left: Image */}
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur opacity-30"></div>
                            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900 border border-white/10 shadow-2xl cursor-zoom-in"
                                onClick={() => setZoomImage(currentSlide.image)}>
                                <img
                                    src={currentSlide.image}
                                    alt={currentSlide.title}
                                    className="w-full h-full object-cover"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxHeight: '80vh', overflowY: 'auto', paddingRight: '1rem' }}>
                            {/* Header */}
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: '#60a5fa', fontFamily: 'monospace', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    <currentSlide.icon size={16} />
                                    <span>{currentSlide.category}</span>
                                </div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '1rem' }}>
                                    {currentSlide.title}
                                </h2>
                                <p style={{ fontSize: '1rem', color: '#9ca3af', lineHeight: 1.7 }}>
                                    {currentSlide.description}
                                </p>
                            </div>

                            {/* Divider */}
                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>

                            {/* Business Impact */}
                            {currentSlide.impact && (
                                <div>
                                    <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#60a5fa', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        📊 Business Impact
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                                        {Array.isArray(currentSlide.impact) ? (
                                            currentSlide.impact.map((value, index) => (
                                                <div key={index}>
                                                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>{value}</div>
                                                </div>
                                            ))
                                        ) : (
                                            Object.entries(currentSlide.impact).map(([label, value]) => (
                                                <div key={label}>
                                                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>{value}</div>
                                                    <div style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Challenge & Solution */}
                            {(currentSlide.challenge || currentSlide.solution) && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {currentSlide.challenge && (
                                        <div>
                                            <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#f87171', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                                ⚠️ Challenge
                                            </div>
                                            <p style={{ color: '#e5e7eb', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{currentSlide.challenge}</p>
                                        </div>
                                    )}
                                    {currentSlide.solution && (
                                        <div>
                                            <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#4ade80', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                                ✓ Solution
                                            </div>
                                            <p style={{ color: '#e5e7eb', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{currentSlide.solution}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Technical Architecture */}
                            {currentSlide.architecture && (
                                <div>
                                    <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#a78bfa', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        🏗️ Architecture
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                        {Object.entries(currentSlide.architecture).map(([label, value]) => (
                                            <div key={label}>
                                                <div style={{ fontSize: '0.65rem', color: '#6b7280', marginBottom: '0.25rem', textTransform: 'uppercase' }}>{label}</div>
                                                <div style={{ fontSize: '1rem', fontWeight: '600', color: 'white' }}>{value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Activity/Engagement Gallery (Requested for Right Side) */}
                            {currentSlide.gallery && currentSlide.gallery.length > 0 && (
                                <div>
                                    <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#60a5fa', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        📸 Gallery
                                    </div>
                                    <div style={{
                                        position: 'relative',
                                        height: '500px',
                                        borderRadius: '0.75rem',
                                        overflow: 'hidden',
                                        background: '#111',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        cursor: 'zoom-in'
                                    }}
                                        onClick={() => setZoomImage(currentSlide.gallery[galleryIndex])}
                                    >
                                        {currentSlide.gallery.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`Engagement ${index}`}
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    opacity: index === galleryIndex ? 1 : 0,
                                                    transition: 'opacity 0.8s ease-in-out'
                                                }}
                                            />
                                        ))}
                                        {/* Indicator Line */}
                                        <div style={{ position: 'absolute', bottom: 0, left: 0, height: '3px', background: '#3b82f6', width: `${((galleryIndex + 1) / currentSlide.gallery.length) * 100}%`, transition: 'width 0.3s ease' }}></div>
                                    </div>
                                </div>
                            )}

                            {/* Divider */}
                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>

                            {/* Tech Stack */}
                            <div>
                                <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#9ca3af', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Tech Stack
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {currentSlide.tech?.map(t => (
                                        <span key={t} style={{
                                            padding: '0.35rem 0.75rem',
                                            borderRadius: '9999px',
                                            background: 'rgba(255,255,255,0.08)',
                                            fontSize: '0.75rem',
                                            color: '#d1d5db'
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                {currentSlide.githubUrl && (
                                    <a href={currentSlide.githubUrl} target="_blank" rel="noopener noreferrer"
                                        style={{
                                            flex: 1,
                                            padding: '0.75rem 1rem',
                                            borderRadius: '0.5rem',
                                            background: 'rgba(255,255,255,0.1)',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.875rem',
                                            fontWeight: '500',
                                            color: 'white',
                                            textDecoration: 'none'
                                        }}>
                                        <Github size={16} /> View Code
                                    </a>
                                )}
                                {currentSlide.demoUrl && (
                                    <a href={currentSlide.demoUrl} target="_blank" rel="noopener noreferrer"
                                        style={{
                                            flex: 1,
                                            padding: '0.75rem 1rem',
                                            borderRadius: '0.5rem',
                                            background: '#3b82f6',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.875rem',
                                            fontWeight: '500',
                                            color: 'white',
                                            textDecoration: 'none'
                                        }}>
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* OUTRO SLIDE */}
                {currentSlide.type === 'outro' && (
                    <div className="text-center">
                        <h2 className="text-6xl font-bold mb-8" style={{ fontSize: '4rem' }}>{currentSlide.title}</h2>
                        <p className="text-2xl text-gray-400 mb-12">{currentSlide.subtitle}</p>
                        <button onClick={onClose} className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                            Return to Website
                        </button>
                    </div>
                )}

            </div>

            {/* Progress Bar */}
            <div
                className="absolute bottom-0 left-0 h-1 bg-white/10 w-full transition-opacity duration-500"
                style={{ opacity: showControls ? 1 : 0 }}
            >
                <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
                />
            </div>

            {/* Lightbox / Zoomed Image Overlay */}
            {zoomImage && (
                <div
                    onClick={() => setZoomImage(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 10000,
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        cursor: 'zoom-out',
                        animation: 'fade-in 0.3s ease'
                    }}
                >
                    <button
                        onClick={() => setZoomImage(null)}
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2rem',
                            background: 'white',
                            color: 'black',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 10
                        }}
                    >
                        <X size={24} />
                    </button>
                    <img
                        src={zoomImage}
                        alt="Zoomed view"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            borderRadius: '0.5rem',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default PresentationMode;
