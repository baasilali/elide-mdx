# MDX Documentation Setup - Complete Guide

## What Was Built

A complete MDX-based documentation system with:

- **16 example MDX documentation pages** covering an Elide-inspired framework
- **Dynamic routing** that automatically generates pages from MDX files
- **Type-safe configuration** defining the docs structure
- **React component integration** allowing UI components in Markdown
- **Automatic navigation** with sidebar generated from config

## Architecture Overview

```
User Request
     |
     v
/docs/[slug] (Dynamic Route)
     |
     v
getDocBySlug(slug) - Load MDX
     |
     v
Compile MDX with React Components
     |
     v
Render in DocsLayout
```

## File System Structure

```
content/docs/              <- All your MDX files live here
  introduction.mdx
  quick-start.mdx
  ...

lib/
  docs-config.ts          <- Define your doc hierarchy HERE
  mdx.ts                  <- MDX utilities (don't touch often)

app/docs/[slug]/page.tsx  <- Dynamic route handler (don't modify)
```

## How to Add a New Doc Page

### Step 1: Create the MDX File

Create `content/docs/my-new-page.mdx`:

```mdx
---
title: "My New Page"
description: "Description of my page"
date: "2025-11-18"
---

import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'

# My New Page

Your content here...

<Alert>
  You can use React components!
</Alert>

<Button>Click me</Button>
```

### Step 2: Add to Navigation

Edit `lib/docs-config.ts` and add your page:

```typescript
import { YourIcon } from 'lucide-react'

export const docsConfig: DocSection[] = [
  {
    title: 'Your Section',
    items: [
      {
        title: 'My New Page',
        href: '/docs/my-new-page',
        slug: 'my-new-page',  // Must match filename without .mdx
        icon: YourIcon,
        description: 'Description of my page'
      }
    ]
  },
  // ... existing sections
]
```

### Step 3: That's It!

The page will automatically:
- Appear in the sidebar
- Be accessible at `/docs/my-new-page`
- Get proper metadata and SEO
- Be styled consistently

## Available React Components

All components in `components/ui/` can be used in MDX:

### Alert
```mdx
<Alert>
  <strong>Note:</strong> Important information
</Alert>
```

### Button
```mdx
<Button>Click me</Button>
```

### Card
```mdx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Tabs
```mdx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content for tab 1
  </TabsContent>
  <TabsContent value="tab2">
    Content for tab 2
  </TabsContent>
</Tabs>
```

### Badge
```mdx
<Badge>New</Badge>
```

### Separator
```mdx
<Separator />
```

## MDX Features

### Standard Markdown

All standard Markdown works:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- List item 1
- List item 2

1. Numbered item 1
2. Numbered item 2

[Link text](url)

![Image alt](url)

> Blockquote

`inline code`

​```typescript
code block
​```
```

### Frontmatter

Required at the top of every MDX file:

```yaml
---
title: "Required - Page title"
description: "Recommended - Short description"
date: "Optional - ISO date"
author: "Optional - Author name"
tags: ["optional", "tags"]
---
```

### Importing Components

Import at the top of your MDX file:

```mdx
---
title: "My Page"
---

import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'
import { CustomComponent } from '@/components/custom'

# Content starts here
```

## Configuration Reference

### lib/docs-config.ts Structure

```typescript
export interface DocItem {
  title: string           // Display name in sidebar
  href: string           // Full URL path (/docs/slug)
  slug: string           // Filename without .mdx
  icon?: LucideIcon      // Optional icon component
  description?: string   // Optional description
}

export interface DocSection {
  title: string          // Section heading in sidebar
  items: DocItem[]       // Pages in this section
}

export const docsConfig: DocSection[] = [...]
```

### lib/mdx.ts API

Functions you can use:

```typescript
// Get a document by slug
const { content, frontmatter } = await getDocBySlug('introduction')

// Get all document slugs
const slugs = getAllDocSlugs()  // ['introduction', 'quick-start', ...]

// Get just the frontmatter
const frontmatter = getDocFrontmatter('introduction')

// Get all docs with frontmatter
const allDocs = getAllDocs()
```

## Styling Your Content

### Automatic Styling

All MDX content is wrapped in `.mdx-content` class which provides:

- Proper heading hierarchy and spacing
- Styled code blocks
- List styling
- Table styling
- Link colors
- Blockquote styling

### Custom Styling

Add classes to components in MDX:

```mdx
<div className="grid gap-4 md:grid-cols-2">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
</div>
```

### Not-Prose

Use `not-prose` class to disable prose styling:

```mdx
<div className="not-prose">
  <CustomComponent />
</div>
```

## Tips and Tricks

### 1. Code Blocks with Language

```mdx
​```typescript
function hello() {
  console.log('Hello')
}
​```
```

### 2. Inline JSX

```mdx
Regular text with <Badge>inline component</Badge> inside.
```

### 3. Multi-line Components

```mdx
<Alert>
  You can use **markdown** inside JSX components!
  
  - Even lists
  - Work fine
</Alert>
```

### 4. Component Props

```mdx
<Button variant="destructive" size="lg">
  Delete
</Button>
```

### 5. Links to Other Docs

```mdx
See the [Quick Start](/docs/quick-start) guide for more info.
```

## Common Patterns

### Tutorial Page

```mdx
---
title: "Tutorial: Building X"
description: "Learn how to build X step by step"
---

# Tutorial: Building X

In this tutorial, you'll learn...

## Prerequisites

- Node.js 18+
- Basic TypeScript knowledge

## Step 1: Setup

​```bash
npm install my-package
​```

<Alert>
  <strong>Tip:</strong> Use the latest version
</Alert>

## Step 2: Configure

...
```

### API Reference Page

```mdx
---
title: "API Reference"
description: "Complete API documentation"
---

# API Reference

## Functions

### myFunction(param1, param2)

Description of function.

**Parameters:**
- `param1` (string) - Description
- `param2` (number) - Description

**Returns:** Description

**Example:**
​```typescript
const result = myFunction('hello', 42)
​```
```

### Tabbed Content

```mdx
<Tabs defaultValue="npm">
  <TabsList>
    <TabsTrigger value="npm">npm</TabsTrigger>
    <TabsTrigger value="yarn">yarn</TabsTrigger>
    <TabsTrigger value="pnpm">pnpm</TabsTrigger>
  </TabsList>
  <TabsContent value="npm">
​```bash
npm install package
​```
  </TabsContent>
  <TabsContent value="yarn">
​```bash
yarn add package
​```
  </TabsContent>
  <TabsContent value="pnpm">
​```bash
pnpm add package
​```
  </TabsContent>
</Tabs>
```

## Troubleshooting

### Page Not Showing Up

1. Check filename matches slug in `docs-config.ts`
2. Verify file is in `content/docs/`
3. Ensure frontmatter is valid YAML
4. Restart dev server

### Components Not Working

1. Check import path is correct
2. Verify component exists in `components/ui/`
3. Check component is exported
4. Ensure MDX file has proper imports

### Styling Issues

1. Check Tailwind classes are valid
2. Use `not-prose` for custom layouts
3. Verify dark mode classes are compatible

## Next Steps

1. **Customize the hierarchy** in `lib/docs-config.ts`
2. **Replace example MDX files** with your actual docs
3. **Add custom components** as needed
4. **Update styling** in `app/globals.css`
5. **Deploy** to Vercel or your preferred platform

## Resources

- Next.js Documentation: https://nextjs.org/docs
- MDX Documentation: https://mdxjs.com
- Tailwind CSS: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com

