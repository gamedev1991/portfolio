export interface VibeProject {
  title: string;
  description: string;
  features: string[];
  link: string;
  thumbnail: string; // Changed from icon to thumbnail path
}

export const vibeCodingProjects: VibeProject[] = [
  {
    title: "Tic Tac Toe",
    description: "The Tic-Tac-Toe AI project is an interactive web-based game that allows users to play the classic Tic-Tac-Toe game against each other or against an AI opponent",
    features: [
      "Real-Time Multiplayer and AI Gameplay",
      "Game State Management",
      "Responsive User Interface"
    ],
    link: "https://tic-tac-toe-ai-ashen.vercel.app/",
    thumbnail: "/Images/tic-tac-toe-thumb.jpg" // Add image to public/images/
  },
  {
    title: "Math Tutor Online",
    description: "Many parents and students struggle to find reliable, personalized, and exam-focused maths tutoring online...",
    features: [
      "Personalized Tutoring Pitch",
      "Comparison Table",
      "Exam-Centric Approach",
      "Modern Tools Mentioned",
      "Lead Funnel Ready",
      "Responsive Design"
    ],
    link: "https://mathtutoronline.in/",
    thumbnail: "/Images/math-tutor-thumb.jpg" // Add image to public/images/
  },
  {
    title: "RMG Gamified",
    description: "RMG Gamified is a gamified version of an RMG game, which is a game that allows users to play fantasy sports",
    features: [
      "Gamified Fantasy Sports",
      "Daily Missions",
      "Streaks",
      "Prototype",
      "Vibe Coded"
    ],
    link: "https://tint-claim-88975669.figma.site/",
    thumbnail: "/Images/rmg-thumbnail.jpg" // Add image to public/images/
  }
];