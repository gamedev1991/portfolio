import Card from './common/Card';
import AnimatedText from './common/AnimatedText';
import { Gamepad, Database, Workflow, Shield, TrendingUp, Users } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <Card 
    variant="hover" 
    className="p-5 h-full transform transition-transform duration-300 hover:-translate-y-1"
  >
    <div className="flex flex-col h-full">
      <div className="text-cyan-400 mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </Card>
);

const About = () => {
  const skills = [
    {
      icon: <Workflow size={28} />,
      title: "Product Strategy",
      description: "Owning roadmaps, defining priorities, and making the call on what not to ship — across F2P, live ops, and 0→1 launches."
    },
    {
      icon: <Shield size={28} />,
      title: "Risk Mitigation",
      description: "Identifying and neutralising product risks before they reach production. Prevented a $20K revenue impact through structured impact analysis at JetSynthesys."
    },
    {
      icon: <Database size={28} />,
      title: "Data & Analytics",
      description: "Turning retention curves, funnel data, and event logs into product decisions. Comfortable owning metrics end-to-end."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Monetization Strategy",
      description: "Designing and optimising F2P monetisation systems — from A/B test design to live gacha balancing across mobile titles."
    },
    {
      icon: <Users size={28} />,
      title: "Team Leadership",
      description: "Leading cross-functional squads across engineering, design, and QA — in Agile sprints and live ops war rooms."
    },
    {
      icon: <Gamepad size={28} />,
      title: "Mobile Gaming Domain",
      description: "10+ years shipping mobile games across casual, F2P, AR, and Web3 — including a Google Play Game of Year title."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            <AnimatedText variant="glow">About Me</AnimatedText>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">
                I've spent <span className="text-cyan-400 font-medium">over a decade in games</span> — writing the code, designing the systems, and owning the roadmap. I bring technical depth to every product decision.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                My path has taken me from building top-rated mobile games to running live ops seasons and owning monetisation systems across <span className="text-cyan-400 font-medium">F2P, Web3, and mobile platforms</span>. I specialise in making the call — on features, on risks, and on what not to ship.
              </p>

              <p className="text-white/80 leading-relaxed">
                I've shipped at <span className="text-cyan-400 font-medium">JetSynthesys, Blkbox AI, FanClash, AURA, and Nukebox Studios</span> — including a Google Play Game of the Year title — and I've learned that the best product decisions come from being close to both the data and the player.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Stylized Avatar Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-lg animate-pulse-glow"></div>
              
              {/* Avatar with actual image */}
              <div className="absolute inset-4 bg-cyber-darker rounded-lg overflow-hidden border border-white/10">
                <img 
                  src="/Images/rahul-profile.jpg"  
                  alt="Rahul Ohri"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error('Image failed to load:', {
                      src: target.src,
                      naturalWidth: target.naturalWidth,
                      naturalHeight: target.naturalHeight,
                      error: e
                    });
                    target.src = '/placeholder.svg';
                    target.onerror = null; // Prevent infinite loop if placeholder also fails
                  }}
                />
                
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-30 mix-blend-overlay"></div>
                
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="h-full w-full animate-scanline"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500"></div>
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-pink-500"></div>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-blue-500"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <AnimatedText variant="glow">Core Skills</AnimatedText>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard 
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
