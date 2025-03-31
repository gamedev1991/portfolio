import Card from './common/Card';
import AnimatedText from './common/AnimatedText';
import { Globe, Gamepad, Database, Workflow, Lightbulb, Users } from 'lucide-react';

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
      icon: <Gamepad size={28} />,
      title: "Game Design",
      description: "Creating engaging gameplay mechanics and enjoyable user experiences in games across platforms."
    },
    {
      icon: <Database size={28} />,
      title: "Data Analytics",
      description: "Driving product decisions through data analysis, metrics tracking, and insightful interpretations."
    },
    {
      icon: <Workflow size={28} />,
      title: "Product Strategy",
      description: "Developing comprehensive roadmaps and strategies to align products with business goals."
    },
    {
      icon: <Globe size={28} />,
      title: "Web3 & Mobile",
      description: "Specialized in both traditional mobile games and emerging Web3 gaming technologies."
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches to gaming and product development."
    },
    {
      icon: <Users size={28} />,
      title: "Team Leadership",
      description: "Guiding cross-functional teams to deliver high-quality products on schedule."
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
                I'm a passionate <span className="text-cyan-400 font-medium">Product Manager and Game Developer</span> with
                over 6 years of experience in creating engaging gaming experiences and 3+ years in product management.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                My journey has taken me from building top-rated mobile games to managing complex
                product ecosystems across <span className="text-cyan-400 font-medium">B2C, F2P, Web3, and mobile platforms</span>.
                I specialize in transforming creative concepts into polished products through strategic
                planning and data-driven decision-making.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                Throughout my career at companies like <span className="text-cyan-400 font-medium">Blkbox AI, AURA, FanClash, and Nukebox Studios</span>,
                I've championed user-centric design principles while balancing business goals, resulting in
                products that resonate with users and drive measurable results.
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
                  src="/rahul-profile.jpg"  
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
