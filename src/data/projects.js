
import {
  Monitor,
  Smartphone,
  Globe,
  Code,
  Database,
  Layers,
  Brain,
  Shield,
  Server,
  FileText,
  Workflow
} from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "MindsDB AI Agent",
    description: "An intelligent agent built with Python and MindsDB, capable of predictive analysis and automated decision making within database environments.",
    tech: ["Python", "MindsDB", "Machine Learning", "AI"],
    category: "AI / ML",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2070", // AI Network
    githubUrl: "https://github.com/ndriannazriel/mindsdb-ai-agent",
    stats: {
      "Language": "Python",
      "Focus": "AI Agents",
      "Status": "Public"
    }
  },
  {
    id: 2,
    title: "Active Directory 2.0",
    description: "A modern implementation and configuration of Active Directory services, focusing on secure identity management and network administration.",
    tech: ["Active Directory", "Windows Server", "Security", "Identity Mgmt"],
    category: "System Admin",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1558494949-efc52728101c?auto=format&fit=crop&q=80&w=2070", // Server Room
    githubUrl: "https://github.com/ndriannazriel/Active-Directory-2.0",
    stats: {
      "Security": "High",
      "Users": "Enterprise",
      "Type": "Infra"
    }
  },
  {
    id: 3,
    title: "Advanced Network Tech",
    description: "Exploration of advanced networking concepts or configurations, likely involving infrastructure setup, routing protocols, or network security.",
    tech: ["Networking", "Infrastructure", "TCP/IP", "Configuration"],
    category: "Networking",
    icon: Server,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=2070", // Network Cables
    githubUrl: "https://github.com/ndriannazriel/Advanced-Network-Tech",
    stats: {
      "Latency": "Low",
      "Scale": "Global",
      "Uptime": "99.9%"
    }
  },
  {
    id: 4,
    title: "N8N Proposal Maker",
    description: "Automated workflow for generating proposals using n8n. Streamlines the document creation process through low-code automation.",
    tech: ["n8n", "Workflow Automation", "JSON", "Document Gen"],
    category: "Automation",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070", // Documents/Planning
    githubUrl: "https://github.com/ndriannazriel/N8N-Proposal-Maker-Old",
    stats: {
      "Efficiency": "+500%",
      "Time": "Saved",
      "Tool": "n8n"
    }
  },
  {
    id: 5,
    title: "My Portfolio",
    description: "The source code for this portfolio website! A React-based showcase featuring a custom design system and interactive elements.",
    tech: ["React", "Vite", "JavaScript", "CSS3"],
    category: "Web Dev",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2070", // Coding screen
    githubUrl: "https://github.com/ndriannazriel/my-portfolio-hehe",
    stats: {
      "Framework": "React",
      "Speed": "Fast",
      "Design": "Custom"
    }
  }
];

// Re-export specific icons if needed for dynamic usage elsewhere
export const Icons = { Monitor, Smartphone, Globe, Code, Database, Layers, Brain, Shield, Server, FileText, Workflow };
