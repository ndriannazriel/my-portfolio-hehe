import React, { useEffect, useState } from 'react';
import { projects } from '../data/projects';

const Loader = ({ onComplete }) => {
    const [percent, setPercent] = useState(0);
    const [phase, setPhase] = useState('loading'); // loading, flash, dying
    const [flashIndex, setFlashIndex] = useState(0);

    const sampleImages = projects.slice(0, 5).map(p => p.image);

    useEffect(() => {
        // 1. Percentage Counter Phase
        if (phase === 'loading') {
            const interval = setInterval(() => {
                setPercent((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setPhase('flash'), 300);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 15);
            return () => clearInterval(interval);
        }

        // 2. Rapid Image Sequence Phase
        if (phase === 'flash') {
            const flashInterval = setInterval(() => {
                setFlashIndex((prev) => {
                    if (prev >= sampleImages.length - 1) {
                        clearInterval(flashInterval);
                        setTimeout(() => setPhase('dying'), 400);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 100); // 100ms per image for "quick" feel
            return () => clearInterval(flashInterval);
        }

        // 3. Final Exit Phase
        if (phase === 'dying') {
            const timer = setTimeout(onComplete, 800);
            return () => clearTimeout(timer);
        }
    }, [phase, onComplete, sampleImages.length]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100dvh',
                backgroundColor: '#000',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
                transform: phase === 'dying' ? 'translateY(-100%)' : 'translateY(0)',
                overflow: 'hidden'
            }}
        >
            {/* Percentage Count Display */}
            {phase === 'loading' && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '5rem',
                        left: '3rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.2rem',
                        color: 'var(--color-gray-700)',
                        letterSpacing: '0.2em'
                    }}
                >
                    <span>INITIALIZING... {percent}%</span>
                </div>
            )}

            {/* AN Brand Center Stage */}
            <div
                className="tx-3xl"
                style={{
                    display: 'flex',
                    zIndex: 10,
                    mixBlendMode: 'difference',
                    transition: 'opacity 0.5s ease',
                    opacity: phase === 'flash' ? 0.3 : 1
                }}
            >
                {['A', 'N'].map((char, i) => (
                    <span
                        key={i}
                        style={{
                            display: 'inline-block',
                            animation: 'slideInUp 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards',
                            animationDelay: `${i * 0.1}s`,
                            transform: 'translateY(100%)',
                            margin: '0 0.5rem'
                        }}
                    >
                        {char}
                    </span>
                ))}
            </div>

            {/* Image Sequence (Flash) Component */}
            {phase === 'flash' && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 5 }}>
                    <img
                        src={sampleImages[flashIndex]}
                        alt="Sequence"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                    />
                </div>
            )}

            <style>{`
        @keyframes slideInUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default Loader;
