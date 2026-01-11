import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const foundBlog = blogs.find(b => b.id === parseInt(id));
        if (foundBlog) {
            setBlog(foundBlog);
            document.title = `${foundBlog.title} - Andrian Nazriel`;
        }
    }, [id]);

    if (!blog) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{
                        fontFamily: 'var(--font-header)',
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        color: '#fff',
                        marginBottom: '2rem'
                    }}>
                        404
                    </h1>
                    <p style={{ color: 'var(--color-gray-400)', fontSize: '1.6rem', marginBottom: '2rem' }}>
                        Article not found
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            background: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            color: '#fff',
                            padding: '1rem 2rem',
                            fontSize: '1.4rem',
                            cursor: 'pointer',
                            borderRadius: '4px'
                        }}
                    >
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="blog-post-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                minHeight: '100vh',
                background: '#000',
                paddingTop: '15rem',
                paddingBottom: '8rem'
            }}
        >
            {/* Back Button */}
            <div className="row" style={{ marginBottom: '4rem' }}>
                <div className="col-24">
                    <motion.button
                        onClick={() => navigate('/')}
                        className="blog-back-btn"
                        whileHover={{ x: -5 }}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--color-gray-700)',
                            fontSize: '1.4rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontFamily: 'var(--font-body)',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#fff'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--color-gray-700)'}
                    >
                        <span>←</span>
                        <span className="tx-label">Back to Home</span>
                    </motion.button>
                </div>
            </div>

            {/* Article Header */}
            <div className="row">
                <div className="col-24">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="tx-label" style={{
                            color: 'var(--color-gray-700)',
                            display: 'block',
                            marginBottom: '2rem'
                        }}>
                            {blog.category} • {blog.date} • {blog.readTime}
                        </span>

                        <h1 style={{
                            fontFamily: 'var(--font-header)',
                            fontSize: 'clamp(4rem, 10vw, 8rem)',
                            lineHeight: 1.1,
                            textTransform: 'uppercase',
                            color: '#fff',
                            marginBottom: '3rem',
                            letterSpacing: '-0.02em'
                        }}>
                            {blog.title}
                        </h1>

                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '2rem',
                            color: 'var(--color-gray-400)',
                            lineHeight: 1.6,
                            maxWidth: '800px'
                        }}>
                            {blog.excerpt}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Featured Image */}
            {blog.image && (
                <motion.div
                    className="row"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginTop: '6rem' }}
                >
                    <div className="col-24">
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            background: '#1a1a1a'
                        }}>
                            <img
                                src={blog.image}
                                alt={blog.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Article Content */}
            <motion.div
                className="row"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ marginTop: '6rem' }}
            >
                <div className="col-24" style={{ maxWidth: '900px' }}>
                    <article
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                        style={{
                            color: 'var(--color-gray-200)',
                            fontSize: '1.8rem',
                            lineHeight: 1.8,
                            fontFamily: 'var(--font-body)'
                        }}
                    />
                </div>
            </motion.div>

            {/* Article Footer */}
            <motion.div
                className="row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ marginTop: '10rem', paddingTop: '4rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
                <div className="col-24">
                    <p style={{
                        fontFamily: 'var(--font-header)',
                        fontSize: '2rem',
                        color: 'var(--color-gray-700)',
                        textTransform: 'uppercase',
                        marginBottom: '2rem'
                    }}>
                        Thanks for reading
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            background: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            color: '#fff',
                            padding: '1.2rem 2.5rem',
                            fontSize: '1.4rem',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            fontFamily: 'var(--font-body)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        }}
                    >
                        Back to Home →
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default BlogPost;
