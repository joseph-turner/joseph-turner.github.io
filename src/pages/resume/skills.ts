export type Skill = {
  name: string;
  category: string;
  description: string;
  level: number;
};

export type SkillKey =
  | 'NextJS'
  | 'TypeScript'
  | 'Storyblok'
  | 'BuilderIO'
  | 'GitHubActions'
  | 'Vercel'
  | 'AI'
  | 'Fastify'
  | 'NodeJS'
  | 'GraphQL'
  | 'REST'
  | 'React'
  | 'ABTesting'
  | 'BFF'
  | 'Grunt'
  | 'Less'
  | 'Handlebars'
  | 'UIUX'
  | 'JavaScript'
  | 'HTML'
  | 'CSS'
  | 'Sass'
  | 'Tailwind'
  | 'Jest'
  | 'Playwright'
  | 'Vitest';

export const skills: Record<SkillKey, Skill> = {
  NextJS: {
    name: 'Next.js',
    category: 'Framework',
    description:
      'React-based framework for building web applications.',
    level: 5,
  },
  TypeScript: {
    name: 'TypeScript',
    category: 'Language',
    description:
      'Typed superset of JavaScript for scalable web development.',
    level: 5,
  },
  Storyblok: {
    name: 'Storyblok',
    category: 'Tools',
    description: 'Headless CMS for managing content.',
    level: 4,
  },
  BuilderIO: {
    name: 'Builder.io',
    category: 'Tools',
    description: 'Visual headless CMS and page builder.',
    level: 4,
  },
  GitHubActions: {
    name: 'GitHub Actions',
    category: 'DevOps',
    description: 'CI/CD automation for code workflows.',
    level: 4,
  },
  Vercel: {
    name: 'Vercel',
    category: 'DevOps',
    description: 'Cloud platform for frontend deployments.',
    level: 4,
  },
  AI: {
    name: 'AI-assisted development',
    category: 'Tools',
    description:
      'Using AI tools to accelerate coding and productivity.',
    level: 3,
  },
  Fastify: {
    name: 'Fastify',
    category: 'Tools',
    description:
      'Fast and low overhead web framework for Node.js.',
    level: 4,
  },
  NodeJS: {
    name: 'Node.js',
    category: 'Language',
    description:
      'JavaScript runtime for server-side development.',
    level: 4,
  },
  GraphQL: {
    name: 'GraphQL',
    category: 'Tools',
    description:
      'Query language for APIs and runtime for fulfilling queries.',
    level: 4,
  },
  REST: {
    name: 'RESTful APIs',
    category: 'Tools',
    description:
      'Architectural style for designing networked applications.',
    level: 4,
  },
  React: {
    name: 'React',
    category: 'Framework',
    description:
      'UI library for building interactive components.',
    level: 5,
  },
  ABTesting: {
    name: 'A/B testing',
    category: 'Testing',
    description:
      'Experimentation technique to compare two versions of a webpage.',
    level: 4,
  },
  BFF: {
    name: 'BFF services',
    category: 'Tools',
    description: 'Back-end-for-front-end services',
    level: 4,
  },
  Grunt: {
    name: 'Grunt',
    category: 'Tools',
    description: 'JavaScript task runner for automation.',
    level: 3,
  },
  Less: {
    name: 'Less',
    category: 'Tools',
    description: 'CSS preprocessor for dynamic styles.',
    level: 3,
  },
  Handlebars: {
    name: 'Handlebars',
    category: 'Tools',
    description: 'Templating engine for JavaScript.',
    level: 3,
  },
  UIUX: {
    name: 'UI/UX',
    category: 'Tools',
    description: 'User interface and user experience design and implementation.',
    level: 4,
  },
  JavaScript: {
    name: 'JavaScript',
    category: 'Language',
    description: 'Programming language for web development.',
    level: 5,
  },
  HTML: {
    name: 'HTML',
    category: 'Language',
    description: 'Markup language for creating web pages.',
    level: 5,
  },
  CSS: {
    name: 'CSS',
    category: 'Language',
    description: 'Style sheet language for designing web pages.',
    level: 5,
  },
  Sass: {
    name: 'Sass',
    category: 'Tools',
    description: 'CSS preprocessor for advanced styling.',
    level: 4,
  },
  Tailwind: {
    name: 'Tailwind CSS',
    category: 'Tools',
    description: 'Utility-first CSS framework for rapid UI development.',
    level: 4,
  },
  Jest: {
    name: 'Jest',
    category: 'Testing',
    description: 'JavaScript testing framework.',
    level: 4,
  },
  Playwright: {
    name: 'Playwright',
    category: 'Testing',
    description: 'Browser automation and end-to-end testing tool.',
    level: 3,
  },
  Vitest: {
    name: 'Vitest',
    category: 'Testing',
    description: 'Vite-native unit testing framework.',
    level: 3,
  },
};
