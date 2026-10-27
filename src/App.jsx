import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      window.scrollTo(0, 0);
    }
  }, [selectedProject]);

  if (selectedProject) {
    return (
      <div className="app-container">
        <Header />
        <main>
          <ProjectDetails
            projectSlug={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Projects onProjectSelect={setSelectedProject} />
        <Skills />
        <About />
        {/* <Experience /> - Temporarily hidden: will be updated with non-academic professional experience in the future */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
