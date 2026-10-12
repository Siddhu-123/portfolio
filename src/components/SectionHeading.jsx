export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="slide-in">
      <h2 className="wordmark text-5xl sm:text-6xl" data-text={title}>
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-ink-soft">{subtitle}</p>}
    </div>
  )
}
