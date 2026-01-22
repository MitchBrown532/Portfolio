import { Link } from "react-router-dom";
import DontClick from "../components/DontClick";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import "./Pages.css";

function Home() {
  const featuredProjects = [
    {
      title: "Web Scraper for Auction Sites",
      description:
        "Automates scraping of 3 auction websites, extracting lots and relevant data. Runs every 2 hours with persistent storage and time series tracking.",
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
        "Built a data extraction pipeline for RBC Bank to clean and parse inconsistently formatted .txt files during a branch acquisition.",
      image: "/img/RBC.png",
      tech: ["Python", "Regex", "Pandas", "Pytest", "Git"],
      github: null,
      demo: null,
    },
    {
      title: "CRUD App",
      description:
        "Full-stack app demonstrating CRUD operations with pagination, filtering, testing, and CI/CD via GitHub Actions.",
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
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Mitchell Brown</h1>
          <p className="hero-subtitle">Full-Stack Developer | Game Dev Enthusiast | Music Creator</p>
          <p className="hero-description">
            Building clean, performant web experiences and exploring the intersection of code, design, and user experience.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn About Me
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="home-about-section">
        <div className="home-about-content">
          <div className="home-about-image">
            <img
              src="/img/Mitch.jpg"
              alt="Mitchell Brown"
            />
          </div>
          <div className="home-about-text">
            <h2>About Me</h2>
            <p>
              I'm Mitchell Brown, a full-stack developer educated at Wilfrid Laurier with a BSc in Computer Science and a minor in Philosophy. I'm passionate about building clean, performant applications and exploring the intersection of code and thoughtful design.
            </p>
            <p>
              Beyond coding, I enjoy creating music and developing video games. I believe in continuous learning, pragmatic problem-solving, and writing code that's not just functional, but maintainable and a joy to work with.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML/CSS, Vite</p>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🐍</span>
            <h3>Backend</h3>
            <p>Python, Flask, SQL</p>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🧰</span>
            <h3>Tools</h3>
            <p>Git, Docker, pytest, GitHub Actions</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="featured-projects-section">
          <div className="container">
            <h2>Featured Projects</h2>
            <p className="section-subtitle">Showcasing some of my recent work</p>
            <div className="featured-projects-grid">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tech={project.tech}
                  github={project.github}
                />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link to="/projects" className="btn btn-secondary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <h2>Explore</h2>
        <div className="links-grid">
          <Link to="/about" className="link-card">
            <div className="link-icon">👤</div>
            <h3>About</h3>
            <p>Learn more about my background and interests</p>
          </Link>
          <Link to="/projects" className="link-card">
            <div className="link-icon">📁</div>
            <h3>Projects</h3>
            <p>Check out my recent work and portfolio</p>
          </Link>
          <Link to="/contact" className="link-card">
            <div className="link-icon">✉️</div>
            <h3>Contact</h3>
            <p>Reach out and let's talk!</p>
          </Link>
        </div>
      </section>

      <DontClick>Don't Click</DontClick>
    </div>
  );
}

export default Home;
