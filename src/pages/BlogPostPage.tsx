
import { useEffect } from 'react';
import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';

const BlogPostPage = () => {
  // Force a refresh of assets when the blog post page loads
  useEffect(() => {
    // Check if we need to handle a redirect from an HTML file
    const redirectPath = sessionStorage.getItem('redirectTo');
    if (redirectPath) {
      console.log('Handling redirect to:', redirectPath);
      // Clear the redirect after handling it
      sessionStorage.removeItem('redirectTo');
    }
    
    // Clear browser cache for this page
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          caches.delete(cacheName);
        });
      });
    }
  }, []);

  return (
    <Layout>
      <BlogPost />
    </Layout>
  );
};

export default BlogPostPage;
