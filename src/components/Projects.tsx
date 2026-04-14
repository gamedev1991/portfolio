import { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';
import AnimatedText from './common/AnimatedText';
import { Video, X, TrendingUp } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  description: string;
  metric?: string;
  image: string;
  technologies: string[];
  playStoreLink?: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Cosmo Sprint",
    company: "Blkbox AI",
    description: "A hybrid casual mobile game featuring procedurally generated levels and adaptive difficulty based on player behavior.",
    metric: "10K downloads · D1 retention 10% → 18%",
    image: "/Images/CosmoSprint-Thumbnail.png",
    technologies: ["Unity", "AI", "Procedural Generation", "Mobile"],
    videoUrl: "/Videos/CosmoSprint.mp4"
  },
  {
    title: "FanClash",
    company: "FanClash",
    description: "A fantasy esports platform allowing users to create teams of professional esports players and compete based on performance.",
    metric: "Fill rate ↑20% · Conversion ↑5%",
    image: "/Images/FanClash-Thumbnail.png",
    technologies: ["React", "Node.js", "Real-time Data", "Esports API"],
    videoUrl: "/Videos/FanClash.mp4"
  },
  {
    title: "Tacto Electronics Game",
    company: "Playshifu",
    description: "An educational AR game teaching basic electronics concepts through interactive puzzles and simulations.",
    metric: "1K+ downloads in month 1 · Session length ↑40%",
    image: "/Images/TactoElectronics-Thumbnail.webp",
    technologies: ["AR", "Unity", "Educational Design", "Interactive Learning"],
    videoUrl: "/Videos/TactoElectronics.mp4"
  },
  {
    title: "Food Truck Chef",
    company: "Nukebox Studios",
    description: "A time-management cooking game where players manage food trucks, serving customers and upgrading equipment.",
    metric: "Google Play Game of Year 2017",
    image: "/Images/FoodTruckChef-Thumbnail.jpg",
    technologies: ["Unity", "F2P", "Mobile Game Design", "Monetization"],
    videoUrl: "/Videos/FoodTruckChef.mp4"
  },
  {
    title: "Web3 Gaming Marketplace",
    company: "AURA",
    description: "A decentralized marketplace for game NFTs, allowing players to buy, sell, and trade in-game items across multiple games.",
    metric: "CTR ↑5% · Drops engagement ↑7%",
    image: "/Images/Aura-Thumbnail.png",
    technologies: ["Blockchain", "NFT", "React", "Smart Contracts"],
    videoUrl: "/Videos/Aura.mp4"
  },
  {
    title: "Adaptive Math Games",
    company: "SplashLearn",
    description: "A suite of educational games that adapt to student performance, focusing on making math learning engaging and effective.",
    metric: "Student engagement ↑23%",
    image: "/Images/SplashLearn-Thumbnail.png",
    technologies: ["Educational Design", "Unity", "Adaptive Learning", "Analytics"],
    videoUrl: "/Videos/SplashLearn.mp4"
  },
  {
    title: "Bring Me Home",
    company: "Nukebox Studios",
    description: "A crossy road type of game where the player has to navigate through obstacles to bring the character home.",
    metric: "0→1 launch · Built & shipped from scratch",
    image: "/Images/BringMeHome-Thumbnail.png",
    technologies: ["Unity", "F2P", "Mobile Game Design", "Monetization"],
    videoUrl: "/Videos/BringMeHome.mp4"
  },
  {
    title: "One Man Army",
    company: "Nukebox Studios",
    description: "A 2D defense game where the player has to defend themselves from waves of enemies.",
    metric: "100K+ downloads · 4.3★ · 2.81K reviews",
    image: "/Images/OneManArmy-Thumbnail.png",
    technologies: ["Unity", "F2P", "Mobile Game Design", "Monetization"],
    videoUrl: "/Videos/OneManArmy.mp4"
  },
  {
    title: "Plugo Animals",
    company: "Playshifu",
    description: "An educational toy based game where kids learn about animals and their habitats.",
    metric: "0→1 launch · Built & shipped from scratch",
    image: "/Images/PlugoAnimals-Thumbnail.png",
    technologies: ["Unity", "AR", "Educational Design", "Interactive Learning"],
    videoUrl: "/Videos/PlugoAnimals.mp4"
  }
];

const VideoModal = ({ videoUrl, isOpen, onClose }: { videoUrl: string; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-cyber-darker rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white z-10 bg-black/50 rounded-full p-1"
        >
          <X size={24} />
        </button>
        <div className="relative pt-[56.25%]">
          <video
            src={videoUrl}
            className="absolute inset-0 w-full h-full"
            controls
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; url: string }>({
    isOpen: false,
    url: '',
  });

  const openVideo = (url: string) => {
    setVideoModal({ isOpen: true, url });
  };

  const closeVideo = () => {
    setVideoModal({ isOpen: false, url: '' });
  };

  return (
    <section id="projects" className="py-20 relative">
      <VideoModal
        videoUrl={videoModal.url}
        isOpen={videoModal.isOpen}
        onClose={closeVideo}
      />
      
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
            >
              <Card 
                variant="hover"
                className="h-full overflow-hidden group"
              >
                {/* Project Image with Video Overlay */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
                  
                  {project.videoUrl && (
                    <button
                      onClick={() => openVideo(project.videoUrl!)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="bg-black/70 p-4 rounded-full transform transition-transform duration-300 hover:scale-110">
                        <Video size={24} className="text-white" />
                      </div>
                    </button>
                  )}
                  
                  <div className="absolute top-3 left-3 bg-cyber-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white border border-white/10">
                    {project.company}
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-3">
                    {project.description}
                  </p>

                  {/* Impact Metric */}
                  {project.metric && (
                    <div className="flex items-center gap-2 mb-4 px-2 py-1.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      <TrendingUp size={13} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-xs font-medium text-cyan-300">{project.metric}</span>
                    </div>
                  )}

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

                  {project.videoUrl && (
                      <Button
                        variant="outlined"
                        size="sm"
                        onClick={() => openVideo(project.videoUrl!)}
                        className="flex items-center"
                        icon={<Video size={14} />}
                      >
                        Watch Demo
                      </Button>
                    )}
                  
                  {/* Play Store Link */}
                  {project.playStoreLink && (
                    <Button
                      variant="outlined"
                      size="sm"
                      href={project.playStoreLink}
                      className="flex items-center"
                    >
                      Play Store
                    </Button>
                  )}
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
