import { useLocation } from 'react-router-dom';
import SectionIntro from '../components/SectionIntro';
import { useSite } from '../context/SiteContext';
import { getLocalizedContent } from '../data/localizedContent';
import { imagePaths } from '../config/imagePaths';

function ContentPage() {
  const { pathname } = useLocation();
  const { language } = useSite();
  const { common, pageContent } = getLocalizedContent(language);
  const page = pageContent[pathname];
  const pageImage = imagePaths.pageImages?.[pathname];

  if (!page) {
    return (
      <div className="page-stack">
        <section className="content-hero">
          <SectionIntro eyebrow="Not Found" title={pathname} intro={common.contentBody} />
        </section>
      </div>
    );
  }

  return (
    <div className="page-stack">
      <section className="content-hero">
        <SectionIntro eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      </section>

      <div className="content-page-visual">
        {pageImage && <img src={pageImage} alt={page.title} />}
      </div>

      <section className="content-grid">
        <article className="overview-card overview-card--wide">
          <p className="section-eyebrow">{page.group}</p>
          <h2>{common.contentReady}</h2>
          <p>{common.contentBody}</p>
        </article>

        {page.highlights.map((highlight) => (
          <article key={highlight} className="overview-card">
            <p className="section-eyebrow">{common.highlight}</p>
            <h3>{highlight}</h3>
            <p>{common.highlightBody}</p>
          </article>
        ))}
      </section>

    </div>
  );
}

export default ContentPage;
