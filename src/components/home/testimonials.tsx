'use client'

import { useRef, useState } from 'react'
import { Check, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

import clip1 from '@/assets/video-partner-1.mp4.asset.json'
import clip2 from '@/assets/video-partner-2.mp4.asset.json'
import clip3 from '@/assets/video-partner-3.mp4.asset.json'
import poster1 from '@/assets/video-partner-1.jpg.asset.json'
import poster2 from '@/assets/video-partner-2.jpg.asset.json'
import poster3 from '@/assets/video-partner-3.jpg.asset.json'

const videos = [
  {
    src: clip1.url,
    poster: poster1.url,
    subtitle: 'Personale di Distribuzione Alimentare – Portici, Napoli',
    quote: 'È fresco e senza conservanti!',
  },
  {
    src: clip2.url,
    poster: poster2.url,
    subtitle: 'Personale di Caseificio e Panificio – Pomigliano, Napoli',
    quote:
      "Abbiamo scelto l'antica ricetta del Panuozzo Napoletano: un prodotto fresco, fatto con lievito madre e senza conservanti, per soddisfare tutti i nostri clienti.",
  },
  {
    src: clip3.url,
    poster: poster3.url,
    subtitle: 'Titolare di Paninoteca – Napoli',
    quote: 'Il numero uno di tutti i panuozzi!',
  },
]

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const start = () => {
    const el = videoRef.current
    if (!el) return
    void el.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    )
  }

  const stop = () => {
    const el = videoRef.current
    if (!el) return
    el.load()
    setPlaying(false)
  }

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-xs overflow-hidden rounded-2xl shadow-lg md:max-w-none">
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        preload="none"
        playsInline
        controls={playing}
        onEnded={stop}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!playing && (
        <Button
          type="button"
          variant="ghost"
          onClick={start}
          className="group absolute inset-0 h-auto w-full p-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <span className="absolute inset-0 bg-espresso/15 transition-colors group-hover:bg-espresso/25" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-espresso/55 ring-4 ring-primary-foreground/30 transition-transform group-hover:scale-110">
              <Play className="ml-1 size-7 fill-primary-foreground text-primary-foreground" aria-hidden="true" />
            </span>
          </span>
          <span className="sr-only">Guarda la testimonianza: {video.subtitle}</span>
        </Button>
      )}
    </div>
  )
}

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title">
      <div className="bg-gradient-to-r from-surface-b52d14 via-surface-c9461a to-surface-de6a17 px-5 py-12 text-center text-primary-foreground">
        <h2 id="testimonials-title" className="text-balance font-serif text-3xl font-bold md:text-5xl">
          Cosa dicono i nostri partner del Panuozzo
        </h2>
        <p className="mt-3 italic text-primary-foreground/90">
          {'I nostri clienti lo adorano: \u201cIl pane che ha rivoluzionato il mio locale\u201d'}
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14">
        <ul className="grid items-stretch gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <li key={v.subtitle} className="flex">
              <figure className="flex h-full w-full flex-col text-center">
                <VideoCard video={v} />
                <figcaption className="mt-6 flex min-h-10 items-start justify-center px-2 pb-2 text-sm font-semibold leading-snug text-espresso">
                  {v.subtitle}
                </figcaption>
                <blockquote className="mt-2 border-t border-espresso/10 pt-4 text-pretty text-base font-medium italic leading-relaxed text-espresso/90 md:text-lg">
                  "{v.quote}"
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
        <p className="mt-14 flex items-center justify-center gap-3 text-base font-bold text-espresso md:mt-20 md:text-lg">
          <Check className="size-6 shrink-0 text-brand" aria-hidden="true" />
          {"Campione gratuito senza impegno d'acquisto"}
        </p>
      </div>
    </section>
  )
}
