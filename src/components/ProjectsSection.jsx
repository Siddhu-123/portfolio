import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, Search, X } from 'lucide-react'
import { allCategories, projects } from '../data/projects'
import ProjectDetailModal from './ProjectDetailModal'

const isTypingTarget = (el) =>
  el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable)

export function StatusPill({ project }) {
  return <span className={`px-pill status-${project.status}`}>{project.statusLabel}</span>
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="px-card px-card-hover flex h-full flex-col p-5">
      <div className="flex flex-wrap items-center gap-2">
        <StatusPill project={project} />
        {project.categories.map((c) => (
          <span key={c} className="text-xs font-bold text-muted">
            #{c}
          </span>
        ))}
      </div>
      <h3 className="mt-3 font-display text-2xl leading-tight text-ink">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.summary[0]}</p>
      <p className="mt-3 font-mono text-xs text-muted">{project.metrics}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="rounded-full bg-surface-3 px-2 py-0.5 text-[11px] font-bold text-ink">
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="px-1 text-[11px] font-bold text-muted">+{project.tech.length - 5}</span>
        )}
      </div>
      <div className="mt-auto pt-5">
        <button type="button" onClick={() => onOpen(project.id)} className="px-btn !py-1.5 text-sm">
          Details <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [openId, setOpenId] = useState(null)
  const searchRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey || isTypingTarget(e.target)) return
      e.preventDefault()
      searchRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const counts = useMemo(() => {
    const c = { All: projects.length }
    projects.forEach((p) => p.categories.forEach((cat) => (c[cat] = (c[cat] || 0) + 1)))
    return c
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      if (category !== 'All' && !p.categories.includes(category)) return false
      if (!q) return true
      return [p.title, p.statusLabel, ...p.tech, ...p.summary, ...p.categories].join(' ').toLowerCase().includes(q)
    })
  }, [query, category])

  const openIndex = filtered.findIndex((p) => p.id === openId)
  const openProject = openIndex >= 0 ? filtered[openIndex] : projects.find((p) => p.id === openId)

  const step = (dir) => {
    if (openIndex < 0 || filtered.length === 0) return
    setOpenId(filtered[(openIndex + dir + filtered.length) % filtered.length].id)
  }

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="slide-in flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="wordmark text-5xl sm:text-6xl" data-text="Projects">
              Projects
            </h2>
            <p className="mt-3 text-ink-soft">
              {projects.length} projects · status labels show what is finished, live, prototyped or still in progress.
            </p>
          </div>
          <label className="px-input flex w-full items-center gap-2 px-4 py-2 sm:w-72">
            <Search size={16} className="shrink-0 text-muted" />
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search  ( / )"
              aria-label="Search projects"
              className="w-full text-sm"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="text-muted">
                <X size={15} />
              </button>
            )}
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {allCategories.map((c) => (
            <button
              key={c}
              type="button"
              className="px-chip"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c} <span className="text-muted">{counts[c] || 0}</span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="px-card mt-8 p-8 text-center">
            <p className="font-bold text-ink">No projects match “{query}”.</p>
            <button
              type="button"
              className="px-btn mt-4"
              onClick={() => {
                setQuery('')
                setCategory('All')
              }}
            >
              Show all {projects.length}
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <div key={p.id} className="slide-in" style={{ animationDelay: `${Math.min(i, 8) * 0.05}s` }}>
                <ProjectCard project={p} onOpen={setOpenId} />
              </div>
            ))}
          </div>
        )}
      </div>

      {openProject && (
        <ProjectDetailModal
          project={openProject}
          onClose={() => setOpenId(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          onSelect={setOpenId}
        />
      )}
    </section>
  )
}
