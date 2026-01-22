import { useNavigate } from "react-router-dom";
import "./HomeCard.css"; 

function HomeCard({ title, image, description, path }) {
  const navigate = useNavigate(); 

  function handleClick() {
    navigate(path); 
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
