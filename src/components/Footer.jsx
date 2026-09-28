import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/portfolioData";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-fog font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fog hover:text-cyan transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon />
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fog hover:text-cyan transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon />
            </a>
          )}
        </div>
        {showTop && (
          <a
            href="#top"
            className="flex items-center gap-1.5 text-xs text-fog hover:text-cyan transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={14} />
          </a>
        )}
      </div>
    </footer>
  );
}
