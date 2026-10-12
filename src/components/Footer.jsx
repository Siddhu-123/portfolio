import { ExternalLink, FolderGit2 } from 'lucide-react'

const links = [
  { label: 'GitHub', url: 'https://github.com/Siddhu-123' },
  {
    label: 'Secret Password Generator',
    url: 'https://chromewebstore.google.com/detail/secret-password-generator/mfgnlfigpdcgfmndaljciagcgjiicnal',
  },
  { label: 'Behance', url: 'https://www.behance.net/gallery/184968613/my-UIUX-portfolio' },
]

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="px-nav !border-b-0 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="wordmark text-5xl" data-text="SID">
            SID
          </span>
          <p className="mt-3 text-sm text-ink-soft">Satya Siddhartha Balanagu · Adelaide, Australia</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {links.map((l) => (
            <li key={l.url}>
              <a href={l.url} target="_blank" rel="noreferrer" className="px-btn !py-1.5 text-sm">
                {l.label === 'GitHub' ? <FolderGit2 size={14} /> : <ExternalLink size={14} />} {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="pb-2 text-center text-xs text-muted">© {year} Satya Siddhartha Balanagu</p>
      <p className="px-4 pb-6 text-center text-[11px] text-muted">Disclaimer: AI tools were used for assistance with code completion and automation only.</p>
    </footer>
  )
}
