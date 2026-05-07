import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "ZeloCart - E-commerce Platform",
    category: "Full Stack",
    description:
      "ZeloCart is a modern full-stack e-commerce platform with product listing, cart management, secure authentication, and smooth checkout experience.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Stripe"],
    color: "#FF3B30",
    bgFrom: "#1a0f0f",
    bgTo: "#3a1a1a",
    accentColor: "#FF3B30",
    image: "images/ZeloCart.png",
    githubPage: "https://github.com/Ali4441",
    demoPage: "https://zelo-cart.vercel.app/"


  },
  {
    id: 2,
    title: "SQL Studio",
    category: "Full Stack / Developer Tool",
    description:
      "Cipher SQL Studio is a modern SQL editor and database management tool that allows users to write, execute, and manage SQL queries efficiently with a clean and intuitive interface.",
    tech: ["React", "Node.js", "Express.js", "SQL", "Monaco Editor"],
    color: "#4F46E5",
    bgFrom: "#0a0f2a",
    bgTo: "#1a1f4a",
    accentColor: "#4F46E5",
    image: "images/SQLeditor.png",
    githubPage: "https://github.com/Ali4441/Cipher-Sql-Studio",
    demoPage: "#"
  },
  {
    id: 3,
    title: "StudySync - Educational Website UI",
    category: "Frontend",
    description:
      "StudySync is a responsive educational website UI built using HTML, CSS, and JavaScript. It focuses on clean design, smooth layout structure, and user-friendly interface for students. The project is frontend-only, with plans for future backend integration.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#22C55E",
    bgFrom: "#0a2a14",
    bgTo: "#1a4d2a",
    accentColor: "#22C55E",
    image: "/images/studysync.png",
    githubPage: "https://github.com/Ali4441/StudySync",
    demoPage: "https://study-sync-brown.vercel.app/#Home"
  }

];

const ProjectCard = ({ project, index }) => (
  <div
    className="project-card card group cursor-pointer opacity-0 animate-fade-up"
    style={{
      animationFillMode: "forwards",
      animationDelay: `${index * 0.15}s`,
    }}
  >
    {/* Project Preview */}
    <div
      className="relative h-52 overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${project.image || ""})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hover Overlay */}
      <div className="project-overlay absolute inset-0 bg-dark/80 opacity-0 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a
          href={project.demoPage}
          className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
        >
          <FiExternalLink size={16} />
        </a>
        <a
          href={project.githubPage}
          className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          <FiGithub size={16} />
        </a>
      </div>
    </div>

    {/* Card Content */}
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[10px] font-body font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{
            background: `${project.accentColor}20`,
            color: project.accentColor,
          }}
        >
          {project.category}
        </span>

        <span className="text-white/20 font-body text-xs">
          #{String(project.id).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-body font-semibold text-white text-sm leading-snug mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      <p className="text-white/40 font-body text-xs leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-body bg-white/5 border border-border px-2 py-0.5 rounded text-white/50"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={project.demoPage}
          className="text-xs font-body font-medium text-accent flex items-center gap-1 hover:gap-2 transition-all"
        >
          Live Demo <FiArrowRight size={12} />
        </a>

        <a
          href={project.githubPage}
          className="text-xs font-body font-medium text-white/40 flex items-center gap-1 hover:text-white transition-colors"
        >
          <FiGithub size={12} /> Code
        </a>
      </div>
    </div>
  </div>
);

const FeaturedProjects = () => (
  <section className="py-20 px-6 max-w-6xl mx-auto" id="projects">
    {/* Section Header */}
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-px bg-accent" />
        <span className="text-accent font-body text-xs font-semibold uppercase tracking-widest">
          Portfolio
        </span>
      </div>

      <div className="flex items-end justify-between flex-wrap gap-4">
        <h2 className="section-title">
          Featured
          <br />
          Projects
        </h2>

        <a href="#" className="outline-btn mb-1 text-xs">
          View All <FiArrowRight size={14} />
        </a>
      </div>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default FeaturedProjects;