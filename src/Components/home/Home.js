import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
      <h3>Ninjas - LGOH Guild</h3>
      <Link to="/guilds">Enter</Link>
    </div>
  );
};

export default Home;
