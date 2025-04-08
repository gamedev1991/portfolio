
import { useEffect } from 'react';
import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';

const BlogPostPage = () => {
  // Force a refresh of assets when the blog post page loads
  useEffect(() => {
    // Clear any cached content
    if (window.caches) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
    
    // Force reload of the current page assets
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const newHref = href.includes('?') 
          ? `${href}&v=${new Date().getTime()}` 
          : `${href}?v=${new Date().getTime()}`;
        link.setAttribute('href', newHref);
      }
    });
  }, []);

  return (
    <Layout>
      <BlogPost />
    </Layout>
  );
};

export default BlogPostPage;
