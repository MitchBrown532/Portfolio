import React from "react";
import "./Pages.css";

function Resume() {
  return (
    <div className="container resume-page">
      <h1>Resume</h1>

      {/* Embedded PDF */}
      <iframe
        src="/assets/resume.pdf"
        width="100%"
        height="800px"
        style={{ border: "none", marginTop: "1rem" }}
        title="Resume"
      />

      {/* Download button */}
      <div style={{ marginTop: "1rem" }}>
        <a href="/assets/resume.pdf" download className="resume-download">
          ⬇️ Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
