import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeCard.css"; // Import CSS for styling

function HomeCard({ title, image, description, path }) {
  const navigate = useNavigate(); // Initialize useNavigate

  function handleClick() {
    navigate(path); // Navigate to the specified path
  }

  return (
    <div className="home-card" onClick={handleClick}>
      <h3 className="home-card-title">{title}</h3>
      <img src={image} alt={title} className="home-card-image" />
      <p className="home-card-description">{description}</p>
    </div>
  );
}

export default HomeCard;
