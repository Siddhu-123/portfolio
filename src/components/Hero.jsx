import { ArrowDown, ExternalLink, FolderGit2 } from 'lucide-react'
import { projects } from '../data/projects'

const count = (status) => projects.filter((p) => p.status === status).length
const liveCount = projects.filter((p) =>
  p.links.some((l) => /live|store/i.test(l.label)),
).length

const stats = [
  { value: projects.length, label: 'projects' },
  { value: count('completed'), label: 'completed' },
  { value: count('progress') + count('prototype'), label: 'in progress / prototype' },
  { value: liveCount, label: 'live / published' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
        <div className="slide-in">
          <span className="px-pill">
            <span className="h-2 w-2 rounded-full bg-[#1fbf6a]" /> Open to applied AI / ML roles · Adelaide, AU
          </span>

          <h1 className="mt-6 leading-none">
            <span className="block font-display text-2xl text-ink-soft sm:text-3xl">hi, I&apos;m</span>
            <span
              className="wordmark mt-2 text-[3.4rem] sm:text-8xl lg:text-9xl"
              data-text="Siddhartha"
            >
              Siddhartha
            </span>
            <span className="sr-only">Satya Siddhartha Balanagu</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Satya Siddhartha Balanagu. I build applied AI, computer-vision and macOS tools, from an
            on-device MLX screen agent to a self-balancing robot and a published Chrome
            extension.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-btn px-btn-solid">
              See projects <ArrowDown size={16} />
            </a>
            <a href="https://github.com/Siddhu-123" target="_blank" rel="noreferrer" className="px-btn">
              <FolderGit2 size={16} /> GitHub
            </a>
            <a
              href="https://chromewebstore.google.com/detail/secret-password-generator/mfgnlfigpdcgfmndaljciagcgjiicnal"
              target="_blank"
              rel="noreferrer"
              className="px-btn"
            >
              <ExternalLink size={16} /> Chrome extension
            </a>
          </div>
        </div>

        <dl className="slide-in mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4" style={{ animationDelay: '0.15s' }}>
          {stats.map((s) => (
            <div key={s.label} className="px-card px-card-hover p-4">
              <dt className="text-xs font-bold uppercase tracking-wide text-muted">{s.label}</dt>
              <dd className="font-display text-4xl text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
