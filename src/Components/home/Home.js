import React from "react";
import { Link } from "react-router-dom";
import ninja from "./ninja.png";
import "./home.scss";

const Home = () => {
  return (
    <div className="ninja">
      <div className="intro d-inline-flex flex-column justify-content-end">
        <div className="mx-auto">
          <img src={ninja} alt="ninjas guild"/>
        </div>
        <div className="mx-auto p-4">
          <Link to="/guilds/1/events">
            <button className="enter-button">Enter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
