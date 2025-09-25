import React from "react";
import "./Pages.css"; // ensure shared styles apply

function About() {
  return (
    <div className="container about-page">
      <h1>About Me</h1>
      <p>
        Hi, I’m <strong>Mitchell Brown</strong>, a software developer with a
        background in
        <strong> Computer Science and Philosophy (B.Sc.)</strong>. I specialize
        in building full-stack applications using <strong>React</strong>,{" "}
        <strong>Flask</strong>, and
        <strong> Docker</strong>, and I’m passionate about applying{" "}
        <strong>AI and automation</strong>
        to solve real-world problems.
      </p>
      <p>
        I’ve worked on projects ranging from <em>portfolio websites</em> to
        <em> AI-powered business tools</em>, and I’ve also consulted with
        companies on emerging technologies. My strengths include quickly
        learning new frameworks, designing clean user experiences, and writing
        maintainable, scalable code.
      </p>
      <p>
        Outside of coding, I enjoy{" "}
        <em>music production, creative writing, and watching movies</em>. I’m
        actively looking for opportunities where I can contribute to impactful
        software projects and grow alongside experienced developers.
      </p>

      <div className="about-links">
        <a href="/resume" target="_blank" rel="noopener noreferrer">
          📄 Resume
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/MitchBrown532"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://linkedin.com/in/mitchell-brown-4a526b231"
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
