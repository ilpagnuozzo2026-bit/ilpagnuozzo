import logoAsset from '@/assets/ilpagnuozzo_logo_transparent.png.asset.json'
import { cn } from '@/lib/utils'

export function LogoBadge({ className }: { className?: string }) {
  return <img src={logoAsset.url} alt="Il Pagnuozzo – Antica Ricetta Panuozzo Napoletano" width={56} height={56} className={cn('aspect-square shrink-0 rounded-full object-contain ring-1 ring-border', className)} />
}
