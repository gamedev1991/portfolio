import { format, parseISO } from 'date-fns';

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  dateFormatted: string;
  category: 'product-management' | 'case-study' | 'tutorial';
  tags: string[];
  link: string;
  imageUrl?: string;
  contentPath: string; // Path to the content file instead of inline content
  featured?: boolean;
}

// Helper function to format dates consistently
const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'MMMM d, yyyy');
};

export const blogPosts: BlogPost[] = [
  {
    id: "how-i-became-a-product-manager",
    title: "How I Became a Product Manager",
    summary: "Chronicles the journey from a Unity developer to a Product Manager, highlighting challenges and strategies.",
    publishDate: "2021-07-12",
    dateFormatted: formatDate("2021-07-12"),
    category: "product-management",
    tags: ["career", "product management", "journey", "development"],
    link: "/blog/how-i-became-a-product-manager",
    imageUrl: "/placeholder.svg",
    contentPath: "/blog/how-i-became-a-product-manager/how-i-became-a-product-manager.md", 
    featured: true,
  },
  {
    id: "product-requirement-document-movie-review",
    title: "Product Requirement Document for a Feature on a Movie Review Website",
    summary: "Presents a structured PRD for a 'Trending Movies' feature, aimed at improving user engagement.",
    publishDate: "2021-02-04",
    dateFormatted: formatDate("2021-02-04"),
    category: "product-management",
    tags: ["PRD", "product documentation", "feature development", "user engagement"],
    link: "/blog/product-requirement-document-movie-review",
    imageUrl: "/placeholder.svg",
    contentPath: "/blog/product-requirement-document-movie-review/product-requirement-document-movie-review.md", 
  },
  {
    id: "case-study-stick-cricket-live",
    title: "Case Study: Increasing Engagement & Monetization for Stick Cricket Live",
    summary: "Analyzes methods to improve engagement and revenue, including boosters, in-game currency options, and subscriptions.",
    publishDate: "2021-01-17", 
    dateFormatted: formatDate("2021-01-17"),
    category: "case-study",
    tags: ["game design", "monetization", "user engagement", "mobile gaming"],
    link: "/blog/case-study-stick-cricket-live", // Changed to internal link
    imageUrl: "/placeholder.svg",
    contentPath: "/blog/case-study-stick-cricket-live/case-study-stick-cricket-live.md",
  },
  {
    id: "case-study-gardenscapes",
    title: "Case Study: Increasing Engagement & Monetization for Gardenscapes",
    summary: "Hypotheses on improving player engagement and monetization, such as reward timing adjustments and ad-based coin earnings.",
    publishDate: "2020-09-16",
    dateFormatted: formatDate("2020-09-16"),
    category: "case-study",
    tags: ["game design", "monetization", "mobile gaming", "casual games"],
    link: "/blog/case-study-gardenscapes", // Changed to internal link
    imageUrl: "/placeholder.svg",
    contentPath: "/blog/case-study-gardenscapes/case-study-gardenscapes.md",
  }
];

// Export helper functions for blog management
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const searchPosts = (query: string): BlogPost[] => {
  const searchTerm = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) || 
    post.summary.toLowerCase().includes(searchTerm) || 
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};
