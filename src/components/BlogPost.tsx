
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Card from './common/Card';
import Button from './common/Button';
import { Badge } from './ui/badge';
import AnimatedText from './common/AnimatedText';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(blogPosts.find(post => post.id === id));
  
  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
    
    // Update post based on URL parameter
    setPost(blogPosts.find(post => post.id === id));
  }, [id]);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20">
        <Card className="p-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Post Not Found</h2>
          <p className="text-white/70 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog">
            <Button variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </Card>
      </div>
    );
  }
  
  // Function to get related posts
  const getRelatedPosts = () => {
    return blogPosts
      .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
      .slice(0, 2);
  };
  
  const relatedPosts = getRelatedPosts();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Back navigation */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>
        
        {/* Blog post header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">
              {post.category === 'product-management' ? 'Product Management' : 
               post.category === 'case-study' ? 'Case Study' : 'Tutorial'}
            </Badge>
            
            <div className="flex items-center text-white/50 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {post.dateFormatted}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-text-glow">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center text-xs bg-white/10 text-white/60 px-2 py-1 rounded"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Blog post content */}
        <Card className="p-6 md:p-10 mb-10">
          <div className="prose prose-invert max-w-none prose-headings:font-orbitron prose-headings:text-cyan-400 prose-p:text-white/80 prose-strong:text-white prose-strong:font-semibold prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-cyan-400 prose-blockquote:bg-white/5 prose-blockquote:p-4 prose-blockquote:not-italic prose-blockquote:rounded-r-md prose-li:text-white/80">
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/10">
            <a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center"
            >
              Read the original post on rahulohri.com
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </Card>
        
        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6">
              <AnimatedText variant="glow">Related Posts</AnimatedText>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                  <Card 
                    variant="hover" 
                    className="h-full group cursor-pointer"
                  >
                    <div className="p-6">
                      <div className="mb-3 flex justify-between items-start">
                        <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">
                          {relatedPost.category === 'product-management' ? 'Product Management' : 
                           relatedPost.category === 'case-study' ? 'Case Study' : 'Tutorial'}
                        </Badge>
                        <span className="text-white/50 text-sm">{relatedPost.dateFormatted}</span>
                      </div>
                      
                      <h4 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {relatedPost.title}
                      </h4>
                      
                      <p className="text-white/70 text-sm mb-3 line-clamp-2">
                        {relatedPost.summary}
                      </p>
                      
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm">
                        <span>Read post</span>
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
