import { useEffect, useState } from 'react'
import { FolderGit2, Menu, X } from 'lucide-react'
import ThemeIcon from './ThemeIcon'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#coursework', label: 'Coursework' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#focus', label: 'Focus' },
]

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    const handleChange = (e) => {
      if (e.matches) {
        setOpen(false)
      }
    }
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  return (
    <header className="px-nav sticky top-0 z-40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#top" className="wordmark wordmark-sm text-3xl" data-text="SID" aria-label="Back to top">
          SID
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-1.5 text-sm font-bold text-ink hover:bg-surface-2">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Siddhu-123"
            target="_blank"
            rel="noreferrer"
            className="px-btn hidden !px-3 !py-1.5 text-sm sm:inline-flex"
          >
            <FolderGit2 size={15} /> GitHub
          </a>
          <ThemeIcon dark={dark} onToggle={onToggleTheme} />
          <button
            type="button"
            className="px-btn !p-2 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="slide-in mx-4 mb-3 grid gap-1 px-card p-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 font-bold text-ink hover:bg-surface-2"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Siddhu-123"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl px-3 py-2 font-bold text-ink hover:bg-surface-2"
            >
              GitHub
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
