import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="section bg-black">
            <div className="row">
                <div className="col-24 mb-md">
                    <span className="tx-label clr-gray animate-reveal">Selection of Projects</span>
                </div>
            </div>

            <div className="row">
                <ul style={{ listStyle: 'none', width: '100%', gridColumn: 'span 24' }}>
                    {projects.map((project, index) => (
                        <li key={project.id} style={{ marginBottom: '12rem' }}>
                            <ProjectCard project={project} index={index} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="row mt-md">
                <div className="col-24" style={{ textAlign: 'center' }}>
                    <a href="https://github.com/ndriannazriel" target="_blank" rel="noopener noreferrer" className="tx-label" style={{ borderBottom: '1px solid #fff', paddingBottom: '0.5rem' }}>
                        View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="row" style={{ padding: 0 }}>
            {/* Image Column */}
            <div className={`col-24 col-12 ${isEven ? '' : 'sm-order-2'}`}>
                <div className="a-image" style={{ borderRadius: '4px', background: '#1a1a1a' }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        className="animate-reveal"
                    />
                </div>
            </div>

            {/* Content Column */}
            <div className={`col-24 col-12 ${isEven ? 'sm-padding-left' : 'sm-padding-right'}`}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '4rem 0'
                }}>
                <div className="u-lineWrapper">
                    <span className="tx-label clr-gray u-line" style={{ transitionDelay: '0.1s' }}>{project.category}</span>
                </div>

                <h3 className="tx-xl animate-reveal" style={{ marginTop: '1.5rem', marginBottom: '2rem', animationDelay: '0.2s' }}>
                    {project.title}
                </h3>

                <p className="tx-p animate-reveal" style={{ marginBottom: '3rem', animationDelay: '0.3s' }}>
                    {project.description}
                </p>

                <div className="animate-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', animationDelay: '0.4s' }}>
                    {project.tech?.map(t => (
                        <span key={t} className="tx-label clr-gray" style={{ fontSize: '1.2rem' }}>#{t}</span>
                    ))}
                </div>

                <div className="animate-reveal" style={{ marginTop: '4rem', animationDelay: '0.5s' }}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="tx-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
                        Discover Project <span>→</span>
                    </a>
                </div>
            </div>

            <style>{`
                @media (min-width: 769px) {
                    .sm-order-2 { order: 2; }
                    .sm-padding-left { padding-left: 8rem !important; }
                    .sm-padding-right { padding-right: 8rem !important; order: -1; }
                }
            `}</style>
        </div>
    );
};

export default Projects;
