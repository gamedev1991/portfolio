
import { useState } from 'react';
import Card from './common/Card';
import AnimatedText from './common/AnimatedText';
import { Calendar, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "JetSynthesys",
    role: "Product Manager",
    period: "09/2025 - Present",
    description: "Owning live operations for a mobile game title at a game development services company — managing seasonal deployments, monetisation systems, and cross-functional defect resolution on iOS and Android.",
    achievements: [
      "Owned end-to-end live operations for two consecutive seasons — managing 10 production deployments, 6 LTBs, 4 Trading Posts, and full Legendary, Mythic, Rider, and Atlas branch suites on iOS and Android.",
      "Identified and mitigated a $20,000 revenue risk through impact analysis of Tower Instance configurations during a live Fortification event prize programme.",
      "Resolved a monetisation-critical gacha defect (missing Festive Dragon shards from Draconic Chests) affecting chest revenue — root cause identified and deployed to production without escalation.",
      "Designed an automated CSV batch script delivering a 45× reduction in manual processing time (15 min → 20 sec); adopted team-wide.",
      "Conducted structured impact analysis on a proposed XP Booster feature — identified unmitigable progression risks and recommended against implementation, preventing a disruptive release from entering the development pipeline."
    ]
  },
  {
    company: "Blkbox AI",
    role: "Product Manager",
    period: "2023 - 04/2024",
    description: "Leading product development for a hybrid casual game, focusing on innovative gameplay mechanics and user experiences.",
    achievements: [
      "Launched Gate Runner Mobile Game  within 5 months, achieving 10,000 downloads post-launch.",
      "Improved player D1 retention from 10% to 18% within two months by refining game controls and enhancing level design for smoother gameplay.",
      "Analyzed and optimized core loop and level design, increasing level completion rates by 7%."
    ]
  },
  {
    company: "AURA",
    role: "Product Manager",
    period: "2022 - 2023",
    description: "Managed the development of Web3 gaming marketplace with focus on blockchain integration and NFTs.",
    achievements: [
      "Optimized the website's featured games section, leading to a 5% increase in click-through rates (CTR) and improved user engagement",
      "Successfully implemented a dedicated 'Drops' page on the website, resulting in a notable 7% increase in user engagement time",
      "Established partnerships with 3 major blockchain networks, expanding platform reach"
    ]
  },
  {
    company: "FanClash",
    role: "Product Manager",
    period: "2021 - 2022",
    description: "Led product strategy for fantasy esports platform focusing on user acquisition, retention, and monetization.",
    achievements: [
      "Created 'Fantasy With EStars' feature that drove 20% increase in fill rate",
      "Revamped team creation flow to increase conversion rate by 5%",
      "Performed extensive user research to improve engagement of boosters, resulting in a 10% increase in usage"
    ]
  },
  {
    company: "Playshifu",
    role: "Game Developer",
    period: "2020 - 2021",
    description: "Developed educational AR games for children, focusing on learning through interactive play.",
    achievements: [
      "Developed Tacto Electronics Game, reaching 1K+ downloads in first month",
      "Created adaptive difficulty system, improving session length by 40%",
      "Led efforts on analyzing on Tacto Electronics Game to diagnose drop-offs and increase level completion rate by 5%"
    ]
  },
  {
    company: "SplashLearn",
    role: "Game Developer",
    period: "2019 - 2020",
    description: "Designed and developed educational games targeting K-5 curriculum with focus on engagement and learning outcomes.",
    achievements: [
      "Built math games that increased engagement by 23%",
      "Developed game framework that reduced development time by 35%",
      "Designed, developed, and launched English games on Android/iOS/Web"
    ]
  },
  {
    company: "Nukebox Studios",
    role: "Game Developer",
    period: "2017 - 2019",
    description: "Developed mobile F2P games with focus on casual gaming market and monetization strategies.",
    achievements: [
      "Co-developed Food Truck Chef, which was Google Play Game of the Year 2017",
      "Implemented A/B testing framework that improved monetization by 28%",
      "Optimized game performance, reducing load times by 40% and improving retention"
    ]
  }
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 relative bg-cyber-darker/50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            <AnimatedText variant="glow">Professional Journey</AnimatedText>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            My career path from game development to product management across various innovative companies.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 transform md:translate-x-[-0.5px]"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[15px] md:left-1/2 w-[30px] h-[30px] bg-cyber-black border-2 border-cyan-500 rounded-full transform translate-x-[-15px] md:translate-x-[-15px] z-10 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-12 md:pl-0`}>
                <Card 
                  variant={expandedIndex === index ? "neon" : "hover"}
                  className={`p-5 transition-all duration-300 cursor-pointer ${
                    expandedIndex === index ? 'transform -translate-y-1' : ''
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <span className="inline-flex items-center text-xs text-white/60 bg-white/5 px-2 py-1 rounded">
                        <Calendar size={12} className="mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-medium text-cyan-400 mb-3">{exp.role}</h4>
                    
                    <p className="text-white/70 text-sm mb-4">{exp.description}</p>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <h5 className="font-medium text-white mb-2 mt-2">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex text-sm text-white/70">
                            <ChevronRight size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-3 text-cyan-400 text-sm font-medium">
                      {expandedIndex === index ? 'Click to collapse' : 'Click to expand'}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
