# Game Sites Web Project

A Next.js-based web application that serves as a platform for hosting and playing HTML5 games. The site features a collection of classic and modern browser games across various categories.

## Project Structure

The project is organized as follows:

- `web/` - Main web project directory
  - `src/` - Source code
    - `app/` - Next.js App Router structure with pages and layouts
    - `components/` - Reusable React components
    - `data/` - Data files including game information
    - `hooks/` - Custom React hooks
    - `i18n/` - Internationalization (English and Chinese)
    - `pages/` - Additional page components
    - `utils/` - Utility functions
  - `public/` - Static assets
    - `html5/` - HTML5 games collection (45+ games)
  - `.next/` - Next.js build output (generated)

## Features

- **HTML5 Game Collection**: 45+ HTML5 games across multiple categories
- **Multilingual Support**: English and Chinese language support
- **Responsive Design**: Works across desktop and mobile devices
- **Game Categories**: Browse games by categories like puzzle, arcade, action, etc.
- **Game Statistics**: Track ratings and play counts
- **Optimized for Cloudflare**: Deployment configuration for Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd web
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

## Development

Start the development server with Turbopack for faster builds:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building

Build the application for production:

```bash
npm run build
# or
yarn build
```

## Testing

Run ESLint to check for code quality and formatting issues:

```bash
npm run lint
# or
yarn lint
```

## Deployment

The project is configured for Cloudflare Pages deployment with a standalone output configuration.

```bash
npm run deploy
# or
yarn deploy
```

This uses the `deploy-to-cloudflare.js` script for deployment.

## Technologies

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **ESLint**: Code linting and quality control
- **Turbopack**: Development server for fast builds

## Internationalization

The application supports English and Chinese languages through a custom i18n implementation using React Context.

Language preferences are stored in the browser's localStorage and can be switched by the user through the language switcher component.

## Game Integration

HTML5 games are hosted in the `/public/html5/` directory, with each game in its own subdirectory. Games are integrated via:

1. Adding game files to the public directory
2. Adding game metadata to the `src/data/games.ts` file
3. Games are rendered in iframes when visited

## Contributing

1. Fork the repository
2. Create a new feature branch
3. Make your changes
4. Submit a pull request

## License

[Specify license information here]