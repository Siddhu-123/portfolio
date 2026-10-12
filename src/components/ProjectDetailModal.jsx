import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'
import { projects } from '../data/projects'

const asset = (p) => `${import.meta.env.BASE_URL}${p}`

export default function ProjectDetailModal({ project, onSelect, onClose, onPrev, onNext }) {
  const handlers = useRef({ onClose, onPrev, onNext })
  const closeRef = useRef(null)

  useEffect(() => {
    handlers.current = { onClose, onPrev, onNext }
  })

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handlers.current.onClose()
      if (e.key === 'ArrowLeft') handlers.current.onPrev()
      if (e.key === 'ArrowRight') handlers.current.onNext()
    }
    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus?.()
    }
  }, [])

  const related = projects
    .filter((p) => p.id !== project.id && p.categories.some((c) => project.categories.includes(c)))
    .slice(0, 3)

  const href = project.liveUrl || project.repo
  const video = project.media?.video ? (
    <video
      key={project.id}
      src={asset(project.media.video)}
      poster={asset(project.media.poster)}
      autoPlay
      muted
      loop
      playsInline
      className="block aspect-video w-full object-cover object-top"
    />
  ) : null
  const preview = video && (
    <figure className="space-y-2">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title}`}
          className="block overflow-hidden rounded-xl border border-line bg-surface-3 transition hover:opacity-90"
        >
          {video}
        </a>
      ) : (
        <div className="overflow-hidden rounded-xl border border-line bg-surface-3">{video}</div>
      )}
      <figcaption className="flex items-center justify-between gap-2 text-[11px] font-bold text-muted">
        <span>10 s walkthrough</span>
        {href && (
          <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent">
            {project.liveUrl ? 'Open live app' : 'View on GitHub'} <ExternalLink size={11} />
          </a>
        )}
      </figcaption>
    </figure>
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="px-card slide-in flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden !shadow-[var(--shadow-accent)]"
        style={{ animationDuration: '0.4s' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2 border-b border-line px-5 py-3">
          <span className={`px-pill status-${project.status}`}>{project.statusLabel}</span>
          <div className="flex gap-2">
            <button type="button" onClick={onPrev} aria-label="Previous project" className="px-btn !p-1.5">
              <ChevronLeft size={16} />
            </button>
            <button type="button" onClick={onNext} aria-label="Next project" className="px-btn !p-1.5">
              <ChevronRight size={16} />
            </button>
            <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="px-btn !p-1.5">
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-5 overflow-y-auto p-5 sm:p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-muted">{project.categories.join(' · ')}</p>
            <h2 id="project-title" className="mt-1 font-display text-3xl leading-tight text-ink sm:text-4xl">
              {project.title}
            </h2>
          </div>

          <div className={preview ? 'grid gap-5 sm:grid-cols-[minmax(0,1fr)_240px] sm:items-start' : ''}>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-muted">What I built</p>
              <ul className="mt-2 space-y-2">
                {project.summary.map((s) => (
                  <li key={s} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                    <span className="text-hot">★</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            {preview}
          </div>

          <div className="rounded-2xl border border-line bg-surface-3 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-muted">Results</p>
            <p className="mt-1 font-mono text-sm text-ink">{project.metrics}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-muted">Key technologies</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="px-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.learned?.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-muted">What I learned</p>
              <ul className="mt-2 space-y-2">
                {project.learned.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                    <span className="text-accent">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-sm italic text-ink-soft">{project.resumeBullet}</p>

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="px-btn text-sm">
                  {l.label} <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}

          {related.length > 0 && (
            <div className="border-t border-line pt-4">
              <p className="text-xs font-bold uppercase tracking-wide text-muted">Related</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {related.map((r) => (
                  <button key={r.id} type="button" onClick={() => onSelect(r.id)} className="px-chip text-left">
                    {r.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
