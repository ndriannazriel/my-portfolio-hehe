
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
import antImage from '../assets/ANT.png';
import adImage from '../assets/AD.jpg';
import mindsdbImage from '../assets/mindsdb_Logo.jpg';
import n8nImage from '../assets/6889d23f942270565468d8a1_n8n logo.jpg';

export const projects = [
  {
    id: 1,
    title: "MindsDB AI Agent",
    description: "An intelligent agent built with Python and MindsDB, capable of predictive analysis and automated decision making within database environments.",
    tech: ["Python", "MindsDB", "Machine Learning", "AI"],
    category: "AI / ML",
    icon: Brain,
    image: mindsdbImage,
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
    tech: ["AD", "Windows Server 2022", "Splunk", "DC", "SIEM"],
    category: "Cybers security",
    icon: Shield,
    image: adImage,
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
    image: antImage,
    githubUrl: "https://github.com/ndriannazriel/Advanced-Network-Tech",
    stats: {
      "Latency": "Low",
      "Scale": "Global",
      "Uptime": "99.9%"
    }
  },
  {
    id: 4,
    title: "TH Mind",
    description: "RAG Agent with chatbot via telegram",
    tech: ["n8n", "Workflow Automation", "Chart Gen", "RAG Agent", "AI"],
    category: "Automation",
    icon: FileText,
    image: n8nImage,
    githubUrl: "https://github.com/ndriannazriel/N8N-Proposal-Maker-Old",
    stats: {
      "Efficiency": "+500%",
      "Time": "Saved",
      "Tool": "n8n"
    }
  },
  {
    id: 5,
    title: "SaaS Automation",
    description: "N8N workflow that automates the creation of invoices and receipts from Pabbly Subscription to Bukku.",
    tech: ["n8n", "Pabbly Subscription", "Bukku API"],
    category: "Automation",
    icon: FileText,
    image: n8nImage,
    githubUrl: "https://github.com/ndriannazriel/Billing-Automation"
  }
];

// Re-export specific icons if needed for dynamic usage elsewhere
export const Icons = { Monitor, Smartphone, Globe, Code, Database, Layers, Brain, Shield, Server, FileText, Workflow };
