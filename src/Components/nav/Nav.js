import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ninja from "../home/ninja.png";
import "./nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark mb-4">
        <NavLink className="navbar-brand" to="/">
          <img src={ninja} alt="ninja" height="40" className="img-ninja" />
        </NavLink>
        <div className="navbar-buttons">
          <NavLink to="/guilds/1" className="btn btn-danger btn-md mx-3">
            <i className="fas fa-torii-gate" />
            <strong>&nbsp; Members</strong>
          </NavLink>
          <NavLink to="/guilds/1/events" className="btn btn-danger btn-md mx-3">
            <i className="fas fa-calendar-alt fa-lg" />
            <strong>&nbsp; Events</strong>
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
