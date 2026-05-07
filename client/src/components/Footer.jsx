import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <Link to="/" className="font-display text-lg tracking-widest text-white/60 hover:text-accent transition-colors">
        ROBERT GARCIA
      </Link>
      <p className="text-white/20 font-body text-xs text-center">
        © {new Date().getFullYear()} Robert Garcia. All rights reserved. Built with MERN Stack & Tailwind CSS.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: <FiGithub />, href: "https://github.com" },
          { icon: <FiLinkedin />, href: "https://linkedin.com" },
          { icon: <FiTwitter />, href: "https://twitter.com" },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-accent transition-colors text-base"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
