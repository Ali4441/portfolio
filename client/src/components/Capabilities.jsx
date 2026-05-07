import { useEffect, useRef, useState } from "react";

const skills = [
  {
    category: "Frontend", items: [
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },

    ]
  },
  {
    category: "Backend", items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 72 },
      { name: "REST APIs", level: 85 },
      { name: "C++", level: 90 },
    ]
  },
  {
    category: "Tools", items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 82 },
      { name: "Docker", level: 55 },
      { name: "AWS Basics", level: 50 },
      { name: "Framer Motion", level: 78 },
    ]
  },
];

const SkillBar = ({ name, level, visible }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1.5">
      <span className="font-body text-sm text-white/80">{name}</span>
      <span className="font-body text-xs text-accent font-semibold">{level}%</span>
    </div>
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full bg-accent rounded-full skill-bar-fill"
        style={{ width: visible ? `${level}%` : "0%" }}
      />
    </div>
  </div>
);

const Capabilities = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-px bg-accent" />
        <span className="text-accent font-body text-xs font-semibold uppercase tracking-widest">
          Skills
        </span>
      </div>
      <h2 className="section-title mb-12">My Capabilities</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((group) => (
          <div key={group.category} className="card p-6">
            <h3 className="font-display text-2xl text-accent mb-6 tracking-wide">
              {group.category}
            </h3>
            {group.items.map((skill) => (
              <SkillBar key={skill.name} {...skill} visible={visible} />
            ))}
          </div>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="mt-12 flex flex-wrap gap-2">
        {["React", "Node.js", "MongoDB", "Express", "Tailwind", "TypeScript", "Figma", "Git",
          "REST API", "GraphQL", "Docker", "Framer Motion", "Next.js", "Redux", "Vite"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-body px-3 py-1.5 bg-white/5 border border-border rounded-full text-white/50 hover:border-accent/60 hover:text-accent transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
      </div>
    </section>
  );
};

export default Capabilities;
