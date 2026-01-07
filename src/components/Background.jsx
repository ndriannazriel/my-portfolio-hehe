
import React, { useEffect, useState } from 'react';
import bgImage from '../assets/bg.png'; // Importing image directly guarantees path resolution

const Background = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const styles = {
        container: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -50,
            overflow: 'hidden',
            backgroundColor: '#0a0a0a',
        },
        bgImage: {
            position: 'absolute',
            inset: 0, // Top/Left/Right/Bottom: 0
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.1s ease-out',
            transform: `scale(1.1) translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            filter: 'brightness(0.6)',
        },
        blob1: {
            position: 'absolute',
            top: '25%',
            left: '25%',
            width: '400px',
            height: '400px',
            background: 'rgba(59, 130, 246, 0.2)', // Blue
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 20s infinite',
        },
        blob2: {
            position: 'absolute',
            top: '33%',
            right: '25%',
            width: '300px',
            height: '300px',
            background: 'rgba(139, 92, 246, 0.2)', // Violet
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 25s infinite',
            animationDelay: '5s',
        },
        blob3: {
            position: 'absolute',
            bottom: '25%',
            left: '33%',
            width: '350px',
            height: '350px',
            background: 'rgba(6, 182, 212, 0.2)', // Cyan
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 22s infinite',
            animationDelay: '2s',
        },
        noise: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0.15,
            backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
            filter: 'contrast(120%) brightness(100%)',
            pointerEvents: 'none',
        },
        overlay: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(5, 5, 10, 0.6)', // Matches previous App.jsx overlay
        }
    };

    return (
        <div style={styles.container}>
            {/* 1. Base Background Image */}
            <div style={styles.bgImage} />

            {/* 2. Animated Glowing Orbs */}
            <div className="animate-blob" style={styles.blob1} />
            <div className="animate-blob" style={styles.blob2} />
            <div className="animate-blob" style={styles.blob3} />

            {/* 3. Noise Texture Overlay */}
            <div style={styles.noise} />

            {/* 4. Dark Overlay */}
            <div style={styles.overlay} />
        </div>
    );
};

export default Background;
