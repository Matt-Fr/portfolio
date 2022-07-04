import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Hey my name is Matthieu FR, check out my projects</h1>
      <Link to="/projects">View Projects</Link>
    </section>
  );
};

export default Home;
