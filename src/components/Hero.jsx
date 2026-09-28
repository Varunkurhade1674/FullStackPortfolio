import { ArrowDown, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-violet/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-amber/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-14 items-center relative z-10 w-full mt-10">
        <div className="order-2 md:order-1">
          <p className="font-mono text-sm text-cyan tracking-wide mb-5 uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
            Available for full-time roles
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] text-paper mb-4">
            Hi, I'm <br/>
            <span className="text-gradient font-bold">{profile.name}</span>
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-fog mb-6">
            {profile.title}
          </p>
          <p className="text-fog max-w-lg leading-relaxed text-lg mb-10">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan text-ink text-sm font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-line glass-panel text-paper text-sm font-semibold hover:border-cyan hover:text-cyan transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={18} /> Contact Me
            </a>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl border border-line glass-panel text-fog hover:border-cyan hover:text-cyan transition-all duration-300 flex items-center justify-center gap-2"
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
                className="px-4 py-3 rounded-xl border border-line glass-panel text-fog hover:border-cyan hover:text-cyan transition-all duration-300 flex items-center justify-center gap-2"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
            )}
          </div>
        </div>

        <div className="relative flex justify-center items-center order-1 md:order-2 mb-10 md:mb-0">
          {/* Decorative rings behind image */}
          <div className="absolute inset-0 rounded-full border border-line animate-[spin_15s_linear_infinite] scale-[1.15] opacity-50 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full border border-cyan/30 animate-[spin_20s_linear_infinite_reverse] scale-[1.3] opacity-30 pointer-events-none"></div>
          
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan via-violet to-amber animate-float shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-panel border-4 border-ink relative flex items-center justify-center">
              {/* Image goes here */}
              <img 
                src="/profile.jpeg" 
                alt={profile.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 absolute inset-0 z-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {/* Fallback avatar if profile.jpg is missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-panel-2 text-fog z-0">
                <span className="text-4xl">📸</span>
                <span className="text-xs mt-2 text-center px-4 font-mono">Save image as <br/> public/profile.jpeg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-fog hover:text-cyan transition-colors animate-bounce"
        aria-label="Scroll to About"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
