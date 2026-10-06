import { createFileRoute } from '@tanstack/react-router'
import { TargetSection } from '@/components/a-chi/target-section'
import { SampleSection } from '@/components/a-chi/sample-section'



function AChiPage() {
  return (
    <>
      <TargetSection />
      <SampleSection />
    </>
  )
}

const pageMeta = {
  title: 'A chi è dedicato',
  description:
    'Il Pagnuozzo è pensato per pub, paninoteche, ristoranti e distributori alimentari. Richiedi il campione gratuito per il tuo locale.',
}
export const Route = createFileRoute('/a-chi-e-dedicato')({
  component: AChiPage,
  head: () => ({ meta: [
    { title: pageMeta.title === 'Il Pagnuozzo' ? pageMeta.title : `${pageMeta.title} | Il Pagnuozzo` },
    { name: 'description', content: pageMeta.description },
    { property: 'og:title', content: pageMeta.title },
    { property: 'og:description', content: pageMeta.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
})
