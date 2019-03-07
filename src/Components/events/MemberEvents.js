import React, { Component } from "react";
import { Link } from "react-router-dom";

class MemberEvents extends Component {
  render() {
    return (
      <div className="border border-danger w-50">
        <div className="border border-primary w-75">
          <h1>Member Name </h1>
          <h3>Events</h3>
        </div>
        <div className="border border-warning w-75">
          <h3>Show Member's Events</h3>
          <p>Display events they have participated in</p>
          <p>Table will show event name and their stat</p>
        </div>
        <Link to={`/members/1/events/1`} key={"2"}>
          {"Event Name"}
        </Link>
      </div>
    );
  }
}

export default MemberEvents;
