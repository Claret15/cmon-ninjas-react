import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <NavLink to="/guilds/1">
          <button>Members</button>
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/guilds/1/events">
          <button>Events</button>
        </NavLink>
      </div>
    );
  }
}

export default Nav;
