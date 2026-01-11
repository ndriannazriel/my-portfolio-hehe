import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsBg from '../assets/menu/projects_bg.png';
import blogsBg from '../assets/menu/blogs_bg.png';
import resumeBg from '../assets/menu/resume_bg.png';
import connectBg from '../assets/menu/connect_bg.png';

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
        initial: { y: 0, color: 'rgba(255, 255, 255, 0.3)' },
        hover: {
            y: '110%',
            color: '#ffffff',
            transition: { duration: 2, ease: [0.19, 1, 0.22, 1] }
        }
    };

    const cloneVariants = {
        initial: { y: '-110%', color: 'rgba(255, 255, 255, 0.3)' },
        hover: {
            y: 0,
            color: '#ffffff',
            transition: { duration: 2, ease: [0.19, 1, 0.22, 1] }
        }
    };

    return (
        <section className="interactive-menu" style={{ background: 'transparent' }}>
            {/* Background Container - Z-Index 0 */}
            <div className="menu-bg-container">
                {menuItems.map((item) => (
                    <img
                        key={item.id}
                        src={item.bg}
                        alt=""
                        className={`menu-bg-image ${activeBg === item.id ? 'is-active' : ''}`}
                    />
                ))}
            </div>

            {/* Intro Text Block */}
            <div className="menu-intro">
                <div className="menu-intro_wrapper">
                    <h3 className="menu-intro_title">
                        A MULTIDISCIPLINARY DESIGNER & FULL-STACK ENGINEER.<br />
                        CRAFTING HIGH-IMPACT DIGITAL EXPERIENCES.
                    </h3>
                    <p className="menu-intro_description">
                        My expertise spans across four complementary pillars, delivering end-to-end solutions that merge technical precision with aesthetic excellence, tailored to the unique demands of every project.
                    </p>
                </div>
            </div>

            {/* Grid Container - Z-Index 10 */}
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
                        <div className="menu-item_content">
                            <div className="menu-item_title_wrapper">
                                <motion.h2
                                    className="menu-item_title"
                                    variants={textVariants}
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.h2
                                    className="menu-item_title menu-item_title--clone"
                                    variants={cloneVariants}
                                    aria-hidden="true"
                                >
                                    {item.title}
                                </motion.h2>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default InteractiveMenu;
