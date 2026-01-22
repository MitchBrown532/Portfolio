import { Link } from "react-router-dom";
import "./Pages.css";

function NotFound() {
  return (
    <div className="container not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! You are lost! Go elsewhere - you aren't supposed to see this</p>
        <Link to="/" className="not-found-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
