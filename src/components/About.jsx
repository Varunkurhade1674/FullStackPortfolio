import { profile } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 md:gap-16">
        <h2 className="font-display text-2xl text-paper whitespace-nowrap">About</h2>
        <div className="max-w-2xl space-y-4 text-fog leading-relaxed">
          <p>
            I'm {profile.name}, a {profile.title.toLowerCase()} working across the
            frontend, backend, and AI layers of a product. My day-to-day tools are
            React and Node.js on the frontend and backend, and Python with FastAPI
            for services that need to talk to databases, REST APIs, or language
            models.
          </p>
          <p>
            Recently my work has moved toward generative and agentic AI — building
            applications where AI agents handle parts of a workflow instead of
            just answering questions. I care about clean architecture (MVC,
            proper auth, sane API design) as much as I care about the AI layer
            sitting on top of it.
          </p>
        </div>
      </div>
    </section>
  );
}
