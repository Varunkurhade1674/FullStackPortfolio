import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 md:gap-16">
        <h2 className="font-display text-2xl text-paper whitespace-nowrap">Experience</h2>
        <div className="max-w-2xl space-y-10">
          {experience.map((job) => (
            <div key={job.role + job.company} className="relative pl-6 border-l border-line">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg text-paper">{job.role}</h3>
                <span className="font-mono text-xs text-fog">{job.period}</span>
              </div>
              <p className="text-sm text-amber mt-0.5">
                {job.company}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              <ul className="mt-3 space-y-1.5 text-fog text-sm leading-relaxed">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-line mt-1">·</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
