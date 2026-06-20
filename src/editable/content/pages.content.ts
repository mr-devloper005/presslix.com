import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'News, media, and public updates',
      description: 'Explore announcements, newsroom updates, media coverage, and dynamic categories through a clean distribution experience.',
      openGraphTitle: 'News, media, and public updates',
      openGraphDescription: 'Discover press releases, media coverage, launch notes, and category-led updates through a polished distribution experience.',
      keywords: ['media distribution', 'press release', 'newsroom updates', 'public announcements'],
    },
    hero: {
      badge: 'Latest media and newsroom updates',
      title: ['Distribute media updates', 'with clarity, speed, and reach.'],
      description: 'Browse press releases, company announcements, campaign coverage, newsroom notes, and public updates organized for fast discovery.',
      primaryCta: { label: 'Browse latest updates', href: '/updates' },
      secondaryCta: { label: 'Open News Media', href: '/updates?category=news-media' },
      searchPlaceholder: 'Search news, companies, categories, and updates',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for reading, browsing, and connecting different kinds of content.',
      paragraphs: [
        'This site brings together article-style reading, visual browsing, and structured discovery so visitors can move naturally between different content types.',
        'Instead of separating stories, visuals, and supporting resources into disconnected surfaces, the platform keeps them connected in one place with consistent navigation and easier exploration.',
        'Whether someone starts with a story, an image-led post, a listing, or a resource page, they can keep discovering related content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles, visuals, and resources through one connected experience.',
      description: 'Move between articles, image-led posts, listings, and resources through one clearer and more connected visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A sharper media distribution desk for fast-moving updates.',
    description: `${slot4BrandConfig.siteName} helps announcements, releases, and media coverage move through a clean reader-first distribution experience.`,
    paragraphs: [
      'Instead of burying announcements in disconnected feeds, the platform keeps every media update easy to browse, search, and open from a consistent archive.',
      'Visitors can move from a launch note to related coverage, from a category page to a full release, or from a search result to the source details without losing context.',
    ],
    values: [
      {
        title: 'Press-ready structure',
        description: 'Headlines, summaries, categories, source details, and full release content stay clear and scannable.',
      },
      {
        title: 'Connected distribution',
        description: 'Media updates remain connected across home, archive, search, and detail pages so campaigns are easier to follow.',
      },
      {
        title: 'Readable and trustworthy',
        description: 'The interface favors calm spacing, clear actions, and visible real posts over noisy placeholders.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to the media distribution desk.',
    description: 'Send coverage requests, correction notes, syndication questions, or campaign details and we will route the message to the right workflow.',
    formTitle: 'Send media details',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search press releases, announcements, categories, topics, and media updates across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find media updates faster.',
      description: 'Use keywords, categories, and content types to discover releases, coverage, and public announcements from the live archive.',
      placeholder: 'Search releases, companies, topics, or categories',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit media distribution content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to submit media updates.',
      description: 'Use your account to open the media publishing workspace and prepare announcements, coverage notes, and press-ready updates.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a media distribution update.',
      description: 'Choose the content lane, add the headline, category, source URL, summary, and release body for review.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for the media distribution workspace.',
      badge: 'Member access',
      title: 'Welcome back to the media desk.',
      description: 'Login to manage submissions, create distribution updates, and keep newsroom workflows moving.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for the media distribution workspace.',
      badge: 'Site access',
      title: 'Create your media desk account.',
      description: 'Create an account to prepare press releases, submit announcements, and access the publishing workspace.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
