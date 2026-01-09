import React from 'react';
import { projects } from '../data/projects';

const Hero = () => {
    // Using a high-quality project image for the hero background
    const heroImage = projects[0]?.image;
    const title = "ANDRIAN NAZRIEL";

    return (
        <section className="o-heroHome">
            {/* Background Image */}
            <div className="o-heroHome_image">
                <img src={heroImage} alt="Hero Background" />
            </div>

            <div className="o-heroHome_wrapper">
                {/* Large Header with Staggered Letters */}
                <div className="o-heroHome_largeHeader row">
                    <div className="col-24">
                        <p className="tx-3xl" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {title.split("").map((char, i) => (
                                <span key={i} className="o-heroHome_letterWrapper">
                                    <span style={{ '--delay': `${i * 30}ms` }}>
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                </span>
                            ))}
                        </p>
                    </div>
                </div>

                {/* Hero Bottom Content */}
                <div className="o-heroHome_content row">
                    <div className="col-12 lg-col-6">
                        <h2 className="tx-xs" style={{ marginBottom: '2rem' }}>
                            Creative Developer specialized in AI Agents & Infrastructure
                        </h2>
                        <a href="#about" className="a-link tx-label">
                            <span>Discover More</span>
                        </a>
                    </div>

                    <div className="col-12 o-heroHome_scrollDown">
                        <p className="tx-xs">
                            {"SCROLLER".split("").map((char, i) => (
                                <span key={i} className="o-heroHome_letterWrapper">
                                    <span style={{ '--delay': `${i * 50}ms` }}>{char}</span>
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className="col-12 lg-col-6" style={{ textAlign: 'right' }}>
                        <p className="tx-xs">Latest Project: {projects[0]?.title}</p>
                        <a href="#projects" className="a-link tx-label" style={{ justifyContent: 'flex-end' }}>
                            <span>View Work</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Simple Overlay for Legibility */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)', zIndex: 1, pointerEvents: 'none' }}></div>
        </section>
    );
};

export default Hero;
