function SectionIntro({ eyebrow, title, intro, align = 'left' }) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="section-copy">{intro}</p>
    </div>
  );
}

export default SectionIntro;
