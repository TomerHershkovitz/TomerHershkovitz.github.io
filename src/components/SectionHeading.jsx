export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="eyebrow">{eyebrow}</p>
      <div className="space-y-3">
        <h2 className="section-title">{title}</h2>
        {description ? <p className="text-pretty text-lg text-slate-300/86">{description}</p> : null}
      </div>
    </div>
  );
}
