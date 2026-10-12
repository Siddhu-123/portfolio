import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { coursework } from '../data/dossier'
import SectionHeading from './SectionHeading'

export default function CourseworkSection() {
  const [open, setOpen] = useState(coursework[0]?.id)

  return (
    <section id="coursework" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading title="Coursework" subtitle="Labs and assignments from my degree, grouped by area." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {coursework.map((c) => {
            const isOpen = open === c.id
            return (
              <div key={c.id} className="px-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : c.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left"
                >
                  <span>
                    <span className="block font-display text-xl text-ink">{c.title}</span>
                    <span className="text-xs font-bold text-muted">{c.tag}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-ink transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <ul className="space-y-1.5 border-t border-line px-4 py-3">
                    {c.items.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-ink-soft">
                        <span className="text-hot">★</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
