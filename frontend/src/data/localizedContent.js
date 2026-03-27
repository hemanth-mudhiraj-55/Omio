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
  if (typeof value === 'string') return value;
  return value[language] || value.en;
};

export const supportedLanguages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ja', label: '日本語' },
  { code: 'pl', label: 'Polski' },
  { code: 'uk', label: 'Українська' },
];

/* ─────────────────────────────────────────────────
   UI / COMMON STRINGS
───────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────
   HERO DESCRIPTION
───────────────────────────────────────────────── */
const heroDescriptionMap = {
  en: 'Enterprise-grade software services shaped around intelligent systems, modern delivery, and calm, precise execution.',
  de: 'Enterprise-Software-Dienstleistungen rund um intelligente Systeme, modernes Delivery und präzise Ausführung.',
  ja: 'インテリジェントなシステム、モダンなデリバリー、そして精確な実行に特化したエンタープライズ向けソフトウェアサービス。',
  pl: 'Usługi software na poziomie enterprise, skupione wokół inteligentnych systemów, nowoczesnego delivery i precyzyjnej realizacji.',
  uk: 'Програмні послуги enterprise-рівня, побудовані навколо інтелектуальних систем, сучасного delivery та точного виконання.',
};

/* ─────────────────────────────────────────────────
   HERO TITLE LINES
───────────────────────────────────────────────── */
const phraseMap = {
  'Think behind': { en: 'Think behind', de: 'Denken hinter', ja: '人の知性の', pl: 'Myśl stojąca za', uk: 'Думка за' },
  the: { en: 'the', de: 'der', ja: 'その', pl: 'ludzkiej', uk: 'людського' },
  'Artificial intelligence': { en: 'Artificial intelligence', de: 'Künstlicher Intelligenz', ja: '人工知能', pl: 'sztuczną inteligencją', uk: 'штучним інтелектом' },
};

/* ─────────────────────────────────────────────────
   HOME PILLARS
───────────────────────────────────────────────── */
const homePillarsTranslations = [
  {
    eyebrow: { en: 'Product Engineering', de: 'Produktentwicklung', ja: 'プロダクトエンジニアリング', pl: 'Product Engineering', uk: 'Продуктова інженерія' },
    title: {
      en: 'Build premium digital products without losing delivery speed.',
      de: 'Premium-Digitalprodukte entwickeln — ohne Lieferverzögerungen.',
      ja: 'デリバリースピードを落とさずに、プレミアムなデジタル製品を構築。',
      pl: 'Twórz produkty cyfrowe najwyższej klasy bez utraty tempa delivery.',
      uk: 'Створюйте преміальні цифрові продукти, не втрачаючи швидкості delivery.',
    },
    description: {
      en: 'Omio combines frontend craft, backend reliability, and platform thinking so every launch feels deliberate.',
      de: 'Omio verbindet Frontend-Qualität, Backend-Verlässlichkeit und Plattformdenken für bewusste Launches.',
      ja: 'OmioはフロントエンドのクラフトとバックエンドのReliabilityを組み合わせ、全てのリリースを意図的なものにします。',
      pl: 'Omio łączy frontend craft, niezawodność backendu i myślenie platformowe, by każdy launch był przemyślany.',
      uk: 'Omio поєднує frontend-майстерність, надійність бекенду та платформне мислення для кожного запуску.',
    },
  },
  {
    eyebrow: { en: 'Applied AI', de: 'Angewandte KI', ja: '応用AI', pl: 'Stosowane AI', uk: 'Прикладний AI' },
    title: {
      en: 'Bring AI initiatives into production with measurement and control.',
      de: 'KI-Initiativen mit Messung und Kontrolle in die Produktion bringen.',
      ja: 'AIイニシアティブを計測とコントロールで本番環境へ。',
      pl: 'Wdrażaj inicjatywy AI do produkcji z pomiarem i kontrolą.',
      uk: 'Впроваджуйте AI-ініціативи у виробництво з вимірюванням та контролем.',
    },
    description: {
      en: 'From readiness assessments to benchmarking and monitoring, the foundation is designed for real-world use.',
      de: 'Von Readiness Assessments bis hin zu Benchmarking und Monitoring — die Basis ist für die Praxis konzipiert.',
      ja: 'レディネス評価からベンチマーキング、モニタリングまで、基盤は実用に即して設計されています。',
      pl: 'Od oceny gotowości po benchmarking i monitoring — fundament zaprojektowany do realnego użycia.',
      uk: 'Від оцінки готовності до бенчмаркингу та моніторингу — фундамент, розроблений для реального використання.',
    },
  },
  {
    eyebrow: { en: 'Operational Clarity', de: 'Operative Klarheit', ja: '運用の明確さ', pl: 'Jasność operacyjna', uk: 'Операційна ясність' },
    title: {
      en: 'Structure every section so the website can scale with the business.',
      de: 'Jeden Bereich so strukturieren, dass die Website mit dem Unternehmen wächst.',
      ja: 'ビジネスの成長に合わせてウェブサイトがスケールできるよう、各セクションを構造化。',
      pl: 'Ustrukturyzuj każdą sekcję, by strona mogła skalować się wraz z biznesem.',
      uk: 'Структуруйте кожен розділ так, щоб сайт масштабувався разом із бізнесом.',
    },
    description: {
      en: 'The site architecture is already separated into reusable content, shared styles, and route-ready pages.',
      de: 'Die Site-Architektur ist bereits in wiederverwendbare Inhalte, gemeinsame Stile und routenbereite Seiten unterteilt.',
      ja: 'サイトアーキテクチャは、再利用可能なコンテンツ、共通スタイル、ルート対応ページに分離済みです。',
      pl: 'Architektura strony jest już podzielona na wielokrotnego użytku treści, wspólne style i gotowe strony routingu.',
      uk: 'Архітектура сайту вже розділена на багаторазовий контент, спільні стилі та готові до маршрутизації сторінки.',
    },
  },
];

/* ─────────────────────────────────────────────────
   HOME HIGHLIGHTS
───────────────────────────────────────────────── */
const homeHighlightsTranslations = [
  {
    title: {
      en: 'Case-study ready storytelling',
      de: 'Case-Study-taugliches Storytelling',
      ja: 'ケーススタディ対応のストーリーテリング',
      pl: 'Storytelling gotowy na case studies',
      uk: 'Сторітелінг, готовий до кейс-стаді',
    },
    description: {
      en: 'A dedicated Insights structure for case studies and blogs, with room for featured editorial content.',
      de: 'Eine dedizierte Insights-Struktur für Case Studies und Blogs mit Platz für redaktionelle Inhalte.',
      ja: 'ケーススタディとブログ専用のInsights構造で、特集コンテンツのスペースも確保。',
      pl: 'Dedykowana struktura Insights dla case studies i blogów, z miejscem na treści redakcyjne.',
      uk: 'Виділена структура Insights для кейсів і блогів із місцем для редакційного контенту.',
    },
  },
  {
    title: {
      en: 'Flexible visual system',
      de: 'Flexibles Visuelles System',
      ja: '柔軟なビジュアルシステム',
      pl: 'Elastyczny system wizualny',
      uk: 'Гнучка візуальна система',
    },
    description: {
      en: 'Color tokens and image paths are centralized so the brand can evolve without rebuilding the UI.',
      de: 'Farb-Tokens und Bildpfade sind zentralisiert, damit sich die Marke ohne UI-Neuaufbau weiterentwickeln kann.',
      ja: 'カラートークンと画像パスが一元管理され、UIを再構築せずにブランドを進化できます。',
      pl: 'Tokeny kolorów i ścieżki obrazów są scentralizowane, by marka mogła ewoluować bez przebudowy UI.',
      uk: 'Колірні токени та шляхи зображень централізовані, щоб бренд міг розвиватися без перебудови UI.',
    },
  },
  {
    title: {
      en: 'Global navigation model',
      de: 'Globales Navigationsmodell',
      ja: 'グローバルナビゲーションモデル',
      pl: 'Globalny model nawigacji',
      uk: 'Глобальна модель навігації',
    },
    description: {
      en: 'Language switching, mega-menu sections, and page-level routing mirror a mature enterprise layout.',
      de: 'Sprachwechsel, Mega-Menü-Sektionen und Seitenrouting spiegeln ein ausgereiftes Enterprise-Layout wider.',
      ja: '言語切替、メガメニューセクション、ページルーティングが成熟したエンタープライズレイアウトを反映。',
      pl: 'Przełączanie języków, sekcje mega menu i routing stron odzwierciedlają dojrzały layout enterprise.',
      uk: 'Перемикання мов, розділи мега-меню та маршрутизація сторінок відображають зрілий enterprise-макет.',
    },
  },
];

/* ─────────────────────────────────────────────────
   NAVIGATION — NAV BAR LABELS
───────────────────────────────────────────────── */
const navLabelMap = {
  Services: { en: 'Services', de: 'Services', ja: 'サービス', pl: 'Uslugi', uk: 'Послуги' },
  'Case Studies': { en: 'Case Studies', de: 'Case Studies', ja: 'ケース', pl: 'Case Studies', uk: 'Кейси' },
  Omio: { en: 'Omio', de: 'Omio', ja: 'Omio', pl: 'Omio', uk: 'Omio' },
  Career: { en: 'Career', de: 'Karriere', ja: '採用', pl: 'Kariera', uk: 'Карєра' },
  'About us': { en: 'About us', de: 'Ueber uns', ja: '会社情報', pl: 'O nas', uk: 'Про нас' },
};

/* ─────────────────────────────────────────────────
   NAVIGATION — GROUP DESCRIPTIONS & FEATURED CONTENT
───────────────────────────────────────────────── */
const navGroupTranslations = {
  services: {
    description: {
      en: 'Engineering, AI delivery, and platform acceleration services.',
      de: 'Engineering, KI-Delivery und Platform-Beschleunigungsservices.',
      ja: 'エンジニアリング、AIデリバリー、プラットフォーム加速サービス。',
      pl: 'Usługi inżynieryjne, AI delivery i akceleracja platform.',
      uk: 'Інженерні послуги, AI delivery та прискорення платформ.',
    },
    featuredTitle: {
      en: 'Build systems that stay elegant as they scale.',
      de: 'Systeme bauen, die auch beim Skalieren elegant bleiben.',
      ja: 'スケールしても洗練されたシステムを構築する。',
      pl: 'Buduj systemy, które zachowują elegancję przy skalowaniu.',
      uk: 'Створюйте системи, що залишаються елегантними під час масштабування.',
    },
    featuredDescription: {
      en: 'From product engineering to enterprise AI, Omio combines clean execution with dependable delivery.',
      de: 'Von Product Engineering bis Enterprise AI — Omio verbindet saubere Ausführung mit verlässlichem Delivery.',
      ja: 'プロダクトエンジニアリングからEnterprise AIまで、OmioはクリーンなExecution と信頼性の高いDeliveryを融合。',
      pl: 'Od product engineering po enterprise AI — Omio łączy czyste wykonanie z niezawodnym delivery.',
      uk: 'Від product engineering до enterprise AI — Omio поєднує чисте виконання з надійним delivery.',
    },
  },
  insights: {
    description: {
      en: 'Selected work, applied thinking, and practical stories from the field.',
      de: 'Ausgewählte Projekte, angewandtes Denken und praktische Geschichten aus der Praxis.',
      ja: '厳選されたプロジェクト、応用的な思考、実践的なストーリー。',
      pl: 'Wybrane projekty, stosowane myślenie i praktyczne historie z terenu.',
      uk: 'Вибрані проєкти, прикладне мислення та практичні історії з поля.',
    },
    featuredTitle: {
      en: 'Proof over promise.',
      de: 'Beweise statt Versprechen.',
      ja: '約束より証明。',
      pl: 'Dowody ponad obietnice.',
      uk: 'Докази важливіші за обіцянки.',
    },
    featuredDescription: {
      en: 'Explore delivery patterns, product wins, and engineering lessons shaped by real engagements.',
      de: 'Delivery-Muster, Produkterfolge und Engineering-Lektionen aus echten Projekten.',
      ja: '実際のプロジェクトから生まれたDeliveryパターン、プロダクトの成功、エンジニアリングの教訓。',
      pl: 'Wzorce delivery, sukcesy produktowe i lekcje inżynieryjne z realnych projektów.',
      uk: 'Патерни delivery, перемоги продуктів та інженерні уроки з реальних проєктів.',
    },
  },
  omio: {
    description: {
      en: 'The core Omio story and positioning.',
      de: 'Die Kerngeschichte und Positionierung von Omio.',
      ja: 'Omioのコアストーリーとポジショニング。',
      pl: 'Główna historia i pozycjonowanie Omio.',
      uk: 'Основна історія та позиціонування Omio.',
    },
    featuredTitle: {
      en: 'Technology that feels carefully considered.',
      de: 'Technologie, die durchdacht wirkt.',
      ja: '丁寧に考えられたテクノロジー。',
      pl: 'Technologia, która wydaje się starannie przemyślana.',
      uk: 'Технологія, що відчувається ретельно продуманою.',
    },
    featuredDescription: {
      en: 'A premium digital presence for a software services brand centered on craft and intelligence.',
      de: 'Eine Premium-Digital-Präsenz für eine Software-Marke, die auf Handwerk und Intelligenz setzt.',
      ja: 'クラフトとインテリジェンスを中心としたソフトウェアサービスブランドのプレミアムデジタルプレゼンス。',
      pl: 'Premiumowa obecność cyfrowa dla marki software skoncentrowanej na rzemiośle i inteligencji.',
      uk: 'Преміальна цифрова присутність для бренду програмних послуг, орієнтованого на майстерність та інтелект.',
    },
  },
  careers: {
    description: {
      en: 'Culture, opportunities, and team growth.',
      de: 'Kultur, Chancen und Teamwachstum.',
      ja: 'カルチャー、チャンス、チームの成長。',
      pl: 'Kultura, możliwości i rozwój zespołu.',
      uk: 'Культура, можливості та зростання команди.',
    },
    featuredTitle: {
      en: 'Join a team that values thoughtful builders.',
      de: 'Werden Sie Teil eines Teams, das durchdachte Entwickler schätzt.',
      ja: '丁寧に作る人を大切にするチームへ。',
      pl: 'Dołącz do zespołu, który ceni przemyślanych budowniczych.',
      uk: 'Приєднуйтесь до команди, яка цінує вдумливих розробників.',
    },
    featuredDescription: {
      en: 'Career pages are structured and ready for full role content once you share the final copy.',
      de: 'Die Karriere-Seiten sind strukturiert und bereit für finale Rollenbeschreibungen.',
      ja: 'キャリアページは構造化済みで、最終コンテンツの共有後すぐに公開できます。',
      pl: 'Strony kariery są ustrukturyzowane i gotowe na pełne opisy stanowisk.',
      uk: 'Сторінки кар\'єри структуровані та готові до повного наповнення після надання фінального тексту.',
    },
  },
  about: {
    description: {
      en: 'Who Omio is, how the team works, and where it is headed.',
      de: 'Wer Omio ist, wie das Team arbeitet und wohin es geht.',
      ja: 'Omioとは何者か、チームがどのように働き、どこへ向かうのか。',
      pl: 'Kim jest Omio, jak pracuje zespół i dokąd zmierza.',
      uk: 'Хто таке Omio, як працює команда та куди вона прямує.',
    },
    featuredTitle: {
      en: 'A clear point of view, expressed simply.',
      de: 'Ein klarer Standpunkt, einfach ausgedrückt.',
      ja: '明確な視点を、シンプルに表現。',
      pl: 'Wyraźny punkt widzenia, wyrażony prosto.',
      uk: 'Чітка точка зору, виражена просто.',
    },
    featuredDescription: {
      en: 'The about section is broken into dedicated pages so every topic can grow without crowding.',
      de: 'Der About-Bereich ist in dedizierte Seiten unterteilt, damit jedes Thema wachsen kann.',
      ja: 'Aboutセクションは専用ページに分割されており、各トピックが独立して成長できます。',
      pl: 'Sekcja about jest podzielona na dedykowane strony, by każdy temat mógł się rozwijać.',
      uk: 'Розділ About розділений на окремі сторінки, щоб кожна тема могла розвиватися без перевантаження.',
    },
  },
};

/* ─────────────────────────────────────────────────
   NAVIGATION — ITEM TITLES & DESCRIPTIONS
───────────────────────────────────────────────── */
const navItemTranslations = {
  '/services/web-development': {
    title: { en: 'Web Development', de: 'Webentwicklung', ja: 'Web開発', pl: 'Tworzenie stron', uk: 'Веб-розробка' },
    description: {
      en: 'Custom web platforms with strong UX, scalable architecture, and measurable business outcomes.',
      de: 'Individuelle Webplattformen mit starker UX, skalierbarer Architektur und messbaren Ergebnissen.',
      ja: '優れたUX、スケーラブルなアーキテクチャ、測定可能なビジネス成果を持つカスタムWebプラットフォーム。',
      pl: 'Niestandardowe platformy web z silnym UX, skalowalną architekturą i mierzalnymi wynikami.',
      uk: 'Кастомні веб-платформи з сильним UX, масштабованою архітектурою та вимірюваними результатами.',
    },
  },
  '/services/mobile-development': {
    title: { en: 'Mobile Development', de: 'Mobile Entwicklung', ja: 'モバイル開発', pl: 'Tworzenie aplikacji mobilnych', uk: 'Мобільна розробка' },
    description: {
      en: 'iOS and Android experiences built for performance, polish, and product iteration speed.',
      de: 'iOS- und Android-Apps für Performance, Qualität und schnelle Produktiteration.',
      ja: 'パフォーマンス、磨き上げ、製品イテレーション速度のために構築されたiOSおよびAndroidエクスペリエンス。',
      pl: 'Aplikacje iOS i Android tworzone z myślą o wydajności, jakości i szybkości iteracji.',
      uk: 'iOS та Android застосунки для продуктивності, якості та швидкості ітерацій.',
    },
  },
  '/services/cloud-devops-custom-integration': {
    title: { en: 'Cloud, DevOps & Integration', de: 'Cloud, DevOps & Integration', ja: 'クラウド・DevOps・統合', pl: 'Cloud, DevOps i Integracje', uk: 'Cloud, DevOps та Інтеграції' },
    description: {
      en: 'Reliable delivery pipelines, infrastructure automation, and systems that connect cleanly.',
      de: 'Zuverlässige Delivery-Pipelines, Infrastrukturautomatisierung und sauber verbundene Systeme.',
      ja: '信頼性の高いDeliveryパイプライン、インフラ自動化、クリーンに接続されたシステム。',
      pl: 'Niezawodne pipelines delivery, automatyzacja infrastruktury i systemy połączone w sposób czysty.',
      uk: 'Надійні delivery-пайплайни, автоматизація інфраструктури та системи, що чисто поєднуються.',
    },
  },
  '/services/ai-agent-evaluation-benchmarking': {
    title: { en: 'AI Agent Evaluation', de: 'KI-Agenten-Evaluierung', ja: 'AIエージェント評価', pl: 'Ewaluacja agentów AI', uk: 'Оцінка AI-агентів' },
    description: {
      en: 'Practical evaluation frameworks that expose quality, safety, and operational readiness.',
      de: 'Praxisnahe Evaluierungsframeworks für Qualität, Sicherheit und operative Bereitschaft.',
      ja: '品質、安全性、運用準備状況を明らかにする実践的な評価フレームワーク。',
      pl: 'Praktyczne frameworki ewaluacyjne ujawniające jakość, bezpieczeństwo i gotowość operacyjną.',
      uk: 'Практичні фреймворки оцінювання, що розкривають якість, безпеку та операційну готовність.',
    },
  },
  '/services/enterprise-ai-agents': {
    title: { en: 'Enterprise AI Agents', de: 'Enterprise KI-Agenten', ja: 'エンタープライズAIエージェント', pl: 'Enterprise AI Agents', uk: 'Enterprise AI-агенти' },
    description: {
      en: 'Production-minded AI workflows designed for internal efficiency and customer-facing value.',
      de: 'Produktionsorientierte KI-Workflows für interne Effizienz und kundenorientierten Mehrwert.',
      ja: '内部効率と顧客向け価値のために設計された、本番稼働を見据えたAIワークフロー。',
      pl: 'Zorientowane na produkcję przepływy AI dla efektywności wewnętrznej i wartości dla klientów.',
      uk: 'Виробничо-орієнтовані AI-воркфлоу для внутрішньої ефективності та цінності для клієнтів.',
    },
  },
  '/services/agent-readiness-risk-assessment': {
    title: { en: 'Agent Readiness & Risk', de: 'Agent Readiness & Risiko', ja: 'エージェント準備度・リスク', pl: 'Gotowość agentów i ryzyko', uk: 'Готовність агентів та ризики' },
    description: {
      en: 'Governance-focused reviews to identify adoption risks before they affect the business.',
      de: 'Governance-orientierte Reviews zur Identifizierung von Adoptionsrisiken vor der Geschäftsauswirkung.',
      ja: 'ビジネスへの影響前に導入リスクを特定するガバナンス重視のレビュー。',
      pl: 'Przeglądy skupione na governance w celu identyfikacji ryzyk adopcji przed ich wpływem na biznes.',
      uk: 'Огляди з акцентом на управління для виявлення ризиків впровадження до їх впливу на бізнес.',
    },
  },
  '/services/continuous-monitoring-regression-testing': {
    title: { en: 'Monitoring & Testing', de: 'Monitoring & Testing', ja: 'モニタリング・テスト', pl: 'Monitoring i testowanie', uk: 'Моніторинг та тестування' },
    description: {
      en: 'Ongoing quality signals that keep complex systems trustworthy after launch.',
      de: 'Kontinuierliche Qualitätssignale, die komplexe Systeme auch nach dem Launch vertrauenswürdig halten.',
      ja: 'ローンチ後も複雑なシステムの信頼性を維持する継続的な品質シグナル。',
      pl: 'Ciągłe sygnały jakości, które utrzymują złożone systemy wiarygodnymi po launchu.',
      uk: 'Постійні сигнали якості, що підтримують довіру до складних систем після запуску.',
    },
  },
  '/services/sft-rlhf': {
    title: { en: 'Fine-Tuning & RLHF', de: 'Fine-Tuning & RLHF', ja: 'ファインチューニング・RLHF', pl: 'Fine-Tuning i RLHF', uk: 'Дообучення та RLHF' },
    description: {
      en: 'Model improvement loops aligned with domain expectations and user experience goals.',
      de: 'Modellverbesserungsschleifen ausgerichtet auf Domänenerwartungen und UX-Ziele.',
      ja: 'ドメインの期待とユーザー体験目標に沿ったモデル改善ループ。',
      pl: 'Pętle doskonalenia modeli dostosowane do oczekiwań domenowych i celów UX.',
      uk: 'Цикли покращення моделей, узгоджені з доменними очікуваннями та цілями UX.',
    },
  },
  '/services/staffing': {
    title: { en: 'Staffing', de: 'Staffing', ja: 'スタッフィング', pl: 'Staffing', uk: 'Стаффінг' },
    description: {
      en: 'Flexible engineering support for delivery teams that need specialized momentum.',
      de: 'Flexible Engineering-Unterstützung für Delivery-Teams, die spezialisiertes Momentum benötigen.',
      ja: '特化したモメンタムを必要とするDeliveryチームへの柔軟なエンジニアリングサポート。',
      pl: 'Elastyczne wsparcie inżynieryjne dla zespołów delivery potrzebujących wyspecjalizowanego momentum.',
      uk: 'Гнучка інженерна підтримка для delivery-команд, яким потрібен спеціалізований momentum.',
    },
  },
  '/insights/articles': {
    title: { en: 'Articles', de: 'Artikel', ja: '記事', pl: 'Artykuły', uk: 'Статті' },
    description: {
      en: "In-depth reads on software startups, industry trends, and Omio's perspective on technology.",
      de: 'Ausführliche Artikel über Software-Startups, Branchentrends und Omios Technologieperspektive.',
      ja: 'ソフトウェアスタートアップ、業界トレンド、Omioの技術的視点についての詳細な読み物。',
      pl: 'Szczegółowe artykuły o startupach software, trendach branżowych i perspektywie Omio na technologię.',
      uk: 'Детальні матеріали про software-стартапи, галузеві тренди та технологічну перспективу Omio.',
    },
  },
  '/insights/case-studies': {
    title: { en: 'Case Studies', de: 'Case Studies', ja: 'ケーススタディ', pl: 'Case Studies', uk: 'Кейси' },
    description: {
      en: 'Real delivery stories that show how Omio turns technical ambition into operational results.',
      de: 'Echte Delivery-Geschichten, die zeigen, wie Omio technischen Ehrgeiz in operative Ergebnisse umwandelt.',
      ja: 'OmioがどのようにTechnical Ambitionを運用結果に変えるかを示す実際のDeliveryストーリー。',
      pl: 'Prawdziwe historie delivery pokazujące, jak Omio przekształca techniczne ambicje w wyniki operacyjne.',
      uk: 'Реальні delivery-історії, що показують, як Omio перетворює технічні амбіції на операційні результати.',
    },
  },
  '/insights/blogs': {
    title: { en: 'Blogs', de: 'Blogs', ja: 'ブログ', pl: 'Blogi', uk: 'Блоги' },
    description: {
      en: 'Thoughtful articles on product engineering, AI systems, and modern delivery practices.',
      de: 'Durchdachte Artikel über Product Engineering, KI-Systeme und moderne Delivery-Praktiken.',
      ja: 'プロダクトエンジニアリング、AIシステム、モダンなDelivery慣行に関する思慮深い記事。',
      pl: 'Przemyślane artykuły o product engineering, systemach AI i nowoczesnych praktykach delivery.',
      uk: 'Вдумливі статті про product engineering, AI-системи та сучасні delivery-практики.',
    },
  },
  '/omio-solutions': {
    title: { en: 'Omio Solutions', de: 'Omio Solutions', ja: 'Omio Solutions', pl: 'Omio Solutions', uk: 'Omio Solutions' },
    description: {
      en: 'A concise overview page that anchors the company narrative.',
      de: 'Eine prägnante Übersichtsseite, die das Unternehmensnarrativ verankert.',
      ja: '企業ナラティブを固める簡潔な概要ページ。',
      pl: 'Zwięzła strona przeglądu, która zakotwicza narrację firmy.',
      uk: 'Стисла сторінка огляду, що закріплює наратив компанії.',
    },
  },
  '/careers/life-at-omio': {
    title: { en: 'Life at Omio', de: 'Leben bei Omio', ja: 'Omioでの生活', pl: 'Życie w Omio', uk: 'Життя в Omio' },
    description: {
      en: 'A look at how the team works, collaborates, and grows together.',
      de: 'Ein Blick darauf, wie das Team arbeitet, zusammenarbeitet und gemeinsam wächst.',
      ja: 'チームがどのように働き、協力し、共に成長するかを見てみましょう。',
      pl: 'Spojrzenie na to, jak zespół pracuje, współpracuje i rośnie razem.',
      uk: 'Погляд на те, як команда працює, співпрацює та зростає разом.',
    },
  },
  '/careers/open-positions': {
    title: { en: 'Open Positions', de: 'Offene Stellen', ja: '求人情報', pl: 'Otwarte stanowiska', uk: 'Відкриті вакансії' },
    description: {
      en: 'Current opportunities for people who enjoy building ambitious software products.',
      de: 'Aktuelle Möglichkeiten für Menschen, die gerne ambitionierte Software-Produkte entwickeln.',
      ja: '意欲的なソフトウェア製品を構築することを楽しむ人々への現在の機会。',
      pl: 'Aktualne możliwości dla osób lubiących tworzyć ambitne produkty software.',
      uk: 'Поточні можливості для людей, які люблять створювати амбітні програмні продукти.',
    },
  },
  '/careers/benefits': {
    title: { en: 'Benefits', de: 'Benefits', ja: '福利厚生', pl: 'Benefity', uk: 'Переваги' },
    description: {
      en: 'Support structures that help the team do its best work sustainably.',
      de: 'Unterstützungsstrukturen, die dem Team helfen, nachhaltig beste Arbeit zu leisten.',
      ja: 'チームが持続的に最高の仕事をするための支援構造。',
      pl: 'Struktury wsparcia pomagające zespołowi wykonywać najlepszą pracę w sposób zrównoważony.',
      uk: 'Структури підтримки, що допомагають команді сталим чином виконувати найкращу роботу.',
    },
  },
  '/careers/professional-development': {
    title: { en: 'Professional Development', de: 'Berufliche Entwicklung', ja: '専門能力開発', pl: 'Rozwój zawodowy', uk: 'Професійний розвиток' },
    description: {
      en: 'Learning opportunities designed to deepen craft and expand leadership capacity.',
      de: 'Lernmöglichkeiten zur Vertiefung des Handwerks und Erweiterung der Führungskapazität.',
      ja: '技術を深め、リーダーシップ能力を拡大するために設計された学習機会。',
      pl: 'Możliwości uczenia się zaprojektowane w celu pogłębienia rzemiosła i rozszerzenia zdolności przywódczych.',
      uk: 'Можливості навчання для поглиблення майстерності та розширення лідерського потенціалу.',
    },
  },
  '/about/who-we-are': {
    title: { en: 'Who We Are', de: 'Wer wir sind', ja: '私たちについて', pl: 'Kim jesteśmy', uk: 'Хто ми' },
    description: {
      en: 'The story, values, and operating mindset behind Omio Solutions.',
      de: 'Die Geschichte, Werte und Denkweise hinter Omio Solutions.',
      ja: 'Omio Solutionsの背景にあるストーリー、価値観、運営マインドセット。',
      pl: 'Historia, wartości i sposób działania Omio Solutions.',
      uk: 'Історія, цінності та операційне мислення Omio Solutions.',
    },
  },
  '/about/leadership': {
    title: { en: 'Leadership', de: 'Führung', ja: 'リーダーシップ', pl: 'Przywództwo', uk: 'Керівництво' },
    description: {
      en: 'The people shaping delivery quality, culture, and long-term direction.',
      de: 'Die Menschen, die Delivery-Qualität, Kultur und Langzeitrichtung gestalten.',
      ja: 'Deliveryの品質、文化、長期的な方向性を形成する人々。',
      pl: 'Osoby kształtujące jakość delivery, kulturę i długoterminowy kierunek.',
      uk: 'Люди, що формують якість delivery, культуру та довгострокову спрямованість.',
    },
  },
  '/about/partners': {
    title: { en: 'Partners', de: 'Partner', ja: 'パートナー', pl: 'Partnerzy', uk: 'Партнери' },
    description: {
      en: 'Collaborators and ecosystem relationships that expand what Omio can deliver.',
      de: 'Kooperationspartner und Ökosystembeziehungen, die Omios Leistungsfähigkeit erweitern.',
      ja: 'Omioが提供できることを拡大する協力者とエコシステムの関係。',
      pl: 'Współpracownicy i relacje ekosystemowe rozszerzające możliwości Omio.',
      uk: 'Партнери та екосистемні відносини, що розширюють можливості Omio.',
    },
  },
  '/about/location': {
    title: { en: 'Location', de: 'Standort', ja: '所在地', pl: 'Lokalizacja', uk: 'Розташування' },
    description: {
      en: 'Where the team operates and how Omio works with clients across regions.',
      de: 'Wo das Team tätig ist und wie Omio regionsübergreifend mit Kunden zusammenarbeitet.',
      ja: 'チームが活動する場所と、Omioが地域を越えてクライアントとどのように協力するか。',
      pl: 'Gdzie działa zespół i jak Omio współpracuje z klientami w różnych regionach.',
      uk: 'Де працює команда та як Omio співпрацює з клієнтами в різних регіонах.',
    },
  },
};

/* ─────────────────────────────────────────────────
   EXPORTED FUNCTION
───────────────────────────────────────────────── */
export function getLocalizedContent(language) {
  return {
    supportedLanguages,
    routeOrder,
    pageContent,
    common: Object.fromEntries(
      Object.entries(translations).map(([key, value]) => [key, translate(value, language)]),
    ),
    navigationGroups: baseNavigationGroups.map((group) => {
      const gt = navGroupTranslations[group.key] ?? {};
      return {
        ...group,
        label: translate(navLabelMap[group.label] || { en: group.label }, language),
        description: translate(gt.description || { en: group.description }, language),
        featuredTitle: translate(gt.featuredTitle || { en: group.featuredTitle }, language),
        featuredDescription: translate(gt.featuredDescription || { en: group.featuredDescription }, language),
        items: group.items.map((item) => {
          const it = navItemTranslations[item.path] ?? {};
          return {
            ...item,
            title: translate(it.title || { en: item.title }, language),
            description: translate(it.description || { en: item.description }, language),
          };
        }),
      };
    }),
    heroContent: {
      ...baseHeroContent,
      eyebrow: 'Omio Solutions',
      description: translate(heroDescriptionMap, language),
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
    homePillars: homePillarsTranslations.map((t) => ({
      eyebrow: translate(t.eyebrow, language),
      title: translate(t.title, language),
      description: translate(t.description, language),
    })),
    homeHighlights: homeHighlightsTranslations.map((t) => ({
      title: translate(t.title, language),
      description: translate(t.description, language),
    })),
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
