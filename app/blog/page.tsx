import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BlogGalleryFiltered from '@/components/BlogGalleryFiltered'
import CTASection from '@/components/CTASection'
import { BLOG_POSTS } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: 'Blog: Tudo sobre Fotografia de Formatura Escolar',
  description:
    'Dicas, guias e informações sobre fotografia de formatura escolar em São Paulo: orçamento, escolha de fotógrafo, ensaios, álbum digital e cobertura por região.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/blog/' },
}

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog/' }]} />

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow mb-2">Blog</p>
          <h1 className="font-sans text-4xl font-bold md:text-5xl">
            Tudo sobre <span className="gold-italic">Fotografia de Formatura</span>
          </h1>
          <p className="mt-4 text-textMuted">
            Guias, dicas e informações para a comissão de formatura organizar a cobertura
            fotográfica da turma em São Paulo, do orçamento à entrega das fotos.
          </p>
        </div>
      </section>

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-7xl px-6">
          <BlogGalleryFiltered posts={BLOG_POSTS} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
