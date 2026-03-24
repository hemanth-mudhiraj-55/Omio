import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPost } from '../data/blogPosts';

function ImagePlaceholder({ alt, caption }) {
  return (
    <figure className="blog-image-placeholder">
      <div className="blog-image-placeholder__frame" role="img" aria-label={alt}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span>Image coming soon</span>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 id={block.id}>{block.text}</h2>;
    case 'h3':
      return <h3 id={block.id}>{block.text}</h3>;
    case 'p':
      return <p>{block.text}</p>;
    case 'ul':
      return (
        <ul>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      );
    case 'image':
      return <ImagePlaceholder alt={block.alt} caption={block.caption} />;
    case 'callout':
      return <blockquote className="blog-callout">{block.text}</blockquote>;
    case 'faq':
      return (
        <section className="blog-faq" id={block.id} aria-labelledby={`${block.id}-heading`}>
          <h2 id={`${block.id}-heading`}>{block.heading}</h2>
          <dl>
            {block.items.map((item, i) => (
              <div key={i} className="blog-faq__item">
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      );
    default:
      return null;
  }
}

function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.metaTitle}`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = post.metaDescription;
    }
    return () => {
      document.title = 'Omio Solutions';
    };
  }, [post]);

  if (!post) return <Navigate to="/insights/blogs" replace />;

  return (
    <article className="blog-post" itemScope itemType="https://schema.org/BlogPosting">
      <meta itemProp="datePublished" content={post.publishDate} />
      <meta itemProp="author" content="Omio Solutions" />

      {/* ── Hero ───────────────────── */}
      <header className="blog-hero">
        <div className="blog-hero__meta">
          <Link to="/insights/blogs" className="blog-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            All blogs
          </Link>
          <span className="blog-category-chip">{post.category}</span>
        </div>
        <h1 itemProp="headline">{post.title}</h1>
        <p className="blog-intro" itemProp="description">{post.intro}</p>
        <div className="blog-byline">
          <span>Omio Solutions</span>
          <span className="blog-byline__sep">·</span>
          <time dateTime={post.publishDate}>{post.publishDate}</time>
          <span className="blog-byline__sep">·</span>
          <span>{post.readTime}</span>
        </div>
        <div className="blog-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>
      </header>

      {/* ── Cover image placeholder ── */}
      <ImagePlaceholder alt={post.coverImageAlt} />

      {/* ── Layout: TOC + Body ──────── */}
      <div className="blog-layout">
        <aside className="blog-toc" aria-label="Table of contents">
          <p className="blog-toc__heading">On this page</p>
          <nav>
            <ol>
              {post.toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="blog-body" itemProp="articleBody">
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </div>

      {/* ── Footer ─────────────────── */}
      <footer className="blog-footer">
        <div className="blog-footer__inner">
          <p>Want to work with a team that thinks this carefully about delivery?</p>
          <a className="contact-button" href="mailto:hello@omiosolutions.com">
            Talk to Omio Solutions
          </a>
        </div>
        <Link to="/insights/blogs" className="blog-back-link blog-back-link--bottom">
          ← Back to all blogs
        </Link>
      </footer>
    </article>
  );
}

export default BlogPost;
