export type Job = {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    accomplishments: string[];
    skills: string[];
};

export const jobs: Job[] = [
    {
        title: 'Senior Front End Developer',
        company: 'Rugiet',
        startDate: 'Feb 2025',
        endDate: 'Sep 2025',
        description:
            'Led front-end development team, mentored junior developers, and improved web performance and processes.',
        accomplishments: [
            'Led front-end development team and mentored junior developers',
            'Improved web performance metrics by 30% (Lighthouse scores)',
            'Implemented A/B testing framework using Growthbook',
            'Established development processes including sprint management (ClickUp)',
            'Code base optimization (removed 5000+ unused files)',
        ],
        skills: [
            'Next.js (app router)',
            'TypeScript',
            'Storyblok',
            'Builder.io',
            'GitHub Actions',
            'Vercel',
        ],
    },
    {
        title: 'Senior Front End Developer',
        company: 'Beyond, Inc',
        startDate: 'Mar 2023',
        endDate: 'Dec 2024',
        description:
            'Worked on feature enhancements and major upgrades to the Next.js stack, improving user experience and conversions.',
        accomplishments: [
            'Enhanced search results page features leading to increased conversions',
            'Successfully upgraded Next.js from v12 to v15 with app router implementation',
        ],
        skills: [
            'Next.js',
            'Fastify',
            'Node.js',
            'GraphQL',
            'RESTful APIs',
        ],
    },
    {
        title: 'Front End Developer II',
        company: 'Overstock.com',
        startDate: 'Oct 2018',
        endDate: 'Mar 2023',
        description:
            'Led migrations to modern architecture and delivered A/B tested features that improved conversion rates.',
        accomplishments: [
            'Led migration to Next.js architecture',
            'Implemented A/B tested features resulting in 2%+ conversion rate increase',
            'Developed back-end-for-front-end service for search and taxonomy pages',
        ],
        skills: [
            'Next.js',
            'React',
            'A/B testing',
            'Search/BFF services',
        ],
    },
    {
        title: 'Senior Front End Developer',
        company: 'Accenture Interactive',
        startDate: 'Jan 2016',
        endDate: 'Oct 2018',
        description:
            'Delivered client-facing front-end solutions and collaborated across teams for large projects.',
        accomplishments: [
            'Client-facing solutions development',
            'On-site and remote collaboration across teams',
        ],
        skills: [
            'JavaScript',
            'HTML',
            'CSS',
            'Grunt',
            'Sass',
            'Less',
            'Handlebars',
        ],
    },
    {
        title: 'Front End Developer',
        company: 'Scentsy',
        startDate: 'Jun 2012',
        endDate: 'Dec 2015',
        description:
            'Worked on front-end development for .NET applications and collaborated closely with design and backend teams.',
        accomplishments: [
            'Front-end development for .NET applications',
            'Cross-functional collaboration with design and backend teams',
            'UI/UX implementation',
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    },
];
