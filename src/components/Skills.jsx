import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 md:gap-16">
        <h2 className="font-display text-2xl text-paper whitespace-nowrap">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-cyan mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-panel border border-line text-sm text-paper"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
