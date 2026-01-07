
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
import dashboardImage from '../assets/dashboard.png';
import forceheroImage1 from '../assets/forcehero/forcehero1.jpg';
import forceheroImage2 from '../assets/forcehero/forcehero2.jpg';
import forceheroImage3 from '../assets/forcehero/forcehero3.jpg';
import forceheroImage4 from '../assets/forcehero/forcehero4.jpg';
import forceheroImage5 from '../assets/forcehero/forcehero5.jpg';
import forceheropreview from '../assets/forcehero/forceheropreview.png';

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
      "Vector Database": "Supabase",
      "Focus": "RAG",
      "Software": "n8n"
    },
    // Business Impact
    impact: {
      "Response Time": "< 2 seconds",
      "Accuracy": "95%",
      "Queries Handled": "1000+/day"
    },
    // Technical Architecture
    architecture: {
      "Data Pipeline": "n8n",
      "Vector DB": "Supabase",
      "AI Model": "OpenAI GPT-4",
      "Interface": "Telegram Bot"
    },
    // Challenge & Solution
    challenge: "Users needed instant access to company knowledge base without manual searching",
    solution: "Built RAG-powered chatbot that retrieves contextual information from vector database in real-time",
    // Live Demo (optional)
    demoUrl: "" // Add your demo link here
  },
  {
    id: 5,
    title: "SaaS Automation",
    description: "N8N workflow that automates the creation of invoices and receipts from Pabbly Subscription to Bukku.",
    tech: ["n8n", "Pabbly Subscription", "Bukku API"],
    category: "Automation",
    icon: FileText,
    image: n8nImage,
    githubUrl: "https://github.com/ndriannazriel/Billing-Automation",
    stats: {
      "Automation": "N8N",
      "Focus": "Billing",
      "Client Portal": "Pabbly",
      "invoice & Payment": "Bukku"
    },
    // Business Impact
    impact: {
      "Time Saved": "15 hrs/week",
      "Error Reduction": "98%",
      "Invoices Processed": "500+/month"
    },
    // Technical Architecture
    architecture: {
      "Workflow Engine": "n8n",
      "Subscription Platform": "Pabbly",
      "Accounting System": "Bukku API",
      "Trigger": "Webhook"
    },
    // Challenge & Solution
    challenge: "Manual invoice creation was time-consuming and error-prone, causing billing delays",
    solution: "Automated end-to-end billing workflow that creates and sends invoices instantly upon subscription events",
    // Live Demo (optional)
    demoUrl: ""
  },
  {
    id: 6,
    title: "TH Performance Dashboard",
    description: "A Next.js webapp using Supabase as the backend along with n8n for the data pipeline to insert data into Supabase.",
    tech: ["n8n", "Supabase", "Next.js", "React", "Tailwind CSS", "Shadcn UI", "Chart.js"],
    category: "Full Stack Web Application",
    icon: FileText,
    image: dashboardImage,
    githubUrl: "https://github.com/ndriannazriel/Performance-Dashboard",
    stats: {
      "Framework": "Next.js",
      "Database": "Supabase",
      "Charts": "Chart.js"
    },
    // Business Impact
    impact: {
      "Data Visibility": "Real-time",
      "Decision Speed": "3x faster",
      "Users": "50+ daily"
    },
    // Technical Architecture
    architecture: {
      "Frontend": "Next.js + React",
      "Backend": "Supabase",
      "Data Pipeline": "n8n",
      "UI Components": "Shadcn UI"
    },
    // Challenge & Solution
    challenge: "Team lacked centralized performance metrics, making data-driven decisions difficult",
    solution: "Built real-time dashboard with automated data pipeline that aggregates and visualizes key performance indicators",
    // Live Demo (optional)
    demoUrl: ""
  },
  {
    id: 7,
    title: "ForceHero",
    description: "Auxiallary Police Force Management System. Engaging with clients to understand their needs and provide tailored solutions based on the current system that agencies have.",
    category: "Technical Account Manager",
    icon: FileText,
    image: forceheropreview,
    // Business Impact
    impact: ["Auxillary Police Force Management", "Technical Demonstrations", "Client Engagement"],
    // Technical Architecture
    // Challenge & Solution
    challenge: "Keeping everything in check.",
    solution: "MultiTasking = Answer",
    gallery: [forceheroImage1, forceheroImage2, forceheroImage3, forceheroImage4, forceheroImage5] // Placeholder images - replace with your actual engagement photos
  }
];

// Re-export specific icons if needed for dynamic usage elsewhere
export const Icons = { Monitor, Smartphone, Globe, Code, Database, Layers, Brain, Shield, Server, FileText, Workflow };
