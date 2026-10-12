import { skills } from '../data/dossier'
import SectionHeading from './SectionHeading'

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading title="Skills" subtitle="Highlighted items are the ones I use most." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.domain} className="px-card px-card-hover p-4">
              <h3 className="font-display text-xl text-ink">{s.domain}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className={`rounded-full border px-2 py-0.5 text-xs font-bold ${
                      s.accent.includes(it)
                        ? 'border-line bg-surface-2 text-ink'
                        : 'border-transparent bg-surface-3 text-ink-soft'
                    }`}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
