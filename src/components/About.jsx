import { Code, Globe, BatteryCharging } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Frontend Dev', icon: <Code size={24} />, desc: 'React, Vite, CSS' },
        { name: 'Web Design', icon: <Globe size={24} />, desc: 'Modern & Responsive' },
        { name: 'Learning', icon: <BatteryCharging size={24} />, desc: 'Constantly Evolving' },
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="glass-panel" style={{ padding: '4rem 2rem' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center' }}>About Me</h2>
                        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            I am a passionate internship student looking to make my mark in the tech industry.
                            Focusing on building clean, accessible, and performant web applications.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            {skills.map((skill) => (
                                <div key={skill.name} className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                                    <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{skill.icon}</div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{skill.name}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
