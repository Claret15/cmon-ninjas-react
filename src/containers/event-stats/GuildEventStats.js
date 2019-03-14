import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Header, Body } from "../../Components/table/Table";
import styles from "./GuildEventStats.module.scss";
import { fetchGuildEventStats, fetchGuild, fetchEvent } from "../../actions";

class GuildEventStats extends Component {
  componentDidMount = () => {
    const { fetchGuildEventStats, match, fetchGuild, fetchEvent } = this.props;
    const g_id = match.params.g_id;
    const e_id = match.params.e_id;
    fetchGuild(match.params.g_id);
    fetchGuildEventStats(g_id, e_id);
    fetchEvent(e_id);
  };

  render() {
    const { guildEventStats, event } = this.props;

    let totalGuildPts = guildEventStats.reduce(
      (acc, stat) => acc + stat.guild_pts,
      0
    );

    let memberStats = guildEventStats.map(stat => {
      return (
        <tr key={stat.member_id}>
          <td>{stat.position}</td>
          <td>
            <Link to={`/members/${stat.member_id}/events/${event.id}`}>
              {stat.name}
            </Link>
          </td>
          <td>{stat.guild_pts.toLocaleString()}</td>
          <td>{stat.solo_pts.toLocaleString()}</td>
          <td>{Math.round((stat.solo_pts / stat.guild_pts) * 100) / 100}</td>
          <td>{stat.league}</td>
          <td>{stat.solo_rank}</td>
          <td>{stat.global_rank.toLocaleString()}</td>
          <td>{((stat.guild_pts / totalGuildPts) * 100).toFixed(2)}%</td>
        </tr>
      );
    });

    return (
      <main className="container">
        <section className="text-center">
          <h1 className={styles.heading}>{event.name} </h1>
          <h3>{event.event_type}</h3>
        </section>
        <section className={styles.guild_stats}>
          <article className="table-responsive">
            <Table>
              <Header dark>
                <th>Pos.</th>
                <th>Member</th>
                <th>Guild Pts</th>
                <th>Solo Pts</th>
                <th>G/S</th>
                <th>League</th>
                <th>Solo Rank</th>
                <th>Global Rank</th>
                <th>Perf.</th>
              </Header>
              <Body>{memberStats}</Body>
            </Table>
          </article>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  guildEventStats: state.guildEventStats,
  guild: state.guild,
  event: state.event
});

export default connect(
  mapStateToProps,
  { fetchGuildEventStats, fetchGuild, fetchEvent }
)(GuildEventStats);
