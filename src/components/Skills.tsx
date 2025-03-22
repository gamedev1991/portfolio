
import { useState } from 'react';
import Terminal from './common/Terminal';
import Card from './common/Card';
import AnimatedText from './common/AnimatedText';
import { Award, Check, ChevronRight, Code, Cpu, LineChart, PenTool, Shield } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  name: string;
  skills: string[];
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  { 
    title: "Certified Product Manager", 
    issuer: "Product School", 
    date: "2022",
    icon: <Shield size={16} />
  },
  { 
    title: "Game Design Fundamentals", 
    issuer: "Unity Learning", 
    date: "2020",
    icon: <Cpu size={16} />
  },
  { 
    title: "Data-Driven Product Strategy", 
    issuer: "Product Analytics Academy", 
    date: "2021",
    icon: <LineChart size={16} />
  },
  { 
    title: "Agile Product Management", 
    issuer: "Scrum Alliance", 
    date: "2021",
    icon: <Award size={16} />
  },
];

const skillCategories: SkillCategory[] = [
  {
    name: "Product Management",
    icon: <PenTool size={20} />,
    skills: [
      "Product Roadmapping",
      "User Story Mapping",
      "A/B Testing",
      "Stakeholder Management",
      "Product Analytics",
      "JIRA & Confluence",
      "Sprint Planning"
    ]
  },
  {
    name: "Game Development",
    icon: <Cpu size={20} />,
    skills: [
      "Game Design Principles",
      "Level Design",
      "Unity Engine",
      "Character Development",
      "Mobile Game Optimization",
      "Gameplay Mechanics",
      "Monetization Strategy"
    ]
  },
  {
    name: "Technical Skills",
    icon: <Code size={20} />,
    skills: [
      "C# Programming",
      "JavaScript/React",
      "SQL Databases",
      "API Integration",
      "Version Control (Git)",
      "CI/CD Pipelines",
      "Web3 & Blockchain"
    ]
  },
  {
    name: "Analytics & Strategy",
    icon: <LineChart size={20} />,
    skills: [
      "Business Intelligence",
      "User Acquisition Metrics",
      "Retention Analysis",
      "Funnel Optimization",
      "Competitive Analysis",
      "Pricing Strategy",
      "Market Research"
    ]
  }
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  
  const terminalLines = [
    "Loading skill matrix...",
    "Analyzing proficiency levels...",
    "Generating comprehensive skill report...",
    "Accessing certification database...",
    "Skill assessment complete.",
    "Ready to display results."
  ];

  return (
    <section id="skills" className="py-20 relative bg-cyber-darker/50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            <AnimatedText variant="glow">Skills & Certifications</AnimatedText>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Professional competencies and educational achievements that power my work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Terminal Component */}
          <div className="lg:col-span-1">
            <Terminal 
              lines={terminalLines}
              title="Skill Scanner v1.0"
              className="h-full"
            />
          </div>
          
          {/* Skills Categories */}
          <div className="lg:col-span-2">
            <Card variant="terminal" className="p-5">
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-cyan-400 mb-4 terminal-text">
                  $ skill_inventory --detailed --category="all"
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {skillCategories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-3 py-2 text-sm font-medium rounded transition-colors flex items-center space-x-2 ${
                        selectedCategory === index 
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                          : 'text-white/70 hover:text-white hover:bg-white/5 border border-white/10'
                      }`}
                      onClick={() => setSelectedCategory(index)}
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
                
                <div>
                  <h4 className="text-white mb-3 flex items-center">
                    <span className="text-cyan-400 mr-2">{skillCategories[selectedCategory].icon}</span>
                    <span>{skillCategories[selectedCategory].name} Skills</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {skillCategories[selectedCategory].skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="flex items-center py-1.5 px-2 hover:bg-white/5 rounded transition-colors"
                      >
                        <Check size={16} className="text-cyan-400 mr-2 flex-shrink-0" />
                        <span className="text-white/80">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <AnimatedText variant="glow">Certifications</AnimatedText>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                variant="hover"
                className="p-5 border border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyber-darker flex items-center justify-center border border-cyan-500/30 text-cyan-400">
                      {cert.icon}
                    </div>
                    <div className="ml-3">
                      <span className="block text-xs text-white/50">{cert.date}</span>
                      <span className="block text-xs text-cyan-400">{cert.issuer}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">{cert.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
