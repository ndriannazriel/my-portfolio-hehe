import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: 'transparent' }}>
            <div className="row">
                <div className="col-12 mb-md">
                    <span className="tx-label clr-gray animate-reveal">Get in touch</span>
                </div>
            </div>

            <div className="row">
                <div className="col-24 col-12">
                    <h2 className="tx-2xl animate-reveal" style={{ animationDelay: '0.1s' }}>
                        Let's Create<br />Something Bold.
                    </h2>
                </div>

                <div className="col-24 col-12" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', padding: '4rem 0' }}>
                    <div className="animate-reveal" style={{ animationDelay: '0.2s' }}>
                        <p className="tx-label clr-gray mb-md">Email</p>
                        <a href="mailto:placeholder@email.com" className="tx-lg" style={{ borderBottom: '1px solid #fff', paddingBottom: '1rem' }}>
                            sayhello@andrian.me
                        </a>
                    </div>

                    <div className="animate-reveal" style={{ animationDelay: '0.3s' }}>
                        <p className="tx-label clr-gray mb-md">Social</p>
                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <a href="#" className="tx-md" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>LinkedIn</a>
                            <a href="#" className="tx-md" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final branding footer-style section */}
            <div className="row" style={{ marginTop: '12rem', paddingTop: '4rem' }}>
                <div className="col-24">
                    <span className="tx-3xl clr-gray" style={{ opacity: 0.1 }}>ANDRIAN NAZRIEL</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
