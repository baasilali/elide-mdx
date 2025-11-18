import { notFound } from 'next/navigation'
import { getDocBySlug, getAllDocSlugs } from '@/lib/mdx'
import { getDocBySlug as getDocConfig } from '@/lib/docs-config'
import { DocsLayout } from '@/components/docs-layout'

export async function generateStaticParams() {
  const slugs = getAllDocSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const { frontmatter } = await getDocBySlug(slug)
    return {
      title: `${frontmatter.title} | Docs`,
      description: frontmatter.description,
    }
  } catch {
    return {
      title: 'Not Found',
    }
  }
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const { content, frontmatter } = await getDocBySlug(slug)
    const docConfig = getDocConfig(slug)
    
    return (
      <DocsLayout>
        <article className="prose prose-invert max-w-none">
          <div className="not-prose mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p className="text-xl text-muted-foreground text-pretty">
                {frontmatter.description}
              </p>
            )}
          </div>
          
          <div className="mdx-content">
            {content}
          </div>
        </article>
      </DocsLayout>
    )
  } catch (error) {
    notFound()
  }
}

