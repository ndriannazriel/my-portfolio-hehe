import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            transition: 'all 0.3s ease',
            background: isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
            height: 'var(--nav-height)'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>
                    AN<span style={{ color: 'var(--color-primary)' }}>.</span>
                </a>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8 }}>
                            {link.name}
                        </a>
                    ))}
                    <a href="mailto:placeholder@email.com" className="glass" style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        Get in Touch
                    </a>
                </div>

                {/* Mobile Toggle - Hidden for now via CSS mainly, but in-line here */}
                {/* Note: In a real responsive build we would use media queries to hide/show. 
            For this setup, I'll add a simple style block to hide desktop-nav on mobile later if needed.
        */}
            </div>
        </nav>
    );
};

export default Navbar;
