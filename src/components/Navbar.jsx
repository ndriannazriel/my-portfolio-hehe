import React from 'react';

const Navbar = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: '5.2rem 3rem 0',
            color: '#fff',
            mixBlendMode: 'difference'
        }}>
            <div className="row" style={{ padding: 0 }}>
                <div className="col-12">
                    <a href="#" className="tx-xl nav-link" style={{ display: 'inline-flex', letterSpacing: '-0.02em' }}>
                        A N
                    </a>
                </div>

                <div className="col-12" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
                        <a href="#projects" className="tx-label nav-link">Projects</a>
                        <a href="#about" className="tx-label nav-link">About</a>
                        <a href="#contact" className="tx-label nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
