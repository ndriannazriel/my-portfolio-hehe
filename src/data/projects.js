
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
    description: "Developed a sophisticated AI agent utilizing MindsDB and Python to bridge the gap between databases and machine learning. This agent performs real-time predictive analysis and automates complex decision-making processes directly within SQL environments, significantly reducing the need for manual data processing.",
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
    description: "Engineered a robust Active Directory infrastructure leveraging Windows Server 2022. Integrated Splunk for advanced SIEM monitoring, ensuring high-fidelity security logging and streamlined identity management. The project involved designing complex organizational units, GPOs, and secure authentication protocols for enterprise-scale environments.",
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
    description: "Deep-dive into enterprise-grade networking architectures, focusing on TCP/IP optimization, high-availability routing protocols, and multi-layered security configurations. This project involved simulating complex global network infrastructures with a focus on minimizing latency and maximizing uptime.",
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
    description: "A state-of-the-art Retrieval-Augmented Generation (RAG) agent integrated with Telegram. It leverages OpenAI's GPT-4 and a Supabase vector database to provide instant, context-aware responses based on internal company documentation, featuring an automated data pipeline for knowledge base updates.",
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
    description: "Architecture of an end-to-end billing automation engine connecting Pabbly Subscription with the Bukku accounting system. This workflow eliminates manual invoicing errors and ensures real-time synchronisation of subscription events with financial records using automated webhooks.",
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
    description: "A comprehensive full-stack performance monitoring platform built with Next.js and Supabase. It features high-frequency data ingestion via n8n pipelines, presenting HoDs and upper management with real-time, centralized metrics and interactive data visualizations.",
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
    solution: "Developed an integrated performance dashboard and automated data pipeline that centralizes fragmented data, implements rigorous cleaning protocols, and visualizes KPIs through a single source of truth.",
    // Live Demo (optional)
    demoUrl: ""
  },
  {
    id: 7,
    title: "ForceHero",
    description: "Leading technical strategy and client engagement for an Auxiliary Police Force Management System. Orchestrated pilot demonstrations and conducted deep-dive discovery sessions to translate complex agency requirements into tailored technical solutions and feature roadmaps.",
    category: "Technical Account Manager",
    icon: FileText,
    image: forceheropreview,
    tech: ["Project Management", "Stakeholder Engagement", "Technical Sales", "Pilot Strategy"],
    // Business Impact
    impact: ["Auxillary Police Force Management", "Technical Demonstrations (Pilot Phase)", "Client Engagement"],
    // Technical Architecture
    // Challenge & Solution
    challenge: [
      "Meeting with Clients",
      "Takes up a lot of time"
    ],
    solution: "Implemented a structured multi-track project management approach, utilizing stakeholder discovery sessions and rapid prototyping to balance diverse client needs while maintaining delivery excellence.",
    gallery: [forceheroImage1, forceheroImage2, forceheroImage3, forceheroImage4, forceheroImage5] // Placeholder images - replace with your actual engagement photos
  },
  {
    id: 8,
    title: "Bitcoin Mining Automation",
    description: "Designed and implemented a high-frequency reporting automation pipeline for Bitcoin mining operations. Utilizing n8n, the system aggregates mining performance metrics and generates dynamic, client-ready reports multiple times per week, ensuring data precision and timely delivery.",
    category: "Automation",
    icon: FileText,
    image: n8nImage,
    tech: ["n8n", "Data Automation", "Reporting", "API Integration"],
    // Business Impact
    impact: ["Reporting Automation", "3x/week", "Client Engagement"],
    // Technical Architecture
    // Challenge & Solution
    challenge: [
      "Clients needed reports to be generated 3 times a week.",
      "Reports need to be changed frequently to match client's needs."
    ],
    solution: "Engineered a flexible n8n automation framework that supports dynamic report templates and scheduled data aggregation, allowing for frequent requirement changes while maintaining operational efficiency.",
    gallery: [bitcoinImage1, bitcoinImage2, bitcoinImage3] // Placeholder images - replace with your actual engagement photos
  }
];

// Re-export specific icons if needed for dynamic usage elsewhere
export const Icons = { Monitor, Smartphone, Globe, Code, Database, Layers, Brain, Shield, Server, FileText, Workflow };
