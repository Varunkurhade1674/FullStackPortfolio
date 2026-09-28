import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-xl border border-line bg-panel p-6 flex flex-col hover:border-cyan/50 transition-colors">
      <p className="font-mono text-xs text-amber mb-2">{project.category}</p>
      <h3 className="font-display text-xl text-paper">{project.name}</h3>
      <p className="text-fog text-sm leading-relaxed mt-3 flex-1">
        {project.description}
      </p>

      {project.features && project.features.length > 0 && (
        <div className="mt-4 pt-3 border-t border-line/60">
          <p className="font-mono text-xs font-semibold text-amber tracking-wider uppercase mb-2">
            Key Features
          </p>
          <ul className="space-y-1.5 text-xs text-fog">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan leading-none font-bold">✔</span>
                <span className="leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded bg-panel-2 border border-line text-xs text-fog"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="flex gap-4 mt-5 pt-5 border-t border-line">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-fog hover:text-cyan transition-colors"
            >
              <GithubIcon /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-fog hover:text-cyan transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
