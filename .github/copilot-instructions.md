# AI Agent Instructions

## Project Overview
This is a personal portfolio website built with Astro, showcasing Joseph Turner's professional experience and projects. The site emphasizes performance and clean code organization.

## Architecture

### Framework & Core Technologies
- Built with Astro (static site generator)
- TypeScript for type safety
- Tailwind CSS for styling
- Vitest for testing

src/
├── components/       # Reusable UI components
│   ├── common/      # Generic, shared components
│   ├── layout/      # Layout components (Header, Footer)
│   └── sections/    # Main page sections (Hero, About, etc.)
├── data/           # Static data files (projects.ts)
├── layouts/        # Page layouts
└── pages/          # Astro pages & routes
### Directory Structure
```
src/
├── components/       # Reusable UI components
│   ├── common/      # Generic, shared components
│   ├── layout/      # Layout components (Header, Footer)
│   └── sections/    # Main page sections (Hero, About, etc.)
├── data/           # Static data files (projects.ts)
├── layouts/        # Page layouts
└── pages/          # Astro pages & routes
...other files and folders...
```

#### Test File Collocation
- Unit and component test files are placed next to the files they test (e.g., `HelloWorld.ts` and `HelloWorld.test.ts` in the same folder)
- No central test directory; tests are distributed throughout the codebase

## Key Patterns

### Component Organization
- Common components (`src/components/common/`) are pure UI elements
- Section components (`src/components/sections/`) represent major content blocks
- Layout components handle page structure and shared elements

### Data Management
- Project data is centralized in `src/data/projects.ts`
- Content is statically defined, no CMS integration currently

### Styling
- Tailwind CSS for utility-first styling
- Global styles in `src/styles/global.css`
- Dark/light theme support via `ThemeControl` component

## Development Workflow

### Common Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm test          # Run Vitest tests
```

### Adding New Content
1. For new projects: Update `src/data/projects.ts`
2. For new sections: Create component in `src/components/sections/`
3. For new pages: Add `.astro` file in `src/pages/`

### Best Practices
- Keep components small and focused
- Use TypeScript types for data structures
- Follow existing component patterns for consistency
- Maintain accessible markup structure

## Resume Content Guidelines
- Refer to `.github/instructions/resume.instructions.md` for content rules
- Keep professional experience and skills updated
- Maintain consistent tone across all content

## Testing
-- Unit and component tests use Vitest
-- Test files are collocated with the files they test (e.g., `*.test.ts` next to source files)
-- No central test directory; tests are distributed throughout the codebase
-- Component tests should focus on business logic
-- UI tests should verify accessibility and responsive behavior

## Performance Considerations
- Optimize images before adding to `public/` directory
- Lazy load off-screen content
- Keep CSS utilities organized with Tailwind
- Monitor bundle size during development

## Integration Points
- GitHub Actions for CI/CD (pending setup)
- Resume PDF generation workflow (planned)
- Blog integration (commented out, planned feature)

## Documentation References
- Project setup: README.md
- Resume content: .github/instructions/resume.instructions.md
- Astro docs: https://docs.astro.build
