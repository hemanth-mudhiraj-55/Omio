import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getArticle } from '../data/articleContent';

function VideoPlaceholder({ title, caption }) {
  return (
    <figure className="blog-video-placeholder">
      <div className="blog-video-frame" role="img" aria-label={title}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="10 8 16 12 10 16 10 8"/>
        </svg>
        <p>{title}</p>
        <small>Video embed coming soon</small>
      </div>
      {caption && <figcaption className="blog-video-caption">{caption}</figcaption>}
    </figure>
  );
}

function ImagePlaceholder({ alt, caption, src }) {
  if (src) {
    return (
      <figure className="blog-image">
        <img src={src} alt={alt} loading="lazy" width="800" height="450" />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    );
  }
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
      return <ImagePlaceholder alt={block.alt} caption={block.caption} src={block.src} />;
    case 'callout':
      return <blockquote className="blog-callout">{block.text}</blockquote>;
    case 'highlight':
      return <p className="blog-highlight"><strong>{block.text}</strong></p>;
    case 'video':
      return <VideoPlaceholder title={block.title} caption={block.caption} />;
    case 'links':
      return (
        <div className="blog-links-section">
          {block.heading && <p className="blog-links-heading">{block.heading}</p>}
          <ul className="blog-links-list">
            {block.items.map((item, i) => (
              <li key={i}>
                {item.external
                  ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="blog-link-item">{item.text}</a>
                  : <Link to={item.href} className="blog-link-item">{item.text}</Link>
                }
              </li>
            ))}
          </ul>
        </div>
      );
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

function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  useEffect(() => {
    if (article) {
      document.title = article.metaTitle;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = article.metaDescription;

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.metaDescription,
        author: { '@type': 'Organization', name: 'Omio Solutions', url: 'https://omiosolutions.com' },
        publisher: { '@type': 'Organization', name: 'Omio Solutions', url: 'https://omiosolutions.com' },
        datePublished: article.publishDate,
        keywords: article.tags ? article.tags.join(', ') : '',
        url: `https://omiosolutions.com${article.path}`,
      };
      let schemaScript = document.getElementById('article-jsonld');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'article-jsonld';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }
    return () => {
      document.title = 'Omio Solutions';
      const schemaScript = document.getElementById('article-jsonld');
      if (schemaScript) schemaScript.remove();
    };
  }, [article]);

  if (!article) return <Navigate to="/insights/articles" replace />;

  return (
    <article className="blog-post" itemScope itemType="https://schema.org/Article">
      <meta itemProp="datePublished" content={article.publishDate} />
      <meta itemProp="author" content="Omio Solutions" />

      <header className="blog-hero">
        <div className="blog-hero__meta">
          <Link to="/insights/articles" className="blog-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            All articles
          </Link>
          <span className="blog-category-chip">{article.category}</span>
        </div>
        <h1 itemProp="headline">{article.title}</h1>
        <p className="blog-intro" itemProp="description">{article.intro}</p>
        <div className="blog-byline">
          <span>Omio Solutions</span>
          <span className="blog-byline__sep">·</span>
          <time dateTime={article.publishDate}>{article.publishDate}</time>
          <span className="blog-byline__sep">·</span>
          <span>{article.readTime}</span>
        </div>
        <div className="blog-tags">
          {article.tags.map((tag) => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>
      </header>

      <ImagePlaceholder alt={article.coverImageAlt} />

      <div className="blog-layout">
        <aside className="blog-toc" aria-label="Table of contents">
          <p className="blog-toc__heading">On this page</p>
          <nav>
            <ol>
              {article.toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="blog-body" itemProp="articleBody">
          {article.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </div>

      <footer className="blog-footer">
        <div className="blog-footer__inner">
          <p>Want to work with a team that thinks this carefully about delivery?</p>
          <a className="contact-button" href="mailto:hello@omiosolutions.com">
            Talk to Omio Solutions
          </a>
        </div>
        <Link to="/insights/articles" className="blog-back-link blog-back-link--bottom">
          ← Back to all articles
        </Link>
      </footer>
    </article>
  );
}

export default ArticlePage;
