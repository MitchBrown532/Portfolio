import { useState } from "react";
import "./Pages.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Fallback to mailto if backend endpoint not present or returns error
        setStatus("fallback");
        const mailto = `mailto:mitchbrown532@gmail.com?subject=${encodeURIComponent(
          `Contact from ${name || email}`
        )}&body=${encodeURIComponent(message + "\n\nFrom: " + (name || "") + " <" + (email || "") + ">")}`;
        window.location.href = mailto;
      }
    } catch (err) {
      setStatus("fallback");
      const mailto = `mailto:mitchbrown532@gmail.com?subject=${encodeURIComponent(
        `Contact from ${name || email}`
      )}&body=${encodeURIComponent(message + "\n\nFrom: " + (name || "") + " <" + (email || "") + ">")}`;
      window.location.href = mailto;
    }
  }

  return (
    <div className="container contact-page">
      <h1>Contact Me</h1>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>
            Message
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} required />
          </label>

          <button type="submit" className="btn">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && <p className="success">Thanks — your message was sent.</p>}
          {status === "fallback" && (
            <p className="warning">Couldn't reach backend — opening your mail client instead.</p>
          )}
        </form>

        <aside className="contact-aside">
          <p>Or reach me directly via:</p>
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
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Contact;