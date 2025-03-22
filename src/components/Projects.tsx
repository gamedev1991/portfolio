
import { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';
import AnimatedText from './common/AnimatedText';
import { ExternalLink, Github, Play } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  playStoreLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "Gate Runner",
    company: "Blkbox AI",
    description: "An AI-powered mobile game featuring procedurally generated levels and adaptive difficulty based on player behavior.",
    image: "https://via.placeholder.com/600x400/0A1128/00FFFF?text=Gate+Runner",
    technologies: ["Unity", "AI", "Procedural Generation", "Mobile"],
    playStoreLink: "#"
  },
  {
    title: "Fantasy With EStars",
    company: "FanClash",
    description: "A fantasy esports platform allowing users to create teams of professional esports players and compete based on real-world performance.",
    image: "https://via.placeholder.com/600x400/0A1128/FF00FF?text=Fantasy+EStars",
    technologies: ["React", "Node.js", "Real-time Data", "Esports API"],
    link: "#"
  },
  {
    title: "Tacto Electronics Game",
    company: "Playshifu",
    description: "An educational AR game teaching basic electronics concepts through interactive puzzles and simulations.",
    image: "https://via.placeholder.com/600x400/0A1128/39FF14?text=Tacto+Electronics",
    technologies: ["AR", "Unity", "Educational Design", "Interactive Learning"],
    playStoreLink: "#"
  },
  {
    title: "Food Truck Chef",
    company: "Nukebox Studios",
    description: "A time-management cooking game where players manage food trucks across different locations, serving customers and upgrading equipment.",
    image: "https://via.placeholder.com/600x400/0A1128/FFFF00?text=Food+Truck+Chef",
    technologies: ["Unity", "F2P", "Mobile Game Design", "Monetization"],
    playStoreLink: "#"
  },
  {
    title: "Web3 Gaming Marketplace",
    company: "AURA",
    description: "A decentralized marketplace for game assets, allowing players to buy, sell, and trade in-game items across multiple games.",
    image: "https://via.placeholder.com/600x400/0A1128/00FFFF?text=Web3+Marketplace",
    technologies: ["Blockchain", "NFT", "React", "Smart Contracts"],
    link: "#"
  },
  {
    title: "Adaptive Math Games",
    company: "SplashLearn",
    description: "A suite of educational games that adapt to student performance, focusing on making math learning engaging and effective.",
    image: "https://via.placeholder.com/600x400/0A1128/FF00FF?text=Adaptive+Math",
    technologies: ["Educational Design", "Unity", "Adaptive Learning", "Analytics"],
    link: "#"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            <AnimatedText variant="glow">Featured Projects</AnimatedText>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            A selection of games and products I've developed and managed throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <Card 
                variant="hover"
                className="h-full overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 bg-cyber-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white border border-white/10">
                    {project.company}
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-cyber-darker px-2 py-1 rounded border border-cyan-500/20 text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center space-x-3 mt-auto">
                    {project.link && (
                      <Button
                        variant="outlined"
                        size="sm"
                        href={project.link}
                        className="flex items-center"
                        icon={<ExternalLink size={14} />}
                      >
                        Visit
                      </Button>
                    )}
                    
                    {project.playStoreLink && (
                      <Button
                        variant="outlined"
                        size="sm"
                        href={project.playStoreLink}
                        className="flex items-center"
                        icon={<Play size={14} />}
                      >
                        Play Store
                      </Button>
                    )}
                    
                    {project.githubLink && (
                      <Button
                        variant="ghost"
                        size="sm"
                        href={project.githubLink}
                        className="flex items-center"
                        icon={<Github size={14} />}
                      >
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
