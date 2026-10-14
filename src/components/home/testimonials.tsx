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
  { src: clip1.url, poster: poster1.url, caption: 'Manager di Pub – Salerno' },
  { src: clip2.url, poster: poster2.url, caption: 'Titolare di Paninoteca – Napoli' },
  { src: clip3.url, poster: poster3.url, caption: 'Titolare di Rosticceria – Caserta' },
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
          <span className="sr-only">Guarda la testimonianza: {video.caption}</span>
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
          {'I nostri clienti lo adorano: “Il pane che ha rivoluzionato il mio locale”'}
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14">
        <ul className="grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <li key={v.caption} className="text-center">
              <VideoCard video={v} />
              <p className="mt-3 text-sm text-espresso">{v.caption}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 flex items-center justify-center gap-2 font-bold text-espresso">
          <Check className="size-5 text-brand" aria-hidden="true" />
          {"Campione gratuito senza impegno d'acquisto"}
        </p>
      </div>
    </section>
  )
}
