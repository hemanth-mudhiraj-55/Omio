import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

function BlogsPage() {
  useEffect(() => {
    document.title = 'Blogs — Insights | Omio Solutions';
    return () => { document.title = 'Omio Solutions'; };
  }, []);

  return (
    <div className="page-stack">
      <header className="content-hero">
        <p className="section-eyebrow">Insights</p>
        <h1>Blogs</h1>
        <p className="blog-listing-intro">
          Thoughtful long-form writing on AI systems, engineering strategy, and modern delivery
          practices — written for teams building serious software.
        </p>
      </header>

      <section className="blogs-grid" aria-label="Blog posts">
        {blogPosts.map((post, index) => (
          <Link
            key={post.slug}
            to={post.path}
            className="blog-card"
            aria-label={post.title}
          >
            <div className="blog-card__image-placeholder" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <div className="blog-card__body">
              <div className="blog-card__meta">
                <span className="blog-category-chip">{post.category}</span>
                <span className="blog-card__read-time">{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.intro}</p>
              <div className="blog-card__footer">
                <time dateTime={post.publishDate}>{post.publishDate}</time>
                <span className="blog-card__cta">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default BlogsPage;
