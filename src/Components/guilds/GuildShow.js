import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGuild, fetchGuildMembers } from "../../actions";

class GuildShow extends Component {
  componentDidMount = () => {
    const { fetchGuild, fetchGuildMembers, match } = this.props;
    fetchGuild(match.params.id);
    fetchGuildMembers(match.params.id);
  };

  showGuildMembers() {
    const { members } = this.props;
    return members.map(member => {
      return (
        <div key={member.id}>
          <Link to={`/members/1/events`}>{member.name}</Link>
        </div>
      );
    });
  }

  render() {
    const { guild } = this.props;

    return (
      <div>
        <div className="border border-danger w-75">
          <div className="border border-primary w-75">
            <h1>Show selected guild</h1>
            <h1>{guild.name}</h1>
          </div>
          <div className="border border-warning w-75">
            <p>Show cards of guild members</p>
            <p>Each card can be clicked to view guild member</p>
            {!this.props.members ? "loading" : this.showGuildMembers()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ guild }) => {
  return {
    guild: guild.guild,
    members: guild.members
  };
};

export default connect(
  mapStateToProps,
  { fetchGuild, fetchGuildMembers }
)(GuildShow);
