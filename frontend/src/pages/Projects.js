import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import SkeletonCard from "../components/SkeletonCard"; // Import skeleton card component
import "./Pages.css";
import FeaturedProjectCard from "../components/FeaturedProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/github/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
          setError(null);
        } else {
          console.error("Received non-array data:", data);
          setProjects([]);
          setError("Failed to load projects.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setProjects([]);
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  // Featured projects data (customize as needed)
  const featuredProjects = [
    {
      title: "Web Scraper for Auction Sites",
      description: "Automates data collection from multiple auction platforms, normalizes results, and exports to CSV for analysis.",
      image: "/img/auction-scraper.png", // Add this image to public/img
      tech: ["Python", "Requests", "BeautifulSoup", "Pandas"],
      github: "https://github.com/mitchbrown532/auction-scraper",
      demo: null,
    },
    {
      title: "Text Extraction Data Pipeline (RBC)",
      description: "Built for RBC: Extracts, cleans, and stores text data from scanned documents using OCR and SQL.",
      image: "/img/rbc-pipeline.png", // Add this image to public/img
      tech: ["Python", "OCR", "SQL", "Pandas"],
      github: null,
      demo: null,
    },
    {
      title: "CRUD App",
      description: "A full-stack CRUD app for managing tasks, with authentication and RESTful API.",
      image: "/img/crud-app.png", // Add this image to public/img
      tech: ["React", "Flask", "SQLAlchemy", "Docker"],
      github: "https://github.com/mitchbrown532/crud-app",
      demo: null,
    },
  ];

  return (
    <div className="projects-page">
      <h2>Featured Projects</h2>
      <div className="card-grid">
        {featuredProjects.map((proj, idx) => (
          <FeaturedProjectCard key={idx} {...proj} />
        ))}
      </div>
      <h2>My GitHub Projects</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="card-grid">
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
