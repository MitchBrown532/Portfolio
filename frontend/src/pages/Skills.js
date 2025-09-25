import React from "react";
import "./Pages.css";

function Skills() {
  return (
    <div className="container skills-page">
      <h1>My Skills</h1>

      {/* Frontend Skills */}
      <section>
        <h2>🎨 Frontend</h2>
        <ul>
          <li>⚡ JavaScript (ES6+)</li>
          <li>⚛️ React</li>
          <li>🖼️ HTML5 / CSS3</li>
          <li>📐 Bootstrap</li>
          <li>🎨 UI/UX Fundamentals</li>
        </ul>
      </section>

      {/* Backend Skills */}
      <section>
        <h2>🛠️ Backend</h2>
        <ul>
          <li>🐍 Python</li>
          <li>🌶️ Flask</li>
          <li>🟢 Node.js (basic)</li>
          <li>🔗 REST API Development</li>
          <li>🗄️ SQL / Database Fundamentals</li>
        </ul>
      </section>

      {/* AI & Machine Learning */}
      <section>
        <h2>🤖 AI & Machine Learning</h2>
        <ul>
          <li>🔬 TensorFlow & Keras</li>
          <li>📊 Data Preprocessing & Feature Engineering</li>
          <li>
            📈 Applied Machine Learning (classification, regression, time
            series)
          </li>
          <li>🧠 NLP & Generative AI (familiarity)</li>
        </ul>
      </section>

      {/* Tools & Platforms */}
      <section>
        <h2>🧰 Tools & Platforms</h2>
        <ul>
          <li>🐙 Git & GitHub</li>
          <li>🐳 Docker</li>
          <li>☁️ Cloudways (deployment)</li>
          <li>🚀 Vercel (deployment)</li>
          <li>📦 NPM & Node Package Management</li>
        </ul>
      </section>

      {/* Additional Skills */}
      <section>
        <h2>✨ Additional Skills</h2>
        <ul>
          <li>🔧 Debugging & Troubleshooting</li>
          <li>📈 SEO & Web Performance Optimization</li>
          <li>📝 Technical Writing & Documentation</li>
          <li>🤝 Team Collaboration & Agile Familiarity</li>
        </ul>
      </section>
    </div>
  );
}

export default Skills;
