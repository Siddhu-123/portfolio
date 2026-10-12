import { ExternalLink } from 'lucide-react'
import { experience } from '../data/dossier'
import SectionHeading from './SectionHeading'

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading title="Experience" />
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {experience.map((e) => (
            <li key={e.role} className="px-card px-card-hover p-5">
              <h3 className="font-display text-xl leading-tight text-ink">{e.role}</h3>
              <p className="mt-1 text-xs font-bold text-muted">{e.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{e.desc}</p>
              {e.link && (
                <a href={e.link.url} target="_blank" rel="noreferrer" className="px-btn mt-4 !py-1.5 text-sm">
                  {e.link.label} <ExternalLink size={14} />
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
