import React from "react";
import "./Pages.css";

function About() {
  return (
    <div className="about-page">
      <img
        src={`${process.env.PUBLIC_URL}/img/Mitch.jpg`}
        alt="Photo of Mitchell"
        className="about-image"
      />
      <h1>About Me</h1>
      <section className="about-introduction">
        <p>
          Hello! I'm [Your Name], a [Job Title] passionate about creating
          engaging, user-friendly web experiences. My journey into tech started
          [brief summary of how you started]...
        </p>
      </section>

      <section className="about-experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Company A</strong> - Software Developer (2022 - Present)
          </li>
          <li>
            <strong>Company B</strong> - Front-End Intern (2021)
          </li>
          <li>
            <strong>University of XYZ</strong> - B.Sc. in Computer Science
            (Graduated 2020)
          </li>
        </ul>
      </section>

      <section className="about-skills">
        <h2>Skills</h2>
        <p>React, JavaScript, Python, SQL, HTML/CSS, Git, and more.</p>
      </section>

      <section className="about-interests">
        <h2>Interests</h2>
        <p>
          Outside of work, I enjoy [mention hobbies, e.g., music production,
          hiking, playing chess].
        </p>
      </section>
    </div>
  );
}

export default About;
