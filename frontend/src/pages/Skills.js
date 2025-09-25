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
            "⚡ JavaScript (ES6+)",
            "⚛️ React",
            "🖼️ HTML5 / CSS3",
            "📐 Bootstrap",
            "🎨 UI/UX Fundamentals",
          ]}
        />

        <SkillCard
          title="🛠️ Backend"
          skills={[
            "🐍 Python",
            "🌶️ Flask",
            "🟢 Node.js (basic)",
            "🔗 REST API Development",
            "🗄️ SQL / Database Fundamentals",
          ]}
        />

        <SkillCard
          title="🤖 AI & Machine Learning"
          skills={[
            "🔬 TensorFlow & Keras",
            "📊 Data Preprocessing & Feature Engineering",
            "📈 Applied ML (classification, regression, time series)",
            "🧠 NLP & Generative AI (familiarity)",
          ]}
        />

        <SkillCard
          title="🧰 Tools & Platforms"
          skills={[
            "🐙 Git & GitHub",
            "🐳 Docker",
            "☁️ Cloudways (deployment)",
            "🚀 Vercel (deployment)",
            "📦 NPM & Node Package Management",
          ]}
        />

        <SkillCard
          title="✨ Additional Skills"
          skills={[
            "🔧 Debugging & Troubleshooting",
            "📈 SEO & Web Performance",
            "📝 Technical Writing",
            "🤝 Team Collaboration (Agile)",
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
