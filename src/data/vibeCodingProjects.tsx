import { Terminal, Code, BrainCircuit, Rocket } from 'lucide-react';

export interface VibeProject {
  title: string;
  description: string;
  features: string[];
  link: string;
  icon: React.ReactNode;
}

export const vibeCodingProjects: VibeProject[] = [
  {
    title: "AI Review Analyzer",
    description: "LLM-powered tool for summarizing app reviews into actionable insights",
    features: [
      "Multi-lingual support",
      "Sentiment analysis",
      "Exportable reports"
    ],
    link: "/vibe-coding-projects/review-analyzer",
    icon: <Terminal size={20} />
  },
  {
    title: "Play Store Scout",
    description: "Automated scraping & analysis of new Play Store releases",
    features: [
      "Weekly automated reports",
      "Competitor analysis",
      "Airtable integration"
    ],
    link: "/vibe-coding-projects/playstore-scout",
    icon: <Code size={20} />
  },
  {
    title: "Feature Predictor",
    description: "GPT-powered feature suggestion engine based on user feedback",
    features: [
      "Natural language processing",
      "Roadmap generation",
      "Priority scoring"
    ],
    link: "/vibe-coding-projects/feature-predictor",
    icon: <BrainCircuit size={20} />
  }
];