import { FiArrowRight } from "react-icons/fi";
import Capabilities from "../components/Capabilities";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

// About hero portrait placeholder
const AboutPortrait = () => (
  <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-border">
    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent z-10" />
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background pattern */}
      <rect width="400" height="400" fill="#111111" />
      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#222" strokeWidth="0.5" />
      </pattern>
      <rect width="400" height="400" fill="url(#grid)" />
      {/* Checkered shirt body */}
      <rect x="100" y="260" width="200" height="160" rx="10" fill="#2a2a2a" />
      <path d="M130 270 Q200 295 270 270 L285 400 H115 Z" fill="#3d3020" />
      {/* Plaid pattern overlay */}
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={`h${i}`} x1="115" y1={270 + i * 20} x2="285" y2={270 + i * 20} stroke="#5a4030" strokeWidth="1" opacity="0.6" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <line key={`v${i}`} x1={115 + i * 22} y1="270" x2={115 + i * 22} y2="420" stroke="#5a4030" strokeWidth="1" opacity="0.6" />
      ))}
      {/* Neck */}
      <rect x="183" y="252" width="34" height="30" fill="#c8a882" />
      {/* Head */}
      <ellipse cx="200" cy="190" rx="62" ry="70" fill="#c8a882" />
      {/* Hair */}
      <path d="M138 175 Q142 110 200 112 Q258 110 262 175 Q245 128 200 132 Q155 128 138 175Z" fill="#2a1a0a" />
      {/* Beard hints */}
      <path d="M148 220 Q155 240 162 250" stroke="#7a5a3a" strokeWidth="2" fill="none" />
      <path d="M252 220 Q245 240 238 250" stroke="#7a5a3a" strokeWidth="2" fill="none" />
      {/* Eyes */}
      <ellipse cx="178" cy="188" rx="7" ry="8" fill="#2a1a0a" />
      <ellipse cx="222" cy="188" rx="7" ry="8" fill="#2a1a0a" />
      <ellipse cx="180" cy="186" rx="2" ry="2" fill="white" />
      <ellipse cx="224" cy="186" rx="2" ry="2" fill="white" />
      {/* Eyebrows */}
      <path d="M168 175 Q178 170 190 173" stroke="#2a1a0a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M210 173 Q222 170 232 175" stroke="#2a1a0a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Nose */}
      <path d="M196 202 Q200 212 204 202" stroke="#a07850" strokeWidth="2" fill="none" />
      <ellipse cx="193" cy="212" rx="4" ry="3" fill="#b09060" opacity="0.5" />
      <ellipse cx="207" cy="212" rx="4" ry="3" fill="#b09060" opacity="0.5" />
      {/* Smile */}
      <path d="M182 228 Q200 240 218 228" stroke="#8a5a3a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Ear */}
      <ellipse cx="138" cy="195" rx="10" ry="14" fill="#c8a882" />
      <ellipse cx="262" cy="195" rx="10" ry="14" fill="#c8a882" />
      {/* Hand posed near face */}
      <ellipse cx="280" cy="230" rx="18" ry="15" fill="#c8a882" transform="rotate(-20 280 230)" />
    </svg>
  </div>
);

const About = () => (
  <main className="pt-28">
    {/* About Hero */}
    <section className="px-6 max-w-6xl mx-auto pb-20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-px bg-accent" />
        <span className="text-accent font-body text-xs font-semibold uppercase tracking-widest">
          About Me
        </span>
      </div>
      <h1 className="section-title mb-12">About Me</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Portrait */}
        <AboutPortrait />

        {/* Bio */}
        <div>
          <p className="text-white/60 font-body text-sm leading-relaxed mb-5">
            I am a B.Tech Computer Science student and aspiring Full Stack MERN Developer
            passionate about building modern, responsive, and user-friendly web applications.
            I enjoy turning ideas into real-world projects using React, Node.js, and MongoDB.
          </p>

          <p className="text-white/60 font-body text-sm leading-relaxed mb-5">
            Along with web development, I have a growing interest in Cyber Security and
            often explore how systems, networks, and applications stay secure. I am also
            continuously improving my problem-solving skills and working on personal
            projects to strengthen my development journey.
          </p>

          <p className="text-white/60 font-body text-sm leading-relaxed mb-8">
            Outside of coding, I am a music lover and enjoy exploring new sounds while
            relaxing or thinking about new project ideas. I believe in continuous learning,
            consistency, and building things that make an impact.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: "Name", value: "Eed Mohammad" },
              { label: "Nationality", value: "India" },
              { label: "Experience", value: "Fresher" },
              { label: "Focus", value: "MERN Stack Dev" },
              { label: "Education", value: "B.Eng Computer" },
              { label: "Status", value: "Open to Work ✅" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-white/25 font-body text-[10px] uppercase tracking-widest mb-0.5">
                  {item.label}
                </p>
                <p className="text-white font-body text-sm font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>


          <div className="flex gap-4">
            <a href="/#contact" className="accent-btn">
              Hire Me <FiArrowRight />
            </a>
            <a
              href="/Resume.pdf"
              className="outline-btn"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>

    <div className="max-w-6xl mx-auto px-6">
      <div className="border-t border-border" />
    </div>

    <Capabilities />

    <div className="max-w-6xl mx-auto px-6">
      <div className="border-t border-border" />
    </div>

    <Experience />

    <div className="max-w-6xl mx-auto px-6">
      <div className="border-t border-border" />
    </div>

    <Contact />
  </main>
);

export default About;
