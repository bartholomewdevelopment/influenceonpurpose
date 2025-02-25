import React from 'react';
import '../styles/BlogStyles.css';
import blogarrow2 from '../assets/images/blogarrow2.jpg';
import { Helmet } from 'react-helmet';

const BlogPost = ({ post }) => {
  const renderContent = (content) => {
    const normalizedContent = content.replace(/(\r\n|\r|\n)/g, '\n').trim();
    const paragraphs = normalizedContent.split(/\n\s*\n/);
    console.log('Raw content:', content);
    console.log('Normalized content:', normalizedContent);
    console.log('Paragraphs:', paragraphs);

    return paragraphs.map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith('####')) {
        return <h4 key={index}>{trimmed.replace('####', '').trim()}</h4>;
      } else if (trimmed.startsWith('###')) {
        return <h3 key={index}>{trimmed.replace('###', '').trim()}</h3>;
      } else if (trimmed.startsWith('*[') && trimmed.endsWith(']*')) {
        return <p key={index} className="image-placeholder">{trimmed.replace(/^\*\[(.*)\]\*$/, '$1')}</p>;
      }
      return <p key={index}>{trimmed}</p>;
    }).filter(Boolean);
  };

  const imageMap = {
    './assets/images/blogarrow2.jpg': blogarrow2,
  };

  // Construct and log the share URL for debugging
  const blogUrl = `${window.location.origin}/resources/${post.slug}`;
  const encodedUrl = encodeURIComponent(blogUrl);
  const encodedTitle = encodeURIComponent(post.title);
  console.log('Blog URL:', blogUrl); // Check if this looks correct
  console.log('Encoded URL:', encodedUrl);
  console.log('Encoded Title:', encodedTitle);

  return (
    <article>
      {/* Move Helmet inside the component */}
      <Helmet>
        <meta property="og:title" content={post.title} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:image" content={imageMap[post.image] || post.image} />
        <meta property="og:description" content={post.excerpt || 'Check out this blog post!'} />
      </Helmet>

      {post.image && (
        <div className="featured-image">
          <img src={imageMap[post.image] || post.image} alt={post.title} />
        </div>
      )}
      <h1>{post.title}</h1>
      <div className="post-meta">
        <small>Posted on: {new Date(post.date).toLocaleDateString()}</small>
        {post.author && <small className="byline">By {post.author}</small>}
      </div>
      <div className="blog-content">{renderContent(post.content)}</div>

      {/* Share Buttons with Refined URLs */}
      <div className="share-buttons">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&t=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button facebook"
        >
          Share on Facebook
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button linkedin"
        >
          Share on LinkedIn
        </a>
        <a
          href={`mailto:?subject=${encodedTitle}&body=Check out this blog: ${blogUrl}`}
          className="share-button email"
        >
          Email
        </a>
        <a
          href={`sms:?body=Check out this blog: ${blogUrl}`}
          className="share-button sms"
        >
          Text Message
        </a>
      </div>
    </article>
  );
};

export default BlogPost;