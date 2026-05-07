import { FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  const socials = [
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/eed-mohammad-427667298/" },
    { icon: <FiGithub />,   href: "https://github.com/Ali4441" },
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* ── LEFT HALF — Content ──────────────────────────────── */}
      <div className="flex-1 flex items-center bg-dark px-10 md:px-16 lg:px-24 pt-28 pb-16 md:pt-0 md:pb-0">
        <div
          className="opacity-0 animate-fade-up"
          style={{ animationFillMode: "forwards" }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none uppercase text-white mb-6">
            Hi, I am
            <br />
            Robert Garcia.
          </h1>

          <p className="text-white/50 font-body text-sm md:text-base leading-relaxed max-w-sm mb-10">
            A Sydney based front-end developer passionate about building
            accessible and user friendly websites.
          </p>

          {/* CTA + Socials row */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="/#contact"
              className="accent-btn text-sm"
            >
              Contact Me
            </a>

            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-300 text-base"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT HALF — Photo ───────────────────────────────── */}
      <div
        className="flex-1 relative overflow-hidden min-h-[55vw] md:min-h-0"
        style={{ animationFillMode: "forwards" }}
      >
        {/* Photo fills the entire right panel */}
        <img
          src="image/zhen.jpg"
          alt="Robert Garcia"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle left-edge fade so it blends into the dark left panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
