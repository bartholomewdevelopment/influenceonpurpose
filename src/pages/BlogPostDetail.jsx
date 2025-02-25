import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import blogPosts from '../data/blogPosts';
import '../styles/BlogStyles.css';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="blog-post-detail">
      <div className="blog-container">
        <aside className="blog-sidebar">
          <h3>Other Posts</h3>
          <ul>
            {blogPosts
              .filter((p) => p.slug !== slug) // Exclude current post
              .map((p) => (
                <li key={p.id}>
                  <Link to={`/resources/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
          </ul>
        </aside>
        <div className="blog-main">
          <BlogPost post={post} />
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;