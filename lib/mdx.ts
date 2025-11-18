import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import matter from 'gray-matter'

// Import UI components that can be used in MDX
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const DOCS_PATH = path.join(process.cwd(), 'content/docs')

// Define all React components available in MDX files
const mdxComponents = {
  Button,
  Alert,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Badge,
  Separator,
}

export interface DocFrontmatter {
  title: string
  description?: string
  date?: string
  author?: string
  tags?: string[]
  [key: string]: any
}

export interface DocContent {
  content: React.ReactElement
  frontmatter: DocFrontmatter
}

/**
 * Get a document by its slug
 */
export async function getDocBySlug(slug: string): Promise<DocContent> {
  const filePath = path.join(DOCS_PATH, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Document not found: ${slug}`)
  }
  
  const source = fs.readFileSync(filePath, 'utf8')
  
  const { content, frontmatter } = await compileMDX<DocFrontmatter>({
    source,
    options: { 
      parseFrontmatter: true,
    },
    components: mdxComponents,
  })
  
  return { 
    content, 
    frontmatter: frontmatter as DocFrontmatter 
  }
}

/**
 * Get all available document slugs
 */
export function getAllDocSlugs(): string[] {
  if (!fs.existsSync(DOCS_PATH)) {
    return []
  }
  
  const files = fs.readdirSync(DOCS_PATH)
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
}

/**
 * Get frontmatter for a specific document without compiling the MDX
 */
export function getDocFrontmatter(slug: string): DocFrontmatter {
  const filePath = path.join(DOCS_PATH, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Document not found: ${slug}`)
  }
  
  const source = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(source)
  
  return data as DocFrontmatter
}

/**
 * Get all documents with their frontmatter
 */
export function getAllDocs(): Array<{ slug: string; frontmatter: DocFrontmatter }> {
  const slugs = getAllDocSlugs()
  return slugs.map(slug => ({
    slug,
    frontmatter: getDocFrontmatter(slug)
  }))
}

