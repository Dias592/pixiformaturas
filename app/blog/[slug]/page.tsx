import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import BlogContent from '@/components/BlogContent'
import BlogCard from '@/components/BlogCard'
import CTASection from '@/components/CTASection'
import PlaceholderImage from '@/components/PlaceholderImage'
import SchemaOrg from '@/components/SchemaOrg'
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from '@/lib/blogPosts'
import { articleSchema } from '@/lib/schema'
import { BUSINESS } from '@/lib/constants'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${BUSINESS.url}/blog/${post.slug}/` },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post)
  const schema = articleSchema({
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    url: `${BUSINESS.url}/blog/${post.slug}/`,
  })

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: post.title, href: `/blog/${post.slug}/` },
        ]}
      />

      <article className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-2">{post.category}</p>
          <h1 className="font-sans text-4xl font-bold md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-textMuted">
            Publicado em{' '}
            {new Date(post.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </p>

          <div className="mt-8">
            <PlaceholderImage alt={post.coverAlt} aspect="aspect-[16/9]" className="w-full" />
          </div>

          <div className="mt-8">
            <BlogContent blocks={post.content} />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-bgCard py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 font-sans text-3xl font-bold">
              Leia <span className="gold-italic">também</span>
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />

      <SchemaOrg schema={schema} />
    </>
  )
}
