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
        }}>
            <div className="row" style={{ padding: 0 }}>
                <div className="col-12">
                    <a href="#" className="tx-xl nav-link-header" style={{ display: 'inline-flex', letterSpacing: '-0.02em', color: '#fff', textDecoration: 'none' }}>
                        AN
                    </a>
                </div>

                <div className="col-12" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
                        <a href="#projects" className="nav-link-header">Projects</a>
                        <a href="#about" className="nav-link-header">About</a>
                        <a href="#contact" className="nav-link-header">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
