import { useState } from "react";
import { FiSend, FiMail, FiGithub, FiLinkedin, FiTwitter, FiCheck } from "react-icons/fi";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      console.log("Submitting contact form:", form);
      await axios.post("http://localhost:5000/api/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {



      if (err.response) {
        console.log("STATUS:", err.response.status);
        console.log("DATA:", err.response.data);
      }

      if (err.message) {
        console.log("MESSAGE:", err.message);
      }

      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const socials = [
    { icon: <FiGithub />, href: "https://github.com/Ali4441" },
    { icon: <FiLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/eed-mohammad-427667298/" },
    { icon: <FiTwitter />, label: "Twitter", href: "https://twitter.com" },
    { icon: <FiMail />, label: "Email", href: "/contact" },

  ];






  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="contact">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-accent" />
            <span className="text-accent font-body text-xs font-semibold uppercase tracking-widest">
              Contact
            </span>
          </div>
          <h2 className="section-title mb-4">
            Let's
            <br />
            Connect
          </h2>
          <p className="text-white/40 font-body text-sm leading-relaxed mb-8 max-w-sm">
            Got a project in mind or just want to say hello? Drop me a message
            and I'll get back to you as soon as possible.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-accent">
                <FiMail size={16} />
              </div>
              <div>
                <p className="text-white/30 font-body text-[10px] uppercase tracking-widest">Email</p>
                <p className="text-white font-body text-sm">eedmohammad444@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-white/40 hover:border-accent hover:text-accent transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right – Form */}
        <div className="card p-7">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-white/40 font-body text-xs uppercase tracking-widest block mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Robert Garcia"
                className="input-field"
              />
            </div>
            <div>
              <label className="text-white/40 font-body text-xs uppercase tracking-widest block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="robert@example.com"
                className="input-field"
              />
            </div>
            <div>
              <label className="text-white/40 font-body text-xs uppercase tracking-widest block mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className={`accent-btn justify-center mt-2 ${status === "loading" ? "opacity-60 cursor-not-allowed" : ""
                } ${status === "success" ? "!bg-green-500" : ""}`}
            >
              {status === "idle" && (
                <>Send Message <FiSend /></>
              )}
              {status === "loading" && "Sending..."}
              {status === "success" && (
                <><FiCheck /> Message Sent!</>
              )}
              {status === "error" && "Error — Try Again"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
