import React from "react";
import "./FeaturedProjectCard.css";

function FeaturedProjectCard({ title, description, image, tech, github, demo }) {
  return (
    <div className="featured-project-card">
      <img src={image} alt={title + " screenshot"} className="featured-project-image" />
      <div className="featured-project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="featured-project-tech">{tech && tech.join(", ")}</div>
        <div className="featured-project-links">
          {github ? (
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          ): (<span>Github: N/A (Signed an NDA)</span>)}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;
