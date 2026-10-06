<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the imported website content in TanStack file routes, with shared navigation and footer in the root layout, because all pages must share the same branding.
- Use a single LogoBadge image component and a locally padded favicon derived from its source, because circular proportions and consistent branding must hold across every placement.
- Store imported website media as CDN asset pointers and resolve legacy image paths through the shared SiteImage adapter, because the imported content should remain unchanged without bundling binary media.
