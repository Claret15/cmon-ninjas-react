import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class GuildShow extends Component {
  render() {
    return (
      <div>
        <div className="border border-danger w-75">
          <div className="border border-primary w-75">
            <h1>Show selected guild</h1>
          </div>
          <div className="border border-warning w-75">
            <p>Show cards of guild members</p>
            <p>Each card can be clicked to view guild member</p>
            <Link to={`/members/1/events`} key={"2"}>
              {"Member Name"}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuildShow);
