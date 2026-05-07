import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const AboutSnippet = () => (
  <section className="py-20 px-6 max-w-6xl mx-auto" id="about-snippet">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left – Text */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-accent" />
          <span className="text-accent font-body text-xs font-semibold uppercase tracking-widest">
            About Me
          </span>
        </div>
        <h2 className="section-title mb-6">
          About
          <br />
          Me
        </h2>
        <p className="text-white/50 font-body text-sm leading-relaxed mb-4">
          I am a B.Tech Computer Science student and aspiring  MERN Stack Developer
          with strong skills in JavaScript, React.js, Node.js, Express.js, and MongoDB.
          I enjoy building responsive and user-friendly web applications with clean UI
          and smooth user experience.
        </p>

        <p className="text-white/50 font-body text-sm leading-relaxed mb-8">
          I have hands-on experience in developing frontend and full-stack projects,
          working with REST APIs, authentication, and database integration. I am
          passionate about continuous learning, problem-solving, and improving my
          skills in modern web development.
        </p>
        <Link to="/about" className="accent-btn">
          More About Me <FiArrowRight />
        </Link>
      </div>

      {/* Right – Highlights */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Location", value: "Greater Noida, India" },
          { label: "Experience", value: "Fresher" },
          { label: "Specialty", value: "MEARN Stack Dev" },
          { label: "Education", value: "Computer Science of Engineering" },
          { label: "Availability", value: "Open to Work ✅" },
          { label: "Languages", value: "English, Hindi,Mathili" },
        ].map((item, i) => (
          <div key={i} className="card p-4">
            <p className="text-white/30 font-body text-[10px] uppercase tracking-widest mb-1">
              {item.label}
            </p>
            <p className="text-white font-body font-medium text-sm">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSnippet;
