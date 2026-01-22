import "./ProjectCard.css";

function ProjectCard({ name, description, html_url, language, created_at }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{name}</h3>
      <p className="project-description">
        {description || "No description provided."}
      </p>
      <div className="project-info">
        <span className="project-language">Language: {language || "N/A"}</span>
        <span className="project-date">
          Created: {new Date(created_at).toLocaleDateString()}
        </span>
      </div>
      <a
        href={html_url}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
