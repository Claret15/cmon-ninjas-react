import React, { Component } from "react";
import { connect } from "react-redux";

class GuildEvents extends Component {
  render() {
    return (
      <div>
        <div className="border border-danger w-75">
          <div className="border border-primary w-75">
            <h1>Guild Events</h1>
          </div>
          <div className="border border-warning w-75">
            <p>Show table of events for the guild</p>
            <p>Each name of the event can be clicked to view the guild stats</p>
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
)(GuildEvents);
