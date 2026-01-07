
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
import bitcoinImage1 from '../assets/bitcoin/clientReport.jpg';
import bitcoinImage2 from '../assets/bitcoin/cmstatus.jpg';
import bitcoinImage3 from '../assets/bitcoin/MinLog.jpg';

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
    tech: ["n8n", "Workflow Automation", "Chart Generation", "RAG Agent", "AI"],
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
      "GUI": "Telegram Bot",
      "Accuracy": "Not measured",
      "Covers": "Company Data"
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
    // Business Impact
    impact: {
      "Automation": "N8N",
      "Client Portal": "Pabbly",
      "invoice & Payment": "Bukku"
    },
    // Technical Architecture
    architecture: {
      "Workflow Engine": "n8n",
      "Subscription Platform": "Pabbly Subscription API",
      "Accounting System": "Bukku API",
      "Trigger": "Webhook"
    },
    // Challenge & Solution
    challenge: "Enable Customer's don't have their client portal for the subscriptions on Trackerhero's Product Plans.",
    solution: "Automated end-to-end billing workflow that creates and sends invoices instantly upon subscription events.",
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
      "Data Visibility": "Centralized Monitoring",
      "Update Interval": "Every 10 minutes",
      "Users": "HoDs and Upper Management"
    },
    // Technical Architecture
    architecture: {
      "Framework": "Next.js + React",
      "Backend": "Supabase",
      "Data Pipeline": "n8n",
      "UI Components": "Shadcn UI + Recharts"
    },
    challenge: [
      "Team lacked centralized performance metrics, making data-driven decisions difficult",
      "Data was scattered across different sources, making it hard to track progress",
      "Data inconsisteny made it hard to track current state of company",
      "Data Cleaning was extremely tough because of inconsistent structure of each department's data"
    ],
    solution: "Built performance dashboard with automated data pipeline that aggregates and visualizes key performance indicators",
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
    impact: ["Auxillary Police Force Management", "Technical Demonstrations (Pilot Phase)", "Client Engagement"],
    // Technical Architecture
    // Challenge & Solution
    challenge: [
      "Meeting with Clients",
      "Takes up a lot of time"
    ],
    solution: "MultiTasking = Answer",
    gallery: [forceheroImage1, forceheroImage2, forceheroImage3, forceheroImage4, forceheroImage5] // Placeholder images - replace with your actual engagement photos
  },
  {
    id: 8,
    title: "Bitcoin Mining Automation",
    description: "Generate Reports for Compass Mining's clients 3 times a week.",
    category: "Automation",
    icon: FileText,
    image: n8nImage,
    // Business Impact
    impact: ["Reporting Automation", "3x/week", "Client Engagement"],
    // Technical Architecture
    // Challenge & Solution
    challenge: [
      "Clients needed reports to be generated 3 times a week.",
      "Reports need to be changed frequently to match client's needs."
    ],
    solution: "MultiTasking = Answer",
    gallery: [bitcoinImage1, bitcoinImage2, bitcoinImage3] // Placeholder images - replace with your actual engagement photos
  }
];

// Re-export specific icons if needed for dynamic usage elsewhere
export const Icons = { Monitor, Smartphone, Globe, Code, Database, Layers, Brain, Shield, Server, FileText, Workflow };
