import React, { useState } from "react";
import "./SkillCard.css";

function SkillCard({ title, skills }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`skill-card ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Title & Logo */}
      <h2 className="skill-title">{title}</h2>

      {/* Expandable Skill List */}
      {isOpen && (
        <ul className="skill-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SkillCard;
