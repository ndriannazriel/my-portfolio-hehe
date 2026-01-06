import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Project Alpha',
            desc: 'A placeholder for a future web application.',
            tags: ['React', 'CSS', 'Vite'],
        },
        {
            title: 'Design Concept',
            desc: 'Exploration of modern UI/UX trends.',
            tags: ['Figma', 'Prototyping'],
        },
        {
            title: 'Task Manager',
            desc: 'Simple todo list application to demonstrate state management.',
            tags: ['JavaScript', 'LocalStorage'],
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 style={{ marginBottom: '3rem' }}>Selected Works</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ height: '200px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: 'var(--color-text-muted)' }}>Preview Image</span>
                            </div>

                            <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                                {project.desc}
                            </p>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-primary)', borderRadius: '100px' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#fff' }}>
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                    <Github size={16} /> Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
