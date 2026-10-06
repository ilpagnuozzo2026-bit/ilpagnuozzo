import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { siteImages } from '@/lib/site-images'

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }

export default function SiteImage({ src, fill, priority, className, ...props }: ImageProps) {
  const imageSrc = src ? (siteImages[src] ?? src) : undefined
  return <img {...props} src={imageSrc} loading={priority ? 'eager' : 'lazy'} className={cn(fill && 'absolute inset-0 h-full w-full', className)} />
}