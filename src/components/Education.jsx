import { education, certifications } from "../data/portfolioData";
import { Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-2xl text-paper mb-8">Education</h2>
          <div className="space-y-7">
            {education.map((edu) => (
              <div key={edu.school}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-lg text-paper">{edu.school}</h3>
                  <span className="font-mono text-xs text-fog">{edu.period}</span>
                </div>
                <p className="text-sm text-fog mt-1">{edu.degree}</p>
                <p className="text-sm text-cyan mt-1">
                  {edu.detail} · {edu.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl text-paper mb-8">Certifications</h2>
          <div className="space-y-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex gap-3">
                <Award size={18} className="text-amber shrink-0 mt-0.5" />
                <div>
                  <p className="text-paper text-sm font-medium">{cert.name}</p>
                  <p className="text-fog text-sm">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
