import "./Pages.css"; 
function About() {
  return (
    <div className="container about-page">
      <h1>About Me</h1>
      <div className="about-content">
        {/* Profile Pic */}
        <img
          src="/img/Mitch.jpg"
          alt="A very handsome portrait of Mitchell Brown, the creator of this website"
        />
      </div>
      {/* Bio */}
      <p>
        Hi, I’m <strong>Mitchell Brown</strong>, educated at Wilfrid Laurier with a BSc in Computer Science minor in philosophy. I'm an early-career software developer looking to learn and grow and build. I like creating music and developing video games.
      </p>
      <div className="about-links">
        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
          📄 Resume
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/mitchbrown532"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/mitchell-brown-4a526b231/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default About;
