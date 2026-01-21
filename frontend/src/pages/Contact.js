import React from "react";
import "./Pages.css";

function Contact() {
  return (
    <div className="container contact-page">
      <h1>Contact Me</h1>
      <p>Feel free to reach out!</p>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:mitchbrown532@gmail.com">mitchbrown532@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mitchell-brown-4a526b231/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/mitchell-brown-4a526b231/</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/mitchbrown532" target="_blank" rel="noopener noreferrer">https://github.com/mitchbrown532</a></p>
      </div>
    </div>
  );
}

export default Contact;