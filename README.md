# Elide MDX Documentation

A modern documentation site built with Next.js, React, and MDX, featuring an Elide-inspired structure.

## Features

- **MDX Support**: Write documentation in Markdown with React components
- **Dynamic Routing**: Automatic page generation from MDX files
- **Type-Safe Configuration**: TypeScript-powered docs configuration
- **Beautiful UI**: Modern, responsive design with dark mode
- **Component Integration**: Use React components directly in MDX
- **Fast Performance**: Server-side rendering with Next.js

## Project Structure

```
elide-mdx/
├── app/
│   ├── docs/[slug]/page.tsx    # Dynamic doc pages
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page (redirects to docs)
├── components/
│   ├── docs-layout.tsx          # Documentation layout
│   ├── docs-sidebar.tsx         # Navigation sidebar
│   ├── navbar.tsx               # Top navigation
│   └── ui/                      # Reusable UI components
├── content/
│   └── docs/                    # MDX documentation files
│       ├── introduction.mdx
│       ├── quick-start.mdx
│       ├── installation.mdx
│       └── ...
├── lib/
│   ├── docs-config.ts           # Documentation structure
│   ├── mdx.ts                   # MDX utilities
│   └── utils.ts                 # Utility functions
└── next.config.mjs              # Next.js configuration
```

## Getting Started

### Installation

Install dependencies:

```bash
bun install
# or
npm install
# or
pnpm install
```

### Development

Run the development server:

```bash
bun dev
# or
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your documentation.

### Build

Create a production build:

```bash
bun run build
# or
npm run build
# or
pnpm build
```

## Writing Documentation

### Creating a New Doc

1. Create a new `.mdx` file in `content/docs/`:

```mdx
---
title: "Your Page Title"
description: "A brief description of your page"
date: "2025-11-18"
---

# Your Page Title

Your content here...
```

2. Add the page to `lib/docs-config.ts`:

```typescript
{
  title: 'Your Section',
  items: [
    {
      title: 'Your Page',
      href: '/docs/your-page',
      slug: 'your-page',
      icon: YourIcon,
      description: 'Page description'
    }
  ]
}
```

### Using React Components

Import and use React components in your MDX:

```mdx
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'

# My Page

<Alert>
  <strong>Note:</strong> This is an alert component!
</Alert>

<Button>Click me</Button>
```

### Available Components

All components in `components/ui/` are available in MDX:

- `Alert` - Display important information
- `Button` - Interactive buttons
- `Card` - Content containers
- `Tabs` - Tabbed content
- `Badge` - Labels and tags
- And many more...

## Documentation Configuration

### Structure

The documentation structure is defined in `lib/docs-config.ts`:

```typescript
export const docsConfig: DocSection[] = [
  {
    title: 'Section Name',
    items: [
      {
        title: 'Page Title',
        href: '/docs/page-slug',
        slug: 'page-slug',
        icon: IconComponent,
        description: 'Page description'
      }
    ]
  }
]
```

### Frontmatter

Each MDX file should include frontmatter:

```yaml
---
title: "Page Title"          # Required
description: "Description"   # Recommended
date: "2025-11-18"          # Optional
author: "Author Name"        # Optional
tags: ["tag1", "tag2"]      # Optional
---
```

## Styling

### Global Styles

Global styles are in `app/globals.css`, including:

- Tailwind CSS configuration
- Dark mode styles
- MDX content styles
- Glow background effects

### MDX Content Styling

MDX content is automatically styled with the `.mdx-content` class:

- Headings with proper hierarchy
- Code blocks with syntax highlighting
- Tables, lists, and blockquotes
- Links and emphasis

### Custom Components

Create custom components in `components/` and import them in MDX:

```typescript
// components/custom-component.tsx
export function CustomComponent({ children }) {
  return <div className="custom-class">{children}</div>
}
```

```mdx
import { CustomComponent } from '@/components/custom-component'

<CustomComponent>
  Your content here
</CustomComponent>
```

## Technology Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **next-mdx-remote** - MDX processing
- **gray-matter** - Frontmatter parsing
- **Lucide React** - Icons

## Key Files

### `lib/mdx.ts`

Utilities for loading and processing MDX files:

- `getDocBySlug(slug)` - Load a specific document
- `getAllDocSlugs()` - Get all document slugs
- `getDocFrontmatter(slug)` - Get document metadata

### `lib/docs-config.ts`

Documentation structure and navigation:

- `docsConfig` - Main documentation structure
- `getAllDocSlugs()` - Get all configured slugs
- `getDocBySlug(slug)` - Get doc configuration

### `app/docs/[slug]/page.tsx`

Dynamic page component that:

- Generates static pages for all docs
- Loads MDX content
- Renders with proper layout
- Handles metadata

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
```

### Static Export

```bash
npm run build
npm run export
```

## Contributing

1. Create a new branch
2. Add or update MDX files in `content/docs/`
3. Update `lib/docs-config.ts` if needed
4. Test locally
5. Submit a pull request

## License

MIT License - See LICENSE file for details

