import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 md:gap-16">
        <h2 className="font-display text-2xl text-paper whitespace-nowrap">Contact</h2>
        <div>
          <p className="text-fog max-w-lg leading-relaxed mb-8">
            Open to full-time roles and interesting projects. Reach out directly —
            I usually reply within a day.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-paper hover:text-cyan transition-colors w-fit"
            >
              <Mail size={18} /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-paper hover:text-cyan transition-colors w-fit"
            >
              <Phone size={18} /> {profile.phone}
            </a>
            <a
              href={profile.github || "#"}
              target={profile.github ? "_blank" : undefined}
              rel={profile.github ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-fog hover:text-cyan transition-colors w-fit"
            >
              <GithubIcon />
              {profile.github ? "GitHub" : "GitHub — add your URL"}
            </a>
            <a
              href={profile.linkedin || "#"}
              target={profile.linkedin ? "_blank" : undefined}
              rel={profile.linkedin ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-fog hover:text-cyan transition-colors w-fit"
            >
              <LinkedinIcon />
              {profile.linkedin ? "LinkedIn" : "LinkedIn — add your URL"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
