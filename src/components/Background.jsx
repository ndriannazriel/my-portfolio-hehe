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
                backgroundImage: 'url("/background.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#0a0a0a', // Fallback
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
                    backdropFilter: 'blur(0px)' // Can add blur(20px) if user wants abstract blur
                }}
            />
        </div>
    );
};

export default Background;
