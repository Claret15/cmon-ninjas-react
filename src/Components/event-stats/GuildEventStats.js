import React, { Component } from "react";
import { connect } from "react-redux";

class GuildEventStats extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="border border-danger w-50">
        <div className="border border-primary w-75">
          <h1>Ninjas </h1>
          <h3>Event Name</h3>
        </div>
        <div className="border border-warning w-50">
          <h3>Show All members event stats in a table.</h3>
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
)(GuildEventStats);
