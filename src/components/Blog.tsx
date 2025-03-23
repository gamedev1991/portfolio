
import { useState, useEffect } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import Card from './common/Card';
import Button from './common/Button';
import AnimatedText from './common/AnimatedText';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Types for blog filtering
type FilterOption = 'all' | 'product-management' | 'case-study' | 'tutorial';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);
  const [displayedPostsCount, setDisplayedPostsCount] = useState(4);

  // Filter posts based on search query and category filter
  useEffect(() => {
    let filtered = [...blogPosts];
    
    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(post => post.category === activeFilter);
    }
    
    // Apply search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.summary.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setVisiblePosts(filtered);
  }, [searchQuery, activeFilter]);

  // Load more posts when scrolling (simulated for now)
  const loadMorePosts = () => {
    setDisplayedPostsCount(prev => Math.min(prev + 2, visiblePosts.length));
  };

  // Helper function to get category label
  const getCategoryLabel = (category: string): string => {
    switch(category) {
      case 'product-management':
        return 'Product Management';
      case 'case-study':
        return 'Case Study';
      case 'tutorial':
        return 'Tutorial';
      default:
        return category;
    }
  };

  return (
    <section id="blog" className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <AnimatedText variant="glow">
              Thoughts & <span className="text-cyan-400">Insights</span>
            </AnimatedText>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Sharing experiences, case studies, and ideas from my journey in game development and product management.
          </p>
        </div>

        {/* Search and filter bar */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative flex-1 w-full md:max-w-sm">
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-cyber-darker border-cyan-500/30 pl-10 text-white"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-cyan-500" />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            <div className="text-white/70 flex items-center gap-1">
              <Filter className="h-4 w-4" />
              <span className="text-sm">Filter:</span>
            </div>
            
            <button
              onClick={() => setActiveFilter('all')}
              className={cn(
                "px-3 py-1 text-sm rounded-full transition-all duration-300",
                activeFilter === 'all'
                  ? "bg-cyan-500 text-black font-medium"
                  : "bg-cyber-darker/80 text-white/70 hover:bg-cyber-darker hover:text-white"
              )}
            >
              All
            </button>
            
            <button
              onClick={() => setActiveFilter('product-management')}
              className={cn(
                "px-3 py-1 text-sm rounded-full transition-all duration-300",
                activeFilter === 'product-management'
                  ? "bg-cyan-500 text-black font-medium"
                  : "bg-cyber-darker/80 text-white/70 hover:bg-cyber-darker hover:text-white"
              )}
            >
              Product Management
            </button>
            
            <button
              onClick={() => setActiveFilter('case-study')}
              className={cn(
                "px-3 py-1 text-sm rounded-full transition-all duration-300",
                activeFilter === 'case-study'
                  ? "bg-cyan-500 text-black font-medium"
                  : "bg-cyber-darker/80 text-white/70 hover:bg-cyber-darker hover:text-white"
              )}
            >
              Case Studies
            </button>
          </div>
        </div>

        {/* Blog post grid */}
        {visiblePosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {visiblePosts.slice(0, displayedPostsCount).map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <Card 
                  variant="hover"
                  className="h-full group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-4 flex justify-between items-start">
                      <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">
                        {getCategoryLabel(post.category)}
                      </Badge>
                      <span className="text-white/50 text-sm">{post.dateFormatted}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 mb-4 flex-grow">
                      {post.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm mt-auto">
                      <span>Read more</span>
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-cyber-darker/50 border border-white/10 rounded-lg">
            <p className="text-white/70">No posts found matching your search criteria</p>
            <Button 
              variant="ghost" 
              className="mt-4" 
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
        
        {/* Load more button */}
        {visiblePosts.length > displayedPostsCount && (
          <div className="text-center mt-10">
            <Button variant="primary" onClick={loadMorePosts}>
              Load More Posts
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
