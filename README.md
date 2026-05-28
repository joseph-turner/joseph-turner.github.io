# Joseph Turner Portfolio Website

This is the source code for Joseph Turner's personal portfolio, built to showcase professional experience, projects, and skills.

## Technologies Used

- **Astro** (static site generator)
- **TypeScript** (type safety)
- **Tailwind CSS** (utility-first styling)
- **Vitest** (unit/component testing)
- **GitHub Copilot** (AI-powered coding assistant)

## Project Structure

```text
/ (project root)
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── ...other folders/files...
└── package.json
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/ (project root)
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── ...other folders/files...
└── package.json
```

**Test File Collocation:**

- Unit and component test files are placed next to the files they test (e.g., `HelloWorld.ts` and `HelloWorld.test.ts` in the same folder)
- No central test directory; tests are distributed throughout the codebase

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Common Commands

Run these from the project root:

| Command                    | Action                                          |
| :------------------------- | :---------------------------------------------- |
| `corepack enable`          | Enable the Yarn version declared by the project |
| `yarn install --immutable` | Install dependencies from the lockfile          |
| `yarn dev`                 | Start local dev server at `localhost:4321`      |
| `yarn check`               | Run Astro and TypeScript checks                 |
| `yarn lint`                | Run ESLint and Stylelint                        |
| `yarn test`                | Run all Vitest tests (collocated with source)   |
| `yarn build`               | Build production site to `./dist/`              |
| `yarn preview`             | Preview production build locally                |
| `yarn astro ...`           | Run Astro CLI commands                          |
| `yarn astro -- --help`     | Get help using the Astro CLI                    |

## Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [GitHub Copilot](https://github.com/features/copilot)
