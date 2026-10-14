'use client'

import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

import clip1 from '@/assets/video-partner-1.mp4.asset.json'
import clip2 from '@/assets/video-partner-2.mp4.asset.json'
import clip3 from '@/assets/video-partner-3.mp4.asset.json'
import poster1 from '@/assets/video-partner-1.jpg.asset.json'
import poster2 from '@/assets/video-partner-2.jpg.asset.json'
import poster3 from '@/assets/video-partner-3.jpg.asset.json'

type Clip = {
  src: string
  poster: string
  label: string
}

const clips: Clip[] = [
  {
    src: clip1.url,
    poster: poster1.url,
    label: 'Un partner che presenta il panuozzo confezionato nel suo punto vendita',
  },
  {
    src: clip2.url,
    poster: poster2.url,
    label: 'Un partner che mostra il panuozzo sugli scaffali del suo negozio',
  },
  {
    src: clip3.url,
    poster: poster3.url,
    label: 'Un partner che mostra il panuozzo nel suo banco',
  },
]

function VideoCard({ clip }: { clip: Clip }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const start = () => {
    const video = videoRef.current
    if (!video) return
    void video.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    )
  }

  const stop = () => {
    const video = videoRef.current
    if (!video) return
    video.load()
    setPlaying(false)
  }

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-xs overflow-hidden rounded-2xl bg-espresso shadow-lg shadow-espresso/10 ring-1 ring-border/60 md:max-w-none">
      <video
        ref={videoRef}
        src={clip.src}
        poster={clip.poster}
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
          <span className="sr-only">Riproduci il video: {clip.label}</span>
        </Button>
      )}
    </div>
  )
}

export function PartnerVideos() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="partner-videos-title">
      <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-brand">
        Partner B2B
      </p>
      <h2
        id="partner-videos-title"
        className="mt-3 text-balance text-center font-serif text-3xl font-bold text-espresso md:text-5xl"
      >
        Chi lo serve ogni giorno, lo racconta così
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-muted-foreground">
        Tre video girati nei locali che hanno scelto il nostro Panuozzo Napoletano.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {clips.map((clip) => (
          <VideoCard key={clip.src} clip={clip} />
        ))}
      </div>
    </section>
  )
}
