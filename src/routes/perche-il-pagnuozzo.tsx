import { createFileRoute } from '@tanstack/react-router'
import { PercheHero } from '@/components/perche/hero'
import { LievitoSection } from '@/components/perche/lievito'
import { StorySection } from '@/components/perche/story'



function PerchePage() {
  return (
    <div className="bg-surface-f6ede1">
      <PercheHero />
      <LievitoSection />
      <StorySection />
    </div>
  )
}

const pageMeta = {
  title: 'Perché Il Pagnuozzo',
  description:
    'Lievito madre rinnovato da 70 anni e 48 ore di lievitazione naturale: scopri perché la differenza si sente al primo morso.',
}
export const Route = createFileRoute('/perche-il-pagnuozzo')({
  component: PerchePage,
  head: () => ({ meta: [
    { title: pageMeta.title === 'Il Pagnuozzo' ? pageMeta.title : `${pageMeta.title} | Il Pagnuozzo` },
    { name: 'description', content: pageMeta.description },
    { property: 'og:title', content: pageMeta.title },
    { property: 'og:description', content: pageMeta.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
})
