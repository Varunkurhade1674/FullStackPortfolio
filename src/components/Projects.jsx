import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 mb-10">
          <h2 className="font-display text-2xl text-paper whitespace-nowrap">Projects</h2>
          <div />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
