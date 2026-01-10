import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="section bg-black" style={{ paddingBottom: '15rem' }}>
            <div className="row">
                <div className="col-24 mb-md">
                    <span className="tx-label clr-gray animate-reveal">Project Ribbon</span>
                </div>
            </div>

            <HorizontalRibbon projects={projects} />

            <div className="row mt-md">
                <div className="col-24" style={{ textAlign: 'center', marginTop: '8rem' }}>
                    <a href="https://github.com/ndriannazriel" target="_blank" rel="noopener noreferrer" className="tx-label" style={{ borderBottom: '1px solid #fff', paddingBottom: '0.5rem' }}>
                        View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

const HorizontalRibbon = ({ projects }) => {
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);

    // Triple the projects for infinite loop
    const infiniteProjects = [...projects, ...projects, ...projects];

    useEffect(() => {
        if (containerRef.current) {
            // Calculate width of ONE set of projects
            // Assuming they are all the same width + gap
            const track = containerRef.current.firstChild;
            const singleSetWidth = track.scrollWidth / 3;
            setItemWidth(singleSetWidth);

            // Start in the middle set
            x.set(-singleSetWidth);
        }
    }, [projects, x]);

    // Handle the infinite wrap-around
    useEffect(() => {
        const unsubscribe = x.on("change", (latest) => {
            if (itemWidth === 0) return;

            // If we've dragged past the first set into the "empty" space (left drag)
            if (latest > 0) {
                x.set(latest - itemWidth);
            }
            // If we've dragged past the second set into the third (right drag)
            else if (latest < -2 * itemWidth) {
                x.set(latest + itemWidth);
            }
        });
        return () => unsubscribe();
    }, [x, itemWidth]);

    return (
        <div
            ref={containerRef}
            className="projects-carousel"
            style={{ overflow: 'hidden' }}
        >
            <motion.div
                drag="x"
                style={{ x }}
                dragElastic={0.1}
                className="projects-track"
                whileTap={{ cursor: "grabbing" }}
            >
                {infiniteProjects.map((project, idx) => (
                    <ProjectRibbonCard key={`${project.id}-${idx}`} project={project} />
                ))}
            </motion.div>
        </div>
    );
};

const ProjectRibbonCard = ({ project }) => {
    return (
        <motion.div className="project-ribbon-card">
            <div className="project-ribbon-card_image">
                <img src={project.image} alt={project.title} loading="lazy" />
            </div>

            <div className="project-ribbon-card_meta">
                <h3 className="project-ribbon-card_title">{project.title}</h3>
                <span className="project-ribbon-card_category">{project.category}</span>
            </div>

            <p className="project-ribbon-card_description">
                {project.description}
            </p>

            <div style={{ marginTop: '2rem' }}>
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tx-label"
                    style={{ fontSize: '1.2rem', color: '#fff' }}
                    onPointerDown={(e) => e.stopPropagation()} // Allow clicking without triggering drag
                >
                    View Project →
                </a>
            </div>
        </motion.div>
    );
};

export default Projects;
