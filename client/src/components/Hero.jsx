
import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// Avatar Component
const HeroAvatar = () => (
  <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-96 lg:h-[40rem] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-border flex items-center justify-center">    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent z-10" />
    <img
      src="images/ali.png"
      alt="Avatar"
      className="w-full h-full object-cover object-top md:object-center scale-100 hover:scale-110 transition-transform duration-500"
    />

    {/* Badge */}
    <div className="absolute bottom-3 right-3 z-20 bg-accent text-black text-[10px] font-bold px-2 py-1 rounded-full font-body">
      Available
    </div>
  </div>
);

const Hero = () => {
  const socials = [
    { icon: <FiGithub />, href: "https://github.com/Ali4441" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/eed-mohammad-427667298/" },
  ];

  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">

        {/* Left Content (40%) */}
        <div
          className="w-full md:w-[40%] opacity-0 animate-fade-up"
          style={{ animationFillMode: "forwards" }}
        >
          <p className="text-white/40 font-body text-sm tracking-widest uppercase mb-4">
            👋 Hello, Welcome
          </p>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none uppercase text-white mb-6">
            Hi, I am
            <br />
            <span className="text-accent">Eed</span>
            <br />
            Mohammad.
          </h1>

          <p className="text-white/50 font-body text-sm md:text-base leading-relaxed max-w-md mb-8">
            I am a Front-end Developer with strong skills in React, JavaScript, HTML, and CSS. I specialize in building responsive and user-centric web applications, ensuring performance and scalability while delivering a seamless user experience.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="/#contact" className="accent-btn">
              Get in Touch <FiArrowRight />
            </a>

            <Link to="/about" className="outline-btn">
              About Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-300 text-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Image (60%) */}
        <div
          className="w-full md:w-[60%] opacity-0 animate-fade-right delay-300 flex justify-center md:justify-end"
          style={{ animationFillMode: "forwards" }}
        >
          <HeroAvatar />
        </div>
      </div>

      {/* Stats */}
      <div
        className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 opacity-0 animate-fade-up delay-400"
        style={{ animationFillMode: "forwards" }}
      >
        {[
          { label: "Year Experience", value: "Fresher" },
          { label: "Projects Completed", value: "10+" },
          { label: "Technologies", value: "15+" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-5 flex flex-col "
          >
            <span className="font-display text-4xl text-accent">
              {stat.value}
            </span>
            <span className="text-white/40 font-body text-xs mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
