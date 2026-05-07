import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutSnippet from "../components/AboutSnippet";
import Contact from "../components/Contact";

const Home = () => (
  <main>
    <Hero />

    {/* Divider */}
    <div className="max-w-6xl mx-auto px-6">
      <div className="border-t border-border" />
    </div>

    <FeaturedProjects />

    {/* Divider */}
    <div className="max-w-6xl mx-auto px-6">
      <div className="border-t border-border" />
    </div>

    <AboutSnippet />

    {/* Divider */}
    <div className="max-w-6xl mx-auto px-6">
      <div className="border-t border-border" />
    </div>

    <Contact />
  </main>
);

export default Home;
