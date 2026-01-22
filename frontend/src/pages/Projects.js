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
      description:
        "Automates scraping of 3 auction websites based on user queries, extracting lots and all relevant data (bid, closing date, seller, etc.). Runs every 2 hours, stores persistent results, updates records, and tracks changes for time series analysis. Eliminates manual searching, saving hours of work. Designed for easy scaling to more sites/users.",
      image: "/img/Scraper.png",
      tech: [
        "Python",
        "BeautifulSoup",
        "Playwright",
        "Streamlit",
        "Flask",
        "PostgreSQL",
        "Pytest",
        "Git",
        "GitHub Actions",
        "Docker",
      ],
      github: null,
      demo: null,
    },
    {
      title: "Text Extraction Data Pipeline (RBC)",
      description:
        "Contract for RBC Bank: Built a pipeline to extract and clean data from large, inconsistently formatted .txt files during a branch acquisition. Delivered ahead of schedule and under budget, steering the team away from unnecessary AI solutions. Focused on robust, testable code and practical automation.",
      image: "/img/RBC.png",
      tech: ["Python", "Regex", "Pandas", "Pytest", "Git"],
      github: null,
      demo: null,
    },
    {
      title: "CRUD App",
      description:
        "A full-stack app to practice and demonstrate CRUD operations. Features add, edit, delete, update, pagination, and filtering. Implements RESTful API practices, rigourous frontend & backend testing, CI/CD with GitHub Actions, and Docker. Designed to showcase core skills for entry-level software development.",
      image: "/img/CRUD.png", 
      tech: [
        "React",
        "Vite",
        "Flask",
        "SQLAlchemy",
        "SQLite",
        "PostgreSQL",
        "Docker",
        "Pytest",
        "Vitest",
        "GitHub Actions",
      ],
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
