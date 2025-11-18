# Quick Start - Writing Documentation

## The Simple Version

### To add a new documentation page:

1. **Create an MDX file** in `content/docs/`:
   ```bash
   touch content/docs/my-topic.mdx
   ```

2. **Add frontmatter and content**:
   ```mdx
   ---
   title: "My Topic"
   description: "Description here"
   ---
   
   # My Topic
   
   Your content here...
   ```

3. **Add to navigation** in `lib/docs-config.ts`:
   ```typescript
   {
     title: 'My Topic',
     href: '/docs/my-topic',
     slug: 'my-topic',
     icon: IconName
   }
   ```

4. **Done!** Visit `/docs/my-topic`

## File Structure You Care About

```
content/docs/           <- Write your .mdx files here
lib/docs-config.ts     <- Update navigation here
```

That's it!

## Using React Components

Import at the top of your MDX:

```mdx
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'

<Alert>This is an alert!</Alert>
<Button>Click me</Button>
```

## Common Components

- `Alert` - Info boxes
- `Button` - Buttons
- `Card` - Content cards
- `Tabs` - Tabbed content
- `Badge` - Labels

See `references/MDX_SETUP_GUIDE.md` for complete guide.

## Example MDX File

```mdx
---
title: "Getting Started"
description: "Learn the basics"
---

import { Alert } from '@/components/ui/alert'

# Getting Started

Welcome! Here's how to begin.

<Alert>
  <strong>Tip:</strong> Start with the basics
</Alert>

## Installation

​```bash
npm install my-package
​```

## Usage

​```typescript
import { something } from 'package'

something()
​```
```

## That's All You Need!

For detailed information, see:
- `references/MDX_SETUP_GUIDE.md` - Complete guide
- `README.md` - Project overview

