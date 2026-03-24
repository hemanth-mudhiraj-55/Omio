import {
  heroContent as baseHeroContent,
  homeHighlights as baseHomeHighlights,
  homePillars as baseHomePillars,
  homeStats as baseHomeStats,
  navigationGroups as baseNavigationGroups,
  pageContent,
  routeOrder,
} from './siteContent';

const translate = (value, language) => {
  if (typeof value === 'string') {
    return value;
  }

  return value[language] || value.en;
};

export const supportedLanguages = [
  { code: 'en', label: 'Global / English' },
  { code: 'de', label: 'Germany / Deutsch' },
  { code: 'ja', label: 'Japan / Japanese' },
  { code: 'pl', label: 'Poland / Polski' },
  { code: 'uk', label: 'Ukraine / Ukrainian' },
];

const translations = {
  brandSubtitle: {
    en: 'Software Services',
    de: 'Software-Dienstleistungen',
    ja: 'ソフトウェアサービス',
    pl: 'Usługi programistyczne',
    uk: 'Програмні послуги',
  },
  contact: {
    en: 'Contact',
    de: 'Kontakt',
    ja: 'お問い合わせ',
    pl: 'Kontakt',
    uk: 'Контакт',
  },
  dark: {
    en: 'Dark',
    de: 'Dunkel',
    ja: 'ダーク',
    pl: 'Ciemny',
    uk: 'Темний',
  },
  light: {
    en: 'Light',
    de: 'Hell',
    ja: 'ライト',
    pl: 'Jasny',
    uk: 'Світлий',
  },
  featuredVisualPlaceholder: {
    en: 'Featured visual placeholder',
    de: 'Platzhalter fuer Bild',
    ja: 'ビジュアルプレースホルダー',
    pl: 'Miejsce na obraz',
    uk: 'Місце для зображення',
  },
  updateImagePaths: {
    en: 'Update `src/config/imagePaths.js` to connect page-specific imagery.',
    de: 'Aktualisieren Sie `src/config/imagePaths.js`, um Bilder zu verbinden.',
    ja: '`src/config/imagePaths.js` を更新して画像を接続してください。',
    pl: 'Zaktualizuj `src/config/imagePaths.js`, aby podlaczyc obrazy.',
    uk: 'Оновіть `src/config/imagePaths.js`, щоб підключити зображення.',
  },
  heroPlaceholder: {
    en: 'Hero background placeholder',
    de: 'Platzhalter fuer Hero-Bild',
    ja: 'ヒーロー背景プレースホルダー',
    pl: 'Miejsce na obraz hero',
    uk: 'Місце для hero-зображення',
  },
  featuredFocus: {
    en: 'Featured Focus',
    de: 'Fokus',
    ja: '注目領域',
    pl: 'Fokus',
    uk: 'Фокус',
  },
  heroFeaturedTitle: {
    en: 'Enterprise AI agents with delivery discipline.',
    de: 'Enterprise-KI-Agenten mit Delivery-Disziplin.',
    ja: '運用品質を備えたエンタープライズAIエージェント。',
    pl: 'Enterprise AI agents z dyscyplina delivery.',
    uk: 'Enterprise AI-агенти з дисципліною delivery.',
  },
  heroFeaturedBody: {
    en: 'Reference-inspired layout, adapted into a cleaner Omio identity and route-ready content system.',
    de: 'Vom Referenzstil inspiriert und in eine klarere Omio-Identitaet uebersetzt.',
    ja: '参考レイアウトをもとに、Omioらしいクリーンな構成へ最適化しました。',
    pl: 'Layout inspirowany referencja, dostosowany do czystszej tozsamosci Omio.',
    uk: 'Макет натхненний референсом, але адаптований до чистішої ідентичності Omio.',
  },
  heroSecondaryCard: {
    en: 'Navigation, language selector, hover menu, and page scaffolding are all active.',
    de: 'Navigation, Sprachwahl, Hover-Menue und Seitenstruktur sind aktiv.',
    ja: 'ナビゲーション、言語切替、ホバーメニュー、ページ構成が有効です。',
    pl: 'Nawigacja, wybor jezyka, hover menu i struktura stron sa aktywne.',
    uk: 'Навігація, вибір мови, hover-меню та структура сторінок уже працюють.',
  },
  servicesHeading: {
    en: 'Services',
    de: 'Services',
    ja: 'サービス',
    pl: 'Uslugi',
    uk: 'Послуги',
  },
  servicesSubheading: {
    en: 'Structured service pages presented like a modern enterprise catalog.',
    de: 'Strukturierte Service-Seiten wie ein modernes Enterprise-Katalogsystem.',
    ja: 'モダンなエンタープライズ型のサービス一覧。',
    pl: 'Ustrukturyzowane strony uslug jak nowoczesny katalog enterprise.',
    uk: 'Структуровані сторінки послуг у стилі enterprise-каталогу.',
  },
  whyOmio: {
    en: 'Why Omio',
    de: 'Warum Omio',
    ja: 'Omioを選ぶ理由',
    pl: 'Dlaczego Omio',
    uk: 'Чому Omio',
  },
  whyOmioTitle: {
    en: 'A reference-inspired homepage, rebuilt with a calmer and more premium rhythm.',
    de: 'Eine von Referenzen inspirierte Startseite mit ruhigerem Premium-Rhythmus.',
    ja: '参考デザインをもとに、より洗練されたOmio向けに再構成。',
    pl: 'Strona glowna inspirowana referencja, ale bardziej premium i spokojna.',
    uk: 'Головна сторінка, натхненна референсом, але адаптована під більш преміальний ритм.',
  },
  whyOmioBody: {
    en: 'The layout now leans into stronger hierarchy, featured content blocks, and multi-section storytelling so the site feels closer to a polished services brand.',
    de: 'Das Layout setzt nun staerker auf Hierarchie, Featured Blocks und Storytelling.',
    ja: 'より強い階層構造、注目ブロック、複数セクションのストーリー構成を採用しました。',
    pl: 'Layout opiera sie teraz na mocniejszej hierarchii i storytellingu sekcji.',
    uk: 'Макет тепер має сильнішу ієрархію та виразні контент-блоки.',
  },
  viewCaseStudies: {
    en: 'View Case Studies',
    de: 'Case Studies ansehen',
    ja: 'ケースを見る',
    pl: 'Zobacz case studies',
    uk: 'Переглянути кейси',
  },
  aboutOmio: {
    en: 'About Omio',
    de: 'Ueber Omio',
    ja: 'Omioについて',
    pl: 'O Omio',
    uk: 'Про Omio',
  },
  siteReadiness: {
    en: 'Site Readiness',
    de: 'Site Readiness',
    ja: 'サイト準備状況',
    pl: 'Gotowosc strony',
    uk: 'Готовність сайту',
  },
  insightsHeading: {
    en: 'Insights',
    de: 'Insights',
    ja: 'Insights',
    pl: 'Insights',
    uk: 'Insights',
  },
  insightsTitle: {
    en: 'Editorial and proof layers that mirror enterprise websites.',
    de: 'Editoriale und Proof-Layer wie bei Enterprise-Websites.',
    ja: 'エンタープライズサイトに近い編集・実績レイヤー。',
    pl: 'Warstwa editorial i proof jak na stronach enterprise.',
    uk: 'Редакційні та proof-блоки в стилі enterprise-сайтів.',
  },
  aboutHeading: {
    en: 'About',
    de: 'Ueber uns',
    ja: '会社情報',
    pl: 'O nas',
    uk: 'Про нас',
  },
  aboutTitle: {
    en: 'Dedicated pages for the company story, leadership, and partners.',
    de: 'Eigene Seiten fuer Unternehmensgeschichte, Leadership und Partner.',
    ja: '会社情報、リーダー、パートナーの専用ページ。',
    pl: 'Dedykowane strony dla historii firmy, liderow i partnerow.',
    uk: 'Окремі сторінки для історії компанії, лідерства та партнерів.',
  },
  contentReady: {
    en: 'Ready for final page-specific copy.',
    de: 'Bereit fuer den finalen Seiteninhalt.',
    ja: '最終ページ文言の準備ができています。',
    pl: 'Gotowe na finalne tresci strony.',
    uk: 'Готово до фінального наповнення сторінки.',
  },
  contentBody: {
    en: 'This page is intentionally scaffolded so you can layer in the final description, media, and proof points without restructuring the frontend.',
    de: 'Diese Seite ist vorbereitet, damit Sie finale Inhalte ohne Umbau des Frontends einfuegen koennen.',
    ja: 'このページは、フロントエンドを作り直さずに最終コンテンツを追加できるよう準備されています。',
    pl: 'Ta strona jest przygotowana, aby dodac finalne tresci bez przebudowy frontendu.',
    uk: 'Ця сторінка підготовлена для додавання фінального контенту без переробки фронтенду.',
  },
  highlight: {
    en: 'Highlight',
    de: 'Highlight',
    ja: 'ハイライト',
    pl: 'Wyroznienie',
    uk: 'Акцент',
  },
  highlightBody: {
    en: 'Use this area for supporting detail, proof points, or visuals tied to this topic.',
    de: 'Nutzen Sie diesen Bereich fuer Details, Nachweise oder passende Visuals.',
    ja: 'この領域には補足説明、実績、関連ビジュアルを配置できます。',
    pl: 'Uzyj tego miejsca na szczegoly, dowody lub grafiki powiazane z tematem.',
    uk: 'Використовуйте цю зону для деталей, доказів або візуалів за темою.',
  },
};

const navLabelMap = {
  Services: { en: 'Services', de: 'Services', ja: 'サービス', pl: 'Uslugi', uk: 'Послуги' },
  'Case Studies': { en: 'Case Studies', de: 'Case Studies', ja: 'ケース', pl: 'Case Studies', uk: 'Кейси' },
  Omio: { en: 'Omio', de: 'Omio', ja: 'Omio', pl: 'Omio', uk: 'Omio' },
  Career: { en: 'Career', de: 'Karriere', ja: '採用', pl: 'Kariera', uk: 'Карєра' },
  'About us': { en: 'About us', de: 'Ueber uns', ja: '会社情報', pl: 'O nas', uk: 'Про нас' },
};

const phraseMap = {
  'Think behind': { en: 'Think behind', de: 'Denken hinter', ja: '人の知性の', pl: 'Mysl stojaca za', uk: 'Думка за' },
  the: { en: 'the', de: 'der', ja: 'その', pl: 'ludzkiej', uk: 'людського' },
  human: { en: 'human', de: 'menschliche', ja: '人間の', pl: 'ludzkiej', uk: 'людського' },
  intelligence: { en: 'intelligence', de: 'Intelligenz', ja: '知性', pl: 'inteligencji', uk: 'інтелекту' },
  'Human Intelligence': { en: 'Human Intelligence', de: 'menschlichen Intelligenz', ja: '人間知性', pl: 'inteligencja', uk: 'інтелектом людини' },
};

export function getLocalizedContent(language) {
  return {
    supportedLanguages,
    routeOrder,
    pageContent,
    common: Object.fromEntries(
      Object.entries(translations).map(([key, value]) => [key, translate(value, language)]),
    ),
    navigationGroups: baseNavigationGroups.map((group) => ({
      ...group,
      label: translate(navLabelMap[group.label] || { en: group.label }, language),
    })),
    heroContent: {
      ...baseHeroContent,
      eyebrow: 'Omio Solutions',
      titleLines: baseHeroContent.titleLines.map((line) => ({
        ...line,
        text: translate(phraseMap[line.text] || { en: line.text }, language),
      })),
    },
    homeStats: baseHomeStats.map((item) => ({
      ...item,
      label: translate(
        {
          'Service verticals ready for expansion': {
            en: 'Service verticals ready for expansion',
            de: 'Service-Bereiche bereit fuer Ausbau',
            ja: '拡張準備済みのサービス領域',
            pl: 'Obszary uslug gotowe do rozwoju',
            uk: 'Напрями послуг, готові до розвитку',
          },
          'Dedicated routes already structured': {
            en: 'Dedicated routes already structured',
            de: 'Strukturierte Routen vorhanden',
            ja: '整理済みの専用ルート',
            pl: 'Gotowe dedykowane trasy',
            uk: 'Окремі маршрути вже підготовлені',
          },
          'Cross-functional delivery mindset': {
            en: 'Cross-functional delivery mindset',
            de: 'Ganzheitliche Delivery-Denkweise',
            ja: '横断的なデリバリー思考',
            pl: 'Cross-funkcyjne podejscie delivery',
            uk: 'Кросфункціональний підхід до delivery',
          },
        }[item.label] || { en: item.label },
        language,
      ),
    })),
    homePillars: baseHomePillars,
    homeHighlights: baseHomeHighlights,
    labels: {
      servicesHeading: translate(translations.servicesHeading, language),
      servicesSubheading: translate(translations.servicesSubheading, language),
      whyOmio: translate(translations.whyOmio, language),
      whyOmioTitle: translate(translations.whyOmioTitle, language),
      whyOmioBody: translate(translations.whyOmioBody, language),
      viewCaseStudies: translate(translations.viewCaseStudies, language),
      aboutOmio: translate(translations.aboutOmio, language),
      siteReadiness: translate(translations.siteReadiness, language),
      insightsHeading: translate(translations.insightsHeading, language),
      insightsTitle: translate(translations.insightsTitle, language),
      aboutHeading: translate(translations.aboutHeading, language),
      aboutTitle: translate(translations.aboutTitle, language),
    },
  };
}
