import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Body } from "../../Components/table/table";
import styles from "./MemberEventStats.module.scss";
import { fetchMemberEventStat, clearMemberEventStat } from "../../actions";

class MemberEventStats extends Component {
  componentDidMount = () => {
    const { match } = this.props;
    this.props.fetchMemberEventStat(match.params.m_id, match.params.e_id);
  };

  componentWillUnmount = () => {
    this.props.clearMemberEventStat();
  };

  render() {
    const { memberEventStat, match} = this.props;
    
    return (
      <main className="container">
        <section className="text-center">
          <h1 className={styles.heading}>{memberEventStat.event}</h1>
          <h3>{memberEventStat.event_type}</h3>
            <h2>
              <Link to={`/members/${match.params.m_id}/events`}>
                {memberEventStat.name}
              </Link>
            </h2>
        </section>
        <section className={styles.event_stats}>
        <Table>
            <Body>
              <tr>
                <th>Pos.</th>
                <td>{memberEventStat.position}</td>
              </tr>
              <tr>
                <th>Guild Pts.</th>
                <td>
                  {memberEventStat.guild_pts === undefined ? null : memberEventStat.guild_pts.toLocaleString()}
                </td>
              </tr>
              <tr>
                <th>Solo Pts.</th>
                <td>
                  {memberEventStat.solo_pts === undefined ? null : memberEventStat.solo_pts.toLocaleString()}
                </td>
              </tr>
              <tr>
                <th>G/S</th>
                <td>{Math.round((memberEventStat.solo_pts / memberEventStat.guild_pts)*100)/100}</td>
              </tr>
              <tr>
                <th>League</th>
                <td>{memberEventStat.league}</td>
              </tr>
              <tr>
                <th>Solo Rank</th>
                <td>{memberEventStat.solo_rank}</td>
              </tr>
              <tr>
                <th>Global Rank</th>
                <td>
                  {memberEventStat.global_rank === undefined ? null : memberEventStat.global_rank.toLocaleString()}
                </td>
              </tr>
              <tr>
                <th>Perf.</th>
                <td>Calculation needed</td>
              </tr>
            </Body>
          </Table>

        </section>
        {/* <section className="border border-primary w-75 mx-auto">
          <p>Display chart</p>
        </section> */}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  memberEventStat: state.memberEventStat
});

export default connect(
  mapStateToProps,
  { fetchMemberEventStat, clearMemberEventStat }
)(MemberEventStats);
