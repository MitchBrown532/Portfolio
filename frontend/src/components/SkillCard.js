import React from "react";
import "./SkillCard.css";

function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h2>{title}</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
