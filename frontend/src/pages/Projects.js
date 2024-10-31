import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("fe 1");
    fetch("http://localhost:5000/api/github/projects")
      .then(console.log("fe 2"))

      .then((response) => response.json())
      .then((data) => setProjects(data))
      .then(console.log(projects))
      .catch((error) => console.error("Error fetching projects:", error));
    console.log(projects);
  }, []);

  return (
    <div className="projects-page">
      <h2>My GitHub Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            html_url={project.html_url}
            language={project.language}
            created_at={project.created_at}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
