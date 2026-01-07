
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const PresentationMode = ({ onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Extend slides to include an Intro and Outro slide
    // FILTER: Only show specific projects for the presentation (IDs: 1, 2, 5)
    // You can add or remove IDs from this list [1, 2, 5] to control what shows up.
    const selectedProjectIds = [1, 2, 5];
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
            if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, isTransitioning]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col overflow-hidden animate-fade-in"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#000', zIndex: 9999 }}>

            {/* Background Ambience */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)`,
                    transform: 'scale(1.5)',
                    filter: 'blur(100px)'
                }}
            />

            {/* Header Controls */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
                <div className="text-white/50 text-sm font-mono">
                    SLIDE {currentIndex + 1} / {slides.length}
                </div>
                <button
                    onClick={onClose}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white"
                >
                    <X size={24} />
                </button>
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
                            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900 border border-white/10 shadow-2xl">
                                <img
                                    src={currentSlide.image}
                                    alt={currentSlide.title}
                                    className="w-full h-full object-cover"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4 text-blue-400 font-mono text-sm">
                                    <currentSlide.icon size={18} />
                                    <span>{currentSlide.category}</span>
                                </div>
                                <h2 className="text-5xl font-bold mb-6" style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                                    {currentSlide.title}
                                </h2>
                                <p className="text-xl text-gray-400 leading-relaxed">
                                    {currentSlide.description}
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-6 py-6 border-t border-white/10 border-b"
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                {Object.entries(currentSlide.stats).map(([label, value]) => (
                                    <div key={label}>
                                        <div className="text-2xl font-bold text-white mb-1" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</div>
                                        <div className="text-sm text-gray-500 font-mono uppercase">{label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-3">
                                {currentSlide.tech.map(t => (
                                    <span key={t} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                                        {t}
                                    </span>
                                ))}
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
            <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full">
                <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
                />
            </div>
        </div>
    );
};

export default PresentationMode;
