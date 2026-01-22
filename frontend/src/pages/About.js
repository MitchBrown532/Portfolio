import SkillCard from "../components/SkillCard";
import "./Pages.css";

function About() {
  return (
    <div className="container about-page">
      <h1>About Me</h1>

      {/* About Card */}
      <section className="about-card">
        <div className="about-image">
          <img
            src="/img/Mitch.jpg"
            alt="A very handsome portrait of Mitchell Brown, the creator of this website"
          />
        </div>

        <div className="about-bio">
          <p>
            Hi, I'm <strong>Mitchell Brown</strong>, educated at Wilfrid Laurier with a BSc in Computer Science minor in philosophy. I'm an early-career software developer looking to learn and grow and build. I like creating music and developing video games.
          </p>
          <p>
            I enjoy building clean, performant web experiences and exploring the intersection of code, design, and thoughtful user experiences. Outside of work, you'll find me experimenting with game dev, making music, and tinkering with new tools.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <h2>Skills & Interests</h2>
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
      </section>

      {/* Socials & Resume */}
      <section className="about-socials-card">
        <h3>Find me online</h3>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/mitchell-brown-4a526b231/" target="_blank" rel="noopener noreferrer">
            <img src="/img/linkedin.svg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/mitchbrown532" target="_blank" rel="noopener noreferrer">
            <img src="/img/github.svg" alt="GitHub" />
            <span>GitHub</span>
          </a>
          <a href="mailto:mitchbrown532@gmail.com">
            <img src="/img/email.svg" alt="Email" />
            <span>Email</span>
          </a>
          <a href="/resume" target="_blank" rel="noopener noreferrer">
            <img src="/img/resume.svg" alt="Resume" />
            <span>Resume</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
