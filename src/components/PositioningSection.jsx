import { profiles } from '../data/dossier'
import SectionHeading from './SectionHeading'

export default function PositioningSection() {
  return (
    <section id="focus" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading title="Focus" subtitle="The kinds of roles my work lines up with." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((p) => (
            <div key={p.id} className="px-card px-card-hover p-5">
              <span className="font-display text-3xl text-hot">0{p.id}</span>
              <h3 className="mt-1 font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
