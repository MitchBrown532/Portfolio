import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import SkeletonCard from "../components/SkeletonCard"; // Import skeleton card component

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    fetch("http://localhost:5000/api/github/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="projects-page">
      <h2>My GitHub Projects</h2>
      <div className="projects-grid">
        {loading
          ? Array.from({ length: 6 }).map(
              (
                _,
                index // Display 6 skeleton cards while loading
              ) => <SkeletonCard key={index} />
            )
          : projects.map((project) => (
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
