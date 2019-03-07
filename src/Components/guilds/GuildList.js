import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGuilds } from "../../actions";
import { Link } from "react-router-dom";

class GuildList extends Component {
  componentDidMount = () => {
    this.props.fetchGuilds();
  };

  showGuilds() {
    const { guilds } = this.props;
    return guilds.map(guild => {
      return (
        <div>
          <Link to={`/guilds/${guild.id}`} key={guild.id}>
            {guild.name}
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="border border-danger w-50">
        <div className="border border-primary w-75">
          <h1>guilds </h1>
        </div>
        <div className="border border-warning w-50">
          {!this.props.guilds ? "loading" : this.showGuilds()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    guilds: state.guilds
  };
};

export default connect(
  mapStateToProps,
  { fetchGuilds }
)(GuildList);
