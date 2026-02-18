# Vue Resume Site

A modern, responsive resume website built with Vue.js and Vuetify.

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Resume Download** - Built-in button to download your resume as PDF
- **Skills Showcase** - Display your technical and professional skills with organized chips
- **Social Media Links** - Easy integration of social media profiles
- **JSON-Driven Content** - Manage your resume and skills data via JSON files
- **Modern UI** - Clean, professional design powered by Vuetify

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development
- **Vuetify** - Material Design UI components
- **Vite** - Fast build tool and dev server
- **Pinia** - State management
- **Vue Router** - Client-side routing

## Project Structure

```
src/
├── components/        # Reusable Vue components
├── pages/            # Page components (routes)
├── layouts/          # Layout wrapper components
├── stores/           # Pinia state management
├── router/           # Vue Router configuration
├── plugins/          # Vue plugins (Vuetify, etc.)
├── assets/           # Static assets and data files
│   ├── resume.json   # Resume content data
│   └── skills.json   # Skills data
└── styles/           # Global styles and SCSS settings
```

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Starts the dev server at `http://localhost:5173`

### Build

```bash
pnpm build
```

Generates optimized production build in the `dist/` directory

## Configuration

### Resume Data

Edit `src/assets/resume.json` to update your resume content including work experience, education, and achievements.

### Skills

Edit `src/assets/skills.json` to manage your technical and professional skills displayed on the site.

### Styling

Customize the site appearance in `src/styles/settings.scss` to match your personal brand.

## Components

- **SiteBase** - Main layout wrapper
- **SiteNavigation** - Navigation bar
- **ResumeBase** - Resume section container
- **ResumeSection** - Individual resume sections
- **SkillsList** - Skills display component
- **SkillChip** - Individual skill badge
- **AboutMe** - About section
- **SocialMedia** - Social media links
- **ResumeDownloadBtn** - PDF download button

// ...existing code...

## Available Commands

This project uses a Makefile for convenient command execution. Run `make help` to see all available commands.

### Common Commands

```bash
# Show all available commands
make help

# Start development server
make dev

# Build production bundle
make build

# Preview production build locally (opens in browser)
make preview

# Run linter
make lint

# Format code
make fmt

# Run tests
make test

# Clean build artifacts and caches
make clean
```

### Node Version

The project uses Node.js v22. The `make dev` command automatically sets the correct Node version using nvm before starting the development server.

To manually set the Node version:

```bash
make version
```

## License

[MIT license](https://mit-license.org)

## Author

Manuel Saleta
