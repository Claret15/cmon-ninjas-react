import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGuild, fetchGuildMembers } from "../../actions";
import styles from "./guildshow.module.scss";
import Card from "../../Components/card/card";

class GuildShow extends Component {
  componentDidMount = () => {
    const { fetchGuild, fetchGuildMembers, match } = this.props;
    if (fetchGuild.length === 0) {
      fetchGuild(match.params.id);
    }
    fetchGuildMembers(match.params.id);
  };

  render() {
    const { guildMembers } = this.props;
    const members = guildMembers.map(member => {
      return (
        <Link to={`/members/${member.id}/events`} key={member.id}>
          <Card>
            <strong>
              {member.name}
            </strong>
          </Card>
        </Link>
      );
    });

    return (
      <div className="container">
        <div className="text-center">
          <h1 className="text-center">
            <i className="fas fa-torii-gate fa-2x" />
          </h1>
          <h1 className={styles.heading}>Guild Members</h1>
        </div>
        <div className={styles.members_grid}>
          {!this.props.guildMembers ? "loading" : members}
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
