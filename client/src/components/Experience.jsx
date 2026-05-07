const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "Croma Campus",
    period: "2024 (2 Months)",
    location: "India",
    description:
      "Completed a full stack development internship where I worked on building real-world web applications using MERN stack. Gained hands-on experience in REST APIs, authentication, and frontend-backend integration.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
  },

  {
    role: "MERN Stack Developer",
    company: "Personal Projects (GitHub)",
    period: "2023 – Present",
    location: "India",
    description:
      "Built multiple full-stack and frontend projects including ZeloCart (E-commerce), ZtexWeb (Web App Platform), StudySync (Educational UI), and Baalcraft. Focused on responsive UI design, API integration, and scalable component architecture.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript"],
  },

  {
    role: "Frontend Developer",
    company: "Self Learning & Practice",
    period: "2022 – Present",
    location: "India",
    description:
      "Developed multiple responsive web applications using HTML, CSS, and JavaScript. Strengthened core frontend concepts including DOM manipulation, responsive design, and UI development.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
];
const Experience = () => (
  <section className="py-20 px-6 max-w-6xl mx-auto">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-px bg-accent" />
      <span className="text-accent font-body text-xs font-semibold uppercase tracking-widest">
        Career
      </span>
    </div>
    <h2 className="section-title mb-12">My Experience</h2>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden md:block" />

      <div className="flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`relative flex flex-col md:flex-row gap-6 md:gap-0 pb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Dot */}
            <div className="hidden md:flex absolute left-1/2 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-dark z-10" />

            {/* Card */}
            <div
              className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:ml-auto md:pr-0 md:pl-10" : "md:mr-auto md:pr-10"
                }`}
            >
              <div className="card p-6 hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-body font-semibold text-white text-sm">{exp.role}</h3>
                    <p className="text-accent font-body text-xs font-medium mt-0.5">{exp.company}</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="text-white/30 font-body text-xs">{exp.period}</p>
                    <p className="text-white/20 font-body text-[10px]">{exp.location}</p>
                  </div>
                </div>
                <p className="text-white/40 font-body text-xs leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-body px-2 py-0.5 bg-white/5 border border-border rounded text-white/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
