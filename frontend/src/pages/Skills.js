import React from "react";
import SkillCard from "../components/SkillCard";
import "./Pages.css";

function Skills() {
  return (
    <div className="container skills-page">
      <h1>My Skills</h1>

      <div className="card-grid">
        <SkillCard
          title="🎨 Frontend"
          skills={[
            "⚡ JavaScript / HTML / CSS / JSX",
            "⚛️ React / Vite",
          ]}
        />

        <SkillCard
          title="🛠️ Backend"
          skills={[
            "🐍 Python",
            "🗄️ SQL",
          ]}
        />

        <SkillCard
          title="🧰 Tools & DevOps"
          skills={[
            "🐙 Git",
            "🐳 Docker",
            "🧪 Pytest",
            "⚙️ GitHub Actions",
          ]}
        />
      </div>

      {/* Resume Button */}
      <div className="skills-resume">
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          📄 View My Resume
        </a>
      </div>
    </div>
  );
}

export default Skills;
