import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogSidebar from './BlogSidebar';

const Navbar = ({ onBlogToggle }) => {
    const [showBlogHint, setShowBlogHint] = useState(false);

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '5.2rem 3rem 0',
            }}>
                <div className="row" style={{ padding: 0 }}>
                    <div className="col-12">
                        <a href="#" className="tx-xl nav-link-header" style={{ display: 'inline-flex', letterSpacing: '-0.02em', color: '#fff', textDecoration: 'none' }}>
                            AN
                        </a>
                    </div>

                    <div className="col-12" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
                            <a href="#projects" className="nav-link-header">Projects</a>
                            <a href="#about" className="nav-link-header">About</a>
                            <a href="#contact" className="nav-link-header">Contact</a>
                        </div>
                    </div>
                </div>

                {/* Blog Trigger Button - Hidden on right side */}
                <motion.button
                    className="blog-trigger-btn"
                    onClick={onBlogToggle}
                    onMouseEnter={() => setShowBlogHint(true)}
                    onMouseLeave={() => setShowBlogHint(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        position: 'fixed',
                        right: '3rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
                        zIndex: 101
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>

                    {/* Animated Ring */}
                    <motion.span
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            pointerEvents: 'none'
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.button>

                {/* Blog Hint Tooltip */}
                {showBlogHint && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        style={{
                            position: 'fixed',
                            right: '7.5rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            padding: '1rem 1.5rem',
                            borderRadius: '4px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            zIndex: 101,
                            pointerEvents: 'none'
                        }}
                    >
                        <span className="tx-label" style={{ fontSize: '1rem', color: '#fff' }}>
                            Read Blog
                        </span>
                    </motion.div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
