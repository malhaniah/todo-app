import React from "react";
import { useNavigate } from "react-router-dom";

// imports all components from the components folder
import { Button, HeadingText } from "../components";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-container">
      <HeadingText>Todo App</HeadingText>
      <p className="sub-text">This app solves your daily problems</p>
      <Button onClick={() => navigate("/dashboard")}>Get Started</Button>
    </section>
  );
}

export default Home;
