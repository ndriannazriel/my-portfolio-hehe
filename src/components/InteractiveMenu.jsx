import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsBg from '../assets/menu/projects_bg.png';
import blogsBg from '../assets/menu/blogs_bg.png';
import resumeBg from '../assets/menu/resume_bg.png';
import connectBg from '../assets/menu/connect_bg.png';
import defaultBg from '../assets/bg.png';

const menuItems = [
    {
        id: 'projects',
        title: 'Projects',
        label: 'Portfolio Showcase',
        bg: projectsBg,
        link: '#projects'
    },
    {
        id: 'blogs',
        title: 'Blogs',
        label: 'Writing & Thoughts',
        bg: blogsBg,
        link: '#blogs'
    },
    {
        id: 'resume',
        title: 'Resume',
        label: 'Professional Experience',
        bg: resumeBg,
        link: '#resume'
    },
    {
        id: 'connect',
        title: 'Connect',
        label: 'Contact & Socials',
        bg: connectBg,
        link: '#contact'
    }
];

const InteractiveMenu = () => {
    const [activeBg, setActiveBg] = useState(null);

    const textVariants = {
        initial: { y: 0, color: 'var(--color-text)' },
        hover: {
            y: -10,
            color: '#ffffff',
            transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] }
        }
    };

    const labelVariants = {
        initial: { y: 0, opacity: 0.6 },
        hover: {
            y: -5,
            opacity: 1,
            transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] }
        }
    };

    return (
        <section className="interactive-menu">
            {/* Background Container */}
            <div className="menu-bg-container">
                {/* Default Hero Background */}
                <img
                    src={defaultBg}
                    alt=""
                    className={`menu-bg-image ${activeBg === null ? 'is-active' : ''}`}
                    style={{ opacity: activeBg === null ? 0.3 : 0 }}
                />

                {menuItems.map((item) => (
                    <img
                        key={item.id}
                        src={item.bg}
                        alt=""
                        className={`menu-bg-image ${activeBg === item.id ? 'is-active' : ''}`}
                    />
                ))}
            </div>

            {/* Grid Container */}
            <div className="menu-grid">
                {menuItems.map((item) => (
                    <motion.a
                        key={item.id}
                        href={item.link}
                        className="menu-item"
                        onMouseEnter={() => setActiveBg(item.id)}
                        onMouseLeave={() => setActiveBg(null)}
                        initial="initial"
                        whileHover="hover"
                    >
                        <div className="menu-item_reveal" />

                        <div className="menu-item_content">
                            <motion.h2
                                className="menu-item_title"
                                variants={textVariants}
                            >
                                {item.title}
                            </motion.h2>
                            <motion.span
                                className="menu-item_label"
                                variants={labelVariants}
                            >
                                {item.label}
                            </motion.span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default InteractiveMenu;
