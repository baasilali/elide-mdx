import { Button } from './ui/button'
import { ArrowRight, Terminal, Package, Sparkles } from 'lucide-react'

export function DocContent() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="not-prose mb-12">
        <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">
          {'Getting Started with Our Platform'}
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          {'Build powerful applications with our comprehensive documentation and guides.'}
        </p>
      </div>

      <section id="introduction" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-primary" />
          {'Introduction'}
        </h2>
        <p className="text-foreground/90 leading-relaxed mb-4">
          {'Welcome to our technical documentation. This guide will help you understand the core concepts and get you up and running quickly. Our platform is designed to be intuitive while providing powerful features for developers of all skill levels.'}
        </p>
        <p className="text-foreground/90 leading-relaxed">
          {'Whether you\'re building a small prototype or a large-scale application, our tools and APIs are built to scale with your needs. Let\'s dive into the fundamentals and explore what makes our platform unique.'}
        </p>
      </section>

      <section id="quick-start" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Terminal className="h-8 w-8 text-primary" />
          {'Quick Start'}
        </h2>
        <p className="text-foreground/90 leading-relaxed mb-6">
          {'Get started in less than 5 minutes with our quick start guide. Follow these simple steps to create your first project:'}
        </p>

        <div className="not-prose bg-card/50 border border-border rounded-lg p-6 mb-6 backdrop-blur-sm">
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                {'1'}
              </span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{'Install the CLI'}</h3>
                <code className="text-sm text-secondary bg-background/50 px-3 py-1 rounded border border-border inline-block">
                  {'npm install -g @platform/cli'}
                </code>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                {'2'}
              </span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{'Create a new project'}</h3>
                <code className="text-sm text-secondary bg-background/50 px-3 py-1 rounded border border-border inline-block">
                  {'platform init my-project'}
                </code>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                {'3'}
              </span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{'Start developing'}</h3>
                <code className="text-sm text-secondary bg-background/50 px-3 py-1 rounded border border-border inline-block">
                  {'platform dev'}
                </code>
              </div>
            </li>
          </ol>
        </div>

        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300"
        >
          {'View Full Tutorial'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      <section id="installation" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Package className="h-8 w-8 text-primary" />
          {'Installation'}
        </h2>
        <p className="text-foreground/90 leading-relaxed mb-6">
          {'Our platform supports multiple package managers and installation methods. Choose the one that works best for your workflow:'}
        </p>

        <div className="not-prose space-y-4 mb-6">
          <div className="bg-card/50 border border-border rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">{'NPM'}</h3>
            <code className="text-foreground bg-background/50 px-4 py-2 rounded border border-border block">
              {'npm install @platform/core @platform/cli'}
            </code>
          </div>

          <div className="bg-card/50 border border-border rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">{'Yarn'}</h3>
            <code className="text-foreground bg-background/50 px-4 py-2 rounded border border-border block">
              {'yarn add @platform/core @platform/cli'}
            </code>
          </div>

          <div className="bg-card/50 border border-border rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">{'pnpm'}</h3>
            <code className="text-foreground bg-background/50 px-4 py-2 rounded border border-border block">
              {'pnpm add @platform/core @platform/cli'}
            </code>
          </div>
        </div>
      </section>

      <section id="architecture" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-4">{'Architecture'}</h2>
        <p className="text-foreground/90 leading-relaxed mb-4">
          {'Our platform follows a modern, modular architecture that emphasizes separation of concerns and scalability. The core is built around three main pillars:'}
        </p>
        <ul className="space-y-2 text-foreground/90">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">{'•'}</span>
            <span>{'<strong>Core Engine</strong> - Handles data processing and business logic'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">{'•'}</span>
            <span>{'<strong>API Layer</strong> - RESTful and GraphQL interfaces for external communication'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">{'•'}</span>
            <span>{'<strong>Plugin System</strong> - Extensible architecture for custom functionality'}</span>
          </li>
        </ul>
      </section>

      <section id="components" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-4">{'Components'}</h2>
        <p className="text-foreground/90 leading-relaxed mb-4">
          {'Our component library provides pre-built, accessible UI elements that integrate seamlessly with your application. Each component is fully customizable and follows best practices for performance and accessibility.'}
        </p>
        <div className="not-prose grid gap-4 md:grid-cols-2 mt-6">
          <div className="bg-card/50 border border-border rounded-lg p-6 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
            <h3 className="font-semibold text-foreground mb-2">{'Button Component'}</h3>
            <p className="text-sm text-muted-foreground mb-4">{'Versatile button with multiple variants and states'}</p>
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
            >
              {'Example Button'}
            </Button>
          </div>
          <div className="bg-card/50 border border-border rounded-lg p-6 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300">
            <h3 className="font-semibold text-foreground mb-2">{'Card Component'}</h3>
            <p className="text-sm text-muted-foreground">{'Flexible container for content grouping'}</p>
          </div>
        </div>
      </section>

      <section id="api-reference" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-4">{'API Reference'}</h2>
        <p className="text-foreground/90 leading-relaxed">
          {'Comprehensive API documentation covering all endpoints, methods, and data structures. Our API is RESTful, well-documented, and designed with developer experience in mind.'}
        </p>
      </section>

      <section id="security" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-4">{'Security'}</h2>
        <p className="text-foreground/90 leading-relaxed">
          {'Security is our top priority. We implement industry-standard practices including encryption at rest and in transit, regular security audits, and compliance with major security frameworks.'}
        </p>
      </section>

      <section id="configuration" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-4">{'Configuration'}</h2>
        <p className="text-foreground/90 leading-relaxed">
          {'Customize your platform experience with our flexible configuration system. Environment variables, config files, and runtime settings can all be adjusted to suit your needs.'}
        </p>
      </section>

      <section id="best-practices" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-4">{'Best Practices'}</h2>
        <p className="text-foreground/90 leading-relaxed">
          {'Follow these recommended practices to get the most out of our platform while maintaining code quality, performance, and security standards.'}
        </p>
      </section>
    </article>
  )
}
