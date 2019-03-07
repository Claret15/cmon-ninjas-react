import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGuilds } from "../../actions";

class GuildList extends Component {
  componentDidMount = () => {
    this.props.fetchGuilds();
  };

  showGuilds() {
    const { guilds } = this.props;
    return guilds.map(guild => {
      return (
        <div key={guild.id}>
          <Link to={`/guilds/${guild.id}`}>{guild.name}</Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="border border-danger w-50">
        <div className="border border-primary w-75">
          <h1>Guilds </h1>
        </div>
        <div className="border border-warning w-50">
          <h3>Show Guilds</h3>
          {!this.props.guilds ? "loading" : this.showGuilds()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ guilds }) => {
  return {
    guilds: guilds.guilds
  };
};

export default connect(
  mapStateToProps,
  { fetchGuilds }
)(GuildList);
