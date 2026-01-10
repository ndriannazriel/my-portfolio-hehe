import React from 'react';

const Background = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -50,
                backgroundImage: 'url("src/assets/bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed', // Fixed to viewport for continuity
                backgroundColor: '#000000',
                transform: 'translateZ(0)',
            }}
        >
            {/* Overlay to ensure text readability if the image is too bright, 
                though the generated image should be dark. 
                Adding a subtle vignette or darken layer adds to the "premium" feel. */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.3)', // Subtle darkening
                }}
            />
        </div>
    );
};

export default Background;
