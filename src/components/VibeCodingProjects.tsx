import { Link } from 'react-router-dom';
import Card from './common/Card';
import AnimatedText from './common/AnimatedText';
import Layout from './Layout';
import { vibeCodingProjects } from '@/data/vibeCodingProjects';

const VibeCodingProjects = () => {
  return (
    <Layout>
      <section className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="inline-block text-3xl md:text-4xl font-bold relative">
              <AnimatedText variant="glow">Vibe Coding Projects</AnimatedText>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Rapid experiments and tools built using LLMs and bleeding-edge tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vibeCodingProjects.map((project, index) => (
              <a 
                href={project.link}
                key={index}
                className="group relative transition-transform duration-300 hover:-translate-y-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card variant="hover" className="h-full overflow-hidden">
                  {/* Thumbnail Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/70 mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2 text-sm text-cyan-400 mb-2">
                        <span>Features</span>
                      </div>
                      <ul className="space-y-2 text-sm text-white/80">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyan-400 mr-2">▹</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VibeCodingProjects;