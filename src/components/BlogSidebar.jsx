import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { blogs } from '../data/blogs';

const BlogSidebar = ({ isOpen, onClose }) => {
    const [hoveredBlog, setHoveredBlog] = useState(null);
    const navigate = useNavigate();

    return (
        <>
            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="blog-sidebar-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 998,
                            cursor: 'pointer'
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.div
                className="blog-sidebar"
                initial={{ x: '100%' }}
                animate={{ x: isOpen ? 0 : '100%' }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 0.8
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '500px',
                    maxWidth: '90vw',
                    height: '100vh',
                    background: '#000',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                    zIndex: 999,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Header */}
                <div style={{
                    padding: '3rem 2rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <span className="tx-label" style={{ color: 'var(--color-gray-700)', display: 'block', marginBottom: '0.5rem' }}>
                            Thoughts & Writings
                        </span>
                        <h2 style={{
                            fontFamily: 'var(--font-header)',
                            fontSize: '4rem',
                            lineHeight: 1,
                            textTransform: 'uppercase',
                            margin: 0
                        }}>
                            Blog
                        </h2>
                    </div>
                    <motion.button
                        onClick={onClose}
                        className="blog-close-btn"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            background: 'transparent',
                            color: '#fff',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        ×
                    </motion.button>
                </div>

                {/* Blog List */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '2rem'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {blogs.map((blog, index) => (
                            <motion.article
                                key={blog.id}
                                className="blog-preview-card"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onHoverStart={() => setHoveredBlog(blog.id)}
                                onHoverEnd={() => setHoveredBlog(null)}
                                onClick={() => {
                                    navigate(`/blog/${blog.id}`);
                                    onClose();
                                }}
                                style={{
                                    padding: '2rem',
                                    background: hoveredBlog === blog.id ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Hover Image Reveal */}
                                {blog.image && (
                                    <motion.div
                                        className="blog-preview-image"
                                        initial={{ opacity: 0, scale: 1.2 }}
                                        animate={{
                                            opacity: hoveredBlog === blog.id ? 0.15 : 0,
                                            scale: hoveredBlog === blog.id ? 1 : 1.2
                                        }}
                                        transition={{ duration: 0.4 }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${blog.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            pointerEvents: 'none',
                                            zIndex: 0
                                        }}
                                    />
                                )}

                                {/* Content */}
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                                        <span className="tx-label" style={{
                                            color: 'var(--color-gray-700)',
                                            fontSize: '1rem'
                                        }}>
                                            {blog.category}
                                        </span>
                                        <span style={{
                                            color: 'var(--color-gray-700)',
                                            fontSize: '1rem'
                                        }}>
                                            •
                                        </span>
                                        <span className="tx-label" style={{
                                            color: 'var(--color-gray-700)',
                                            fontSize: '1rem'
                                        }}>
                                            {blog.readTime}
                                        </span>
                                    </div>

                                    <h3 style={{
                                        fontFamily: 'var(--font-header)',
                                        fontSize: '2.4rem',
                                        textTransform: 'uppercase',
                                        lineHeight: 1.1,
                                        margin: '0 0 1rem 0',
                                        color: hoveredBlog === blog.id ? '#fff' : 'var(--color-text)'
                                    }}>
                                        {blog.title}
                                    </h3>

                                    <p style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '1.4rem',
                                        color: 'var(--color-gray-400)',
                                        lineHeight: 1.5,
                                        margin: 0
                                    }}>
                                        {blog.excerpt}
                                    </p>

                                    <motion.div
                                        className="blog-read-more"
                                        initial={{ width: 0 }}
                                        animate={{ width: hoveredBlog === blog.id ? 'auto' : 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            marginTop: '1.5rem',
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        <span className="tx-label" style={{
                                            color: '#fff',
                                            fontSize: '1.2rem'
                                        }}>
                                            Read Article →
                                        </span>
                                    </motion.div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    padding: '2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.2rem',
                        color: 'var(--color-gray-700)',
                        margin: 0
                    }}>
                        {blogs.length} articles published
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default BlogSidebar;
