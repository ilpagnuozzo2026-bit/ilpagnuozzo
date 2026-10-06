import { createFileRoute } from '@tanstack/react-router'
import { HomeHero } from '@/components/home/hero'
import { Pillars } from '@/components/home/pillars'
import { Testimonials } from '@/components/home/testimonials'

function HomePage() {
  return (
    <>
      <HomeHero />
      <Pillars />
      <Testimonials />
    </>
  )
}

const pageMeta = { title: 'Il Pagnuozzo', description: "L’Autentico Panuozzo Napoletano per il tuo locale, con lievito madre e 48 ore di lievitazione naturale." }
export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({ meta: [
    { title: pageMeta.title === 'Il Pagnuozzo' ? pageMeta.title : `${pageMeta.title} | Il Pagnuozzo` },
    { name: 'description', content: pageMeta.description },
    { property: 'og:title', content: pageMeta.title },
    { property: 'og:description', content: pageMeta.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
})
