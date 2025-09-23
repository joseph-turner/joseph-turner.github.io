import type { Skill } from '../../components/SkillsGrid';

export type Job = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  accomplishments: string[];
  skills: Skill[];
  location?: string;
  remote?: boolean;
};

export const jobs: Job[] = [
  {
    title: 'Senior Front End Developer',
    company: 'Rugiet',
    startDate: 'Feb 2025',
    endDate: 'Sep 2025',
    location: 'Austin, TX',
    remote: true,
    description:
      'Led front-end development team, mentored junior developers, and improved web performance and processes.',
    accomplishments: [
      'Led front-end development team and mentored junior developers',
      'Improved web performance metrics by 30% (Lighthouse scores)',
      'Implemented A/B testing framework using Growthbook',
      'Established development processes including sprint management (ClickUp/Linear)',
      'Code base optimization (removed 5000+ unused files)',
    ],
    skills: [
      {
        name: 'Next.js (app router)',
        category: 'Framework',
        description:
          'React-based framework for building web applications with app router.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Rugiet',
            years: '2025',
          },
        ],
        level: 5,
      },
      {
        name: 'TypeScript',
        category: 'Language',
        description:
          'Typed superset of JavaScript for scalable web development.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Rugiet',
            years: '2025',
          },
        ],
        level: 5,
      },
      {
        name: 'Storyblok',
        category: 'Tools',
        description: 'Headless CMS for managing content.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Rugiet',
            years: '2025',
          },
        ],
        level: 4,
      },
      {
        name: 'Builder.io',
        category: 'Tools',
        description: 'Visual headless CMS and page builder.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Rugiet',
            years: '2025',
          },
        ],
        level: 4,
      },
      {
        name: 'GitHub Actions',
        category: 'DevOps',
        description: 'CI/CD automation for code workflows.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Rugiet',
            years: '2025',
          },
        ],
        level: 4,
      },
      {
        name: 'Vercel',
        category: 'DevOps',
        description: 'Cloud platform for frontend deployments.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Rugiet',
            years: '2025',
          },
        ],
        level: 4,
      },
      {
        name: 'AI-assisted development',
        category: 'Tools',
        description:
          'Using AI tools to accelerate coding and productivity.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Rugiet',
            years: '2025',
          },
        ],
        level: 3,
      },
    ],
  },
  {
    title: 'Senior Front End Developer',
    company: 'Beyond, Inc',
    startDate: 'Mar 2023',
    endDate: 'Dec 2024',
    location: 'Midvale, UT',
    remote: true,
    description:
      'Worked on feature enhancements and major upgrades to the Next.js stack, improving user experience and conversions.',
    accomplishments: [
      'Enhanced search results page features leading to increased conversions',
      'Successfully upgraded Next.js from v12 to v15 with app router implementation',
    ],
    skills: [
      {
        name: 'Next.js',
        category: 'Framework',
        description:
          'React-based framework for building web applications.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Beyond, Inc',
            years: '2023–2024',
          },
        ],
        level: 5,
      },
      {
        name: 'Fastify',
        category: 'Tools',
        description:
          'Fast and low overhead web framework for Node.js.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Beyond, Inc',
            years: '2023–2024',
          },
        ],
        level: 4,
      },
      {
        name: 'Node.js',
        category: 'Language',
        description:
          'JavaScript runtime for server-side development.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Beyond, Inc',
            years: '2023–2024',
          },
        ],
        level: 4,
      },
      {
        name: 'GraphQL',
        category: 'Tools',
        description:
          'Query language for APIs and runtime for fulfilling queries.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Beyond, Inc',
            years: '2023–2024',
          },
        ],
        level: 4,
      },
      {
        name: 'RESTful APIs',
        category: 'Tools',
        description:
          'Architectural style for designing networked applications.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Beyond, Inc',
            years: '2023–2024',
          },
        ],
        level: 4,
      },
    ],
  },
  {
    title: 'Front End Developer II',
    company: 'Overstock.com',
    startDate: 'Oct 2018',
    endDate: 'Mar 2023',
    location: 'Midvale, UT',
    remote: true,
    description:
      'Led migrations to modern architecture and delivered A/B tested features that improved conversion rates.',
    accomplishments: [
      'Led migration to Next.js architecture',
      'Implemented A/B tested features resulting in 2%+ conversion rate increase',
      'Developed back-end-for-front-end service for search and taxonomy pages',
    ],
    skills: [
      {
        name: 'Next.js',
        category: 'Framework',
        description:
          'React-based framework for building web applications.',
        positions: [
          {
            title: 'Front End Developer II',
            company: 'Overstock.com',
            years: '2018–2023',
          },
        ],
        level: 5,
      },
      {
        name: 'React',
        category: 'Framework',
        description:
          'UI library for building interactive components.',
        positions: [
          {
            title: 'Front End Developer II',
            company: 'Overstock.com',
            years: '2018–2023',
          },
        ],
        level: 5,
      },
      {
        name: 'A/B testing',
        category: 'Testing',
        description:
          'Experimentation technique to compare two versions of a webpage.',
        positions: [
          {
            title: 'Front End Developer II',
            company: 'Overstock.com',
            years: '2018–2023',
          },
        ],
        level: 4,
      },
      {
        name: 'Search/BFF services',
        category: 'Tools',
        description:
          'Back-end-for-front-end services for search and taxonomy.',
        positions: [
          {
            title: 'Front End Developer II',
            company: 'Overstock.com',
            years: '2018–2023',
          },
        ],
        level: 4,
      },
    ],
  },
  {
    title: 'Senior Front End Developer',
    company: 'Accenture Interactive',
    startDate: 'Jan 2016',
    endDate: 'Oct 2018',
    location: 'Meridian, ID',
    remote: false,
    description:
      'Delivered client-facing front-end solutions and collaborated across teams for large projects.',
    accomplishments: [
      'Client-facing solutions development',
      'On-site and remote collaboration across teams',
    ],
    skills: [
      {
        name: 'JavaScript',
        category: 'Language',
        description: 'Programming language for web development.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Accenture Interactive',
            years: '2016–2018',
          },
        ],
        level: 5,
      },
      {
        name: 'HTML',
        category: 'Language',
        description: 'Markup language for creating web pages.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Accenture Interactive',
            years: '2016–2018',
          },
        ],
        level: 5,
      },
      {
        name: 'CSS',
        category: 'Language',
        description:
          'Style sheet language for designing web pages.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Accenture Interactive',
            years: '2016–2018',
          },
        ],
        level: 5,
      },
      {
        name: 'Grunt',
        category: 'Tools',
        description: 'JavaScript task runner for automation.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Accenture Interactive',
            years: '2016–2018',
          },
        ],
        level: 3,
      },
      {
        name: 'Sass',
        category: 'Tools',
        description: 'CSS preprocessor for advanced styling.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Accenture Interactive',
            years: '2016–2018',
          },
        ],
        level: 4,
      },
      {
        name: 'Less',
        category: 'Tools',
        description: 'CSS preprocessor for dynamic styles.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Accenture Interactive',
            years: '2016–2018',
          },
        ],
        level: 3,
      },
      {
        name: 'Handlebars',
        category: 'Tools',
        description: 'Templating engine for JavaScript.',
        positions: [
          {
            title: 'Senior Front End Developer',
            company: 'Accenture Interactive',
            years: '2016–2018',
          },
        ],
        level: 3,
      },
    ],
  },
  {
    title: 'Front End Developer',
    company: 'Scentsy',
    startDate: 'Jun 2012',
    endDate: 'Dec 2015',
    location: 'Meridian, ID',
    remote: false,
    description:
      'Worked on front-end development for .NET applications and collaborated closely with design and backend teams.',
    accomplishments: [
      'Front-end development for .NET applications',
      'Cross-functional collaboration with design and backend teams',
      'UI/UX implementation',
    ],
    skills: [
      {
        name: 'HTML',
        category: 'Language',
        description: 'Markup language for creating web pages.',
        positions: [
          {
            title: 'Front End Developer',
            company: 'Scentsy',
            years: '2012–2015',
          },
        ],
        level: 5,
      },
      {
        name: 'CSS',
        category: 'Language',
        description:
          'Style sheet language for designing web pages.',
        positions: [
          {
            title: 'Front End Developer',
            company: 'Scentsy',
            years: '2012–2015',
          },
        ],
        level: 5,
      },
      {
        name: 'JavaScript',
        category: 'Language',
        description: 'Programming language for web development.',
        positions: [
          {
            title: 'Front End Developer',
            company: 'Scentsy',
            years: '2012–2015',
          },
        ],
        level: 5,
      },
      {
        name: 'UI/UX',
        category: 'Tools',
        description:
          'User interface and user experience design and implementation.',
        positions: [
          {
            title: 'Front End Developer',
            company: 'Scentsy',
            years: '2012–2015',
          },
        ],
        level: 4,
      },
    ],
  },
];
