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
    const { guildMembers } = this.props;
    return guildMembers.map(member => {
      return (
        <div key={member.id}>
          <Link to={`/members/${member.id}/events`}>{member.name}</Link>
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
            <h1>{guild.name}</h1>
          </div>
          <div className="border border-warning w-75">
            <h3>Members</h3>
            {!this.props.guildMembers ? "loading" : this.showGuildMembers()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ guild, guildMembers }) => {
  return {
    guild,
    guildMembers
  };
};

export default connect(
  mapStateToProps,
  { fetchGuild, fetchGuildMembers }
)(GuildShow);
