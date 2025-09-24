export interface Skill {
  category: string;
  description: string;
  level: number;
  name: string;
}

export type SkillKey =
  | 'ABTesting'
  | 'AI'
  | 'BFF'
  | 'BuilderIO'
  | 'CSS'
  | 'Fastify'
  | 'GitHubActions'
  | 'GraphQL'
  | 'Grunt'
  | 'Handlebars'
  | 'HTML'
  | 'JavaScript'
  | 'Jest'
  | 'Less'
  | 'NextJS'
  | 'NodeJS'
  | 'Playwright'
  | 'React'
  | 'REST'
  | 'Sass'
  | 'Storyblok'
  | 'Tailwind'
  | 'TypeScript'
  | 'UIUX'
  | 'Vercel'
  | 'Vitest';

export const skills: Record<SkillKey, Skill> = {
  ABTesting: {
    category: 'Testing',
    description:
      'Experimentation technique to compare two versions of a webpage.',
    level: 4,
    name: 'A/B testing',
  },
  AI: {
    category: 'Tools',
    description:
      'Using AI tools to accelerate coding and productivity.',
    level: 3,
    name: 'AI-assisted development',
  },
  BFF: {
    category: 'Tools',
    description: 'Back-end-for-front-end services',
    level: 4,
    name: 'BFF services',
  },
  BuilderIO: {
    category: 'Tools',
    description: 'Visual headless CMS and page builder.',
    level: 4,
    name: 'Builder.io',
  },
  CSS: {
    category: 'Language',
    description: 'Style sheet language for designing web pages.',
    level: 5,
    name: 'CSS',
  },
  Fastify: {
    category: 'Tools',
    description:
      'Fast and low overhead web framework for Node.js.',
    level: 4,
    name: 'Fastify',
  },
  GitHubActions: {
    category: 'DevOps',
    description: 'CI/CD automation for code workflows.',
    level: 4,
    name: 'GitHub Actions',
  },
  GraphQL: {
    category: 'Tools',
    description:
      'Query language for APIs and runtime for fulfilling queries.',
    level: 4,
    name: 'GraphQL',
  },
  Grunt: {
    category: 'Tools',
    description: 'JavaScript task runner for automation.',
    level: 3,
    name: 'Grunt',
  },
  Handlebars: {
    category: 'Tools',
    description: 'Templating engine for JavaScript.',
    level: 3,
    name: 'Handlebars',
  },
  HTML: {
    category: 'Language',
    description: 'Markup language for creating web pages.',
    level: 5,
    name: 'HTML',
  },
  JavaScript: {
    category: 'Language',
    description: 'Programming language for web development.',
    level: 5,
    name: 'JavaScript',
  },
  Jest: {
    category: 'Testing',
    description: 'JavaScript testing framework.',
    level: 4,
    name: 'Jest',
  },
  Less: {
    category: 'Tools',
    description: 'CSS preprocessor for dynamic styles.',
    level: 3,
    name: 'Less',
  },
  NextJS: {
    category: 'Framework',
    description:
      'React-based framework for building web applications.',
    level: 5,
    name: 'Next.js',
  },
  NodeJS: {
    category: 'Language',
    description:
      'JavaScript runtime for server-side development.',
    level: 4,
    name: 'Node.js',
  },
  Playwright: {
    category: 'Testing',
    description:
      'Browser automation and end-to-end testing tool.',
    level: 3,
    name: 'Playwright',
  },
  React: {
    category: 'Framework',
    description:
      'UI library for building interactive components.',
    level: 5,
    name: 'React',
  },
  REST: {
    category: 'Tools',
    description:
      'Architectural style for designing networked applications.',
    level: 4,
    name: 'RESTful APIs',
  },
  Sass: {
    category: 'Tools',
    description: 'CSS preprocessor for advanced styling.',
    level: 4,
    name: 'Sass',
  },
  Storyblok: {
    category: 'Tools',
    description: 'Headless CMS for managing content.',
    level: 4,
    name: 'Storyblok',
  },
  Tailwind: {
    category: 'Tools',
    description:
      'Utility-first CSS framework for rapid UI development.',
    level: 4,
    name: 'Tailwind CSS',
  },
  TypeScript: {
    category: 'Language',
    description:
      'Typed superset of JavaScript for scalable web development.',
    level: 5,
    name: 'TypeScript',
  },
  UIUX: {
    category: 'Tools',
    description:
      'User interface and user experience design and implementation.',
    level: 4,
    name: 'UI/UX',
  },
  Vercel: {
    category: 'DevOps',
    description: 'Cloud platform for frontend deployments.',
    level: 4,
    name: 'Vercel',
  },
  Vitest: {
    category: 'Testing',
    description: 'Vite-native unit testing framework.',
    level: 3,
    name: 'Vitest',
  },
};
