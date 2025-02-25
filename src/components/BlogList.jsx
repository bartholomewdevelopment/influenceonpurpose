import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogStyles.css';

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      <h2>Regenerative Culture Resources</h2>
      {posts.map((post) => (
        <div key={post.id} className="blog-preview">
          {post.image && (
            <div className="blog-preview-image">
              <img
                src={post.image}
                alt={post.title}
                className="thumbnail"
              />
            </div>
          )}
          <div className="blog-preview-content">
            <h3>
              <Link to={`/resources/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
            <small>Posted on: {new Date(post.date).toLocaleDateString()}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;