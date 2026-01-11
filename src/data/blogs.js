export const blogs = [
    {
        id: 1,
        title: "Building Fluid Interfaces with Framer Motion",
        excerpt: "How to create smooth, physics-based animations that make your UI feel alive and responsive.",
        category: "React",
        date: "2024-01-15",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        content: `
            <p>Animation is no longer just a nice-to-have in modern web applications—it's become essential for creating intuitive, delightful user experiences.</p>

            <h2>The Philosophy of Motion</h2>
            <p>When we think about animation in UI, we should focus on purposeful motion that guides user attention and provides feedback. Every animation should answer a question: What just happened? What's happening now?</p>

            <h2>Getting Started with Framer Motion</h2>
            <p>Framer Motion makes it incredibly easy to add smooth animations to your React components. Let's look at a simple example:</p>

            <pre><code>import { motion } from 'framer-motion'

function MyComponent() {
  return (
    &lt;motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    &gt;
      Hello, animated world!
    &lt;/motion.div&gt;
  )
}</code></pre>

            <h2>Physics-Based Animations</h2>
            <p>The real power of Framer Motion lies in its physics-based animations. Instead of arbitrary easing curves, you can use springs that feel natural and responsive.</p>
        `
    },
    {
        id: 2,
        title: "Modern CSS Techniques You're Not Using",
        excerpt: "Explore lesser-known CSS features that can simplify your styling and improve performance.",
        category: "CSS",
        date: "2024-01-10",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
        content: `
            <p>CSS has evolved tremendously over the years, and many developers are still missing out on powerful features that could make their lives easier.</p>

            <h2>Container Queries</h2>
            <p>Finally, we can style elements based on their container's size, not just the viewport. This is a game-changer for component-based design systems.</p>

            <h2>CSS Grid: Beyond the Basics</h2>
            <p>Most developers use CSS Grid for basic layouts, but it's capable of so much more. Subgrid, grid-template-areas, and auto-fit/auto-place are just a few features worth exploring.</p>
        `
    },
    {
        id: 3,
        title: "State Management in 2024",
        excerpt: "A comprehensive guide to choosing the right state management solution for your React applications.",
        category: "Architecture",
        date: "2024-01-05",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
        content: `
            <p>The state management landscape has changed dramatically. Let's explore the options and when to use each one.</p>

            <h2>Do You Even Need State Management?</h2>
            <p>Before reaching for a library, consider if React's built-in state management might be sufficient. Many applications don't need external solutions.</p>

            <h2>Zustand: The Simple Choice</h2>
            <p>For most applications, Zustand hits the sweet spot between simplicity and power. No providers, no boilerplate, just clean, intuitive API.</p>
        `
    },
    {
        id: 4,
        title: "The Art of Micro-Interactions",
        excerpt: "Small details that make a big difference in how users perceive and interact with your product.",
        category: "UX Design",
        date: "2023-12-28",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
        content: `
            <p>Micro-interactions are the subtle animations and feedback loops that make digital products feel polished and thoughtful.</p>

            <h2>Why Micro-Interactions Matter</h2>
            <p>They provide immediate feedback, guide user attention, and add personality to your interface. When done well, users may not even notice them—but they'll definitely notice their absence.</p>
        `
    }
];
