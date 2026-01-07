
import { Monitor, Smartphone, Globe, Code, Database, Layers } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers. Features real-time sales tracking, inventory management, and customer insights visualization.",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    category: "Web App",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    stats: {
      "Performance": "98/100",
      "Users": "10k+",
      "Uptime": "99.9%"
    }
  },
  {
    id: 2,
    title: "EcoTrack Mobile App",
    description: "Sustainability tracking application allowing users to monitor their carbon footprint. Gamified features encourage eco-friendly habits.",
    tech: ["React Native", "Firebase", "Redux"],
    category: "Mobile",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2074",
    stats: {
      "Downloads": "50k+",
      "Rating": "4.8/5",
      "CO2 Saved": "500 tons"
    }
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "SaaS platform leveraging GPT-4 for generating marketing copy. Includes templates for social media, blogs, and email campaigns.",
    tech: ["Next.js", "OpenAI API", "Tailwind", "Stripe"],
    category: "AI / SaaS",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    stats: {
      "Active Users": "5k",
      "Words Gen": "1M+",
      "MRR": "$2k"
    }
  },
  {
    id: 4,
    title: "Portfolio V1",
    description: "My first portfolio website built with HTML/CSS. It wasn't perfect, but it taught me the fundamentals of layout and responsive design.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Web Design",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2070",
    stats: {
      "Year": "2023",
      "Learning": "High",
      "Nostalgia": "100%"
    }
  }
];

// Helper icon imports (Layout wasn't imported initially)
import { Layout } from 'lucide-react';
