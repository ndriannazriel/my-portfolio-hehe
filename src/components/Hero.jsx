import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }} className="animate-fade-in">
                    Portfolio
                </h2>
                <h1 className="animate-fade-in" style={{ marginBottom: '1.5rem', animationDelay: '0.1s' }}>
                    Andrian Nazriel<span style={{ color: 'var(--color-primary)' }}>.</span>
                </h1>
                <p className="animate-fade-in" style={{ fontSize: '1.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', color: 'var(--color-text-muted)', animationDelay: '0.2s' }}>
                    Building foundations. Solving problems. Always learning.
                </p>

                <div className="animate-fade-in" style={{ animationDelay: '0.3s', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#projects" className="glass" style={{
                        padding: '1rem 2.5rem',
                        borderRadius: '50px',
                        fontWeight: 600,
                        background: 'var(--color-primary)',
                        border: 'none',
                        color: '#fff'
                    }}>
                        View Work
                    </a>
                    <a href="#about" className="glass" style={{
                        padding: '1rem 2.5rem',
                        borderRadius: '50px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        About Me <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
