import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Example Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a href="https://brainwash.com" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            src="/cafe-site-preview.jpeg"
            title="Modern Cafe Site"
            description="A modern cafe themed website made with HTML5."
          />
        </a>
        <a href="https://brainwash.com" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            src="/architect-template-preview.jpeg"
            title="Architecture Site"
            description="An artistic architecture site made with HTML5 and Javascript."
          />
        </a>
        <a href="https://brainwash.com" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            src="/restaurant-site-preview.jpeg"
            title="Health Food Site"
            description="A health food site with light and dark mode with fade-in animations made with NextJS."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
