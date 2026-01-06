import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '1rem' }}>Let's Work Together</h2>
                <p style={{ maxWidth: '500px', margin: '0 auto 3rem', color: 'var(--color-text-muted)' }}>
                    I'm currently looking for internship opportunities. If you have a project in mind or just want to say hi, feel free to reach out!
                </p>

                <a href="mailto:placeholder@email.com" className="glass" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.5rem 3rem',
                    borderRadius: '50px',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '3rem',
                    color: '#fff',
                    background: 'var(--color-primary)'
                }}>
                    <Mail /> Say Hello
                </a>

                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                    <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}>
                        <Linkedin size={24} />
                        <span style={{ fontSize: '0.8rem' }}>LinkedIn</span>
                    </a>
                    <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}>
                        <Github size={24} />
                        <span style={{ fontSize: '0.8rem' }}>GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
