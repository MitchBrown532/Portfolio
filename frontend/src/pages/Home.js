import React from "react";
import HomeCard from "../components/HomeCard";
import DontClick from "../components/DontClick";
import "./Pages.css";

function Home() {
  // Placeholder data - will need to update
  const homeCards = [
    {
      title: "About",
      image: "/img/about-me.png",
      description: "A brief intro about me.",
      path: "/about",
    },
    {
      title: "Skills",
      image: "/img/skills.png",
      description: "A concise detailing of my skills.",
      path: "/skills",
    },
    {
      title: "Projects",
      image: "/img/projects.png",
      description: "Some of my favorite projects, showcasing my work.",
      path: "/projects",
    },
  ];

  return (
    <div>
      <div className="home-page">
        <h1 className="home-title">Welcome to My Portfolio!</h1>
        <p className="home-description">
          Hi, my name is Mitchell. I'm a recent graduate from my studies in
          Computer Science and Philosophy, an amateur full-stack developer, and
          an avid enjoyer of music production. Explore my projects and learn
          more about me :)
        </p>
      </div>
      <div className="card-grid">
        {homeCards.map((card, index) => (
          <HomeCard
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            path={card.path} // Pass the path as a prop
          />
        ))}
      </div>
      <DontClick>Don't Click</DontClick>
    </div>
  );
}

export default Home;
