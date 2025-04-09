import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Blog from '../components/Blog';

const BlogPage = () => {
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    // Force a style refresh when the blog page loads directly
    document.documentElement.classList.add('blog-page-loaded');
    document.body.classList.add('blog-page-loaded');
    
    // Set the page title
    document.title = 'Case Studies | Rahul Ohri';
    
    // Make sure the page is fully loaded before displaying content
    const timer = setTimeout(() => {
      setIsPageReady(true);
      document.body.classList.add('content-loaded');
      
      // Force reload CSS if needed
      const linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.setAttribute('href', '/direct-route-fix.css?v=' + new Date().getTime());
      document.head.appendChild(linkEl);
      
      // Force navbar visibility
      const header = document.querySelector('header');
      if (header) {
        header.style.visibility = 'visible';
        header.style.opacity = '1';
        header.style.display = 'block';
      }
      
      // Force blog content visibility
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.style.visibility = 'visible';
        blogSection.style.display = 'block';
      }
    }, 100);
    
    return () => {
      document.documentElement.classList.remove('blog-page-loaded');
      document.body.classList.remove('blog-page-loaded');
      document.body.classList.remove('content-loaded');
      clearTimeout(timer);
    };
  }, []);

  return (
    <Layout>
      <div id="blog-container" className={isPageReady ? 'blog-content-ready' : 'blog-content-loading'}>
        <Blog />
      </div>
    </Layout>
  );
};

export default BlogPage;
