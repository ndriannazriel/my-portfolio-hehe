import React from 'react';

const About = () => {
    const skills = [
        { name: 'Frontend Dev', desc: 'React, Vite, CSS' },
        { name: 'Web Design', desc: 'Modern & Responsive' },
        { name: 'Emerging Tech', desc: 'AI Agents & Automation' },
        { name: 'Security', desc: 'Infrastructure & Auditing' },
    ];

    return (
        <section id="about" className="section bg-white">
            <div className="row">
                <div className="col-12 mb-md">
                    <span className="tx-label clr-gray animate-reveal">About the Creator</span>
                </div>
            </div>

            <div className="row">
                <div className="col-24 col-12">
                    <h2 className="tx-2xl animate-reveal" style={{ animationDelay: '0.1s' }}>
                        Breaking Boundaries.<br />Building Foundations.
                    </h2>
                </div>

                <div className="col-24 col-12">
                    <div style={{ maxWidth: '600px', padding: '4rem 0' }}>
                        <p className="tx-p animate-reveal" style={{ animationDelay: '0.2s', color: '#000', fontSize: '2.2rem', lineHeight: '1.2', fontWeight: 500 }}>
                            I am a passionate developer focusing on building clean, accessible, and performant web applications. Currently pushing the limits of Agentic AI.
                        </p>

                        <div className="row mt-md" style={{ padding: 0 }}>
                            {skills.map((skill, i) => (
                                <div key={skill.name} className="col-12 mb-md animate-reveal" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                                    <h3 className="tx-sm" style={{ color: '#000' }}>{skill.name}</h3>
                                    <p className="tx-p" style={{ color: 'var(--color-gray-700)', fontSize: '1.4rem' }}>{skill.desc}</p>
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
