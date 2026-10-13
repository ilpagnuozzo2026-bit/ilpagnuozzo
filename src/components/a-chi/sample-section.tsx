import { CircleCheck } from 'lucide-react'
import { SampleForm } from './sample-form'

const benefits: { title: string; text?: string }[] = [
  { title: 'Lievito madre curato secondo la tradizione artigianale' },
  { title: 'Zero conservanti artificiali', text: 'Come il pane di una volta.' },
  { title: 'Pronto in 3 step', text: 'Riscaldare, farcire, servire.' },
]

export function SampleSection() {
  return (
    <section
      id="form"
      className="scroll-mt-24 bg-gradient-to-b from-surface-f3e7d3 to-surface-efe0c8"
      aria-labelledby="sample-title"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-surface-dcc7a6 bg-surface-f8efe0 px-4 py-1.5 text-xs text-espresso">
            <CircleCheck className="size-4 text-surface-b07a2a" aria-hidden="true" />
            Campione gratuito per operatori HORECA
          </span>
          <h2
            id="sample-title"
            className="mt-6 text-balance font-serif text-3xl font-bold leading-tight text-espresso md:text-4xl"
          >
            Il tuo locale merita un prodotto che nessun concorrente può copiare.
          </h2>
          <p className="mt-5 text-pretty text-sm text-muted-foreground">
            Richiedi il campione gratuito del Panuozzo Napoletano. Zero impegno, zero costi.
          </p>
          <ul className="mt-8 space-y-5">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-4">
                <CircleCheck className="mt-1 size-6 shrink-0 text-surface-b07a2a" aria-hidden="true" />
                <div>
                  <p className="font-serif text-lg font-bold text-espresso">{b.title}</p>
                  {b.text ? (
                    <p className="text-sm text-muted-foreground">{b.text}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <SampleForm />
      </div>
    </section>
  )
}
