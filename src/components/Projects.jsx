
import React from 'react'
import { projects } from '../data/projects'
import { ArrowUpRight } from 'lucide-react'

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="animate-fade-in">Featured Projects</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                    {projects.map((project) => (
                        <div key={project.id} className="glass-panel" style={{ overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.25rem' }}>{project.title}</h3>
                                    <a
                                        href={project.githubUrl || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--color-primary)' }}
                                    >
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>

                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.tech.map(t => (
                                        <span key={t} style={{
                                            fontSize: '0.75rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '50px',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
