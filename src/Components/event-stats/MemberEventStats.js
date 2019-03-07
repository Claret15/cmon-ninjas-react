import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MemberEventStats extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="border border-danger w-50">
        <div className="border border-primary w-75">
          <h1>Member Name </h1>
          <Link to={`/guilds/:id/events/:id`} key={"2"}>
            <h3>Event Name</h3>
          </Link>
        </div>
        <div className="border border-warning w-50">
          <h3>Show Event Stats in a table.</h3>
        </div>
        <div className="border border-primary w-50">
          <p>Display chart</p>
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
)(MemberEventStats);
