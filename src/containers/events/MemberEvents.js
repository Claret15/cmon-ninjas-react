import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Header, Body } from "../../Components/table/Table";
import styles from "./MemberEvents.module.scss";
import { fetchMemberEvents, fetchMember, clearMember } from "../../actions";

class MemberEvents extends Component {
  componentDidMount = () => {
    const { match } = this.props;
    this.props.fetchMemberEvents(match.params.id);
    this.props.fetchMember(match.params.id);
  };

  componentWillUnmount = () => {
    this.props.clearMember();
  };

  render() {
    const { events, member, match } = this.props;

    const eventRows = events.map(event => {
      return (
        <tr key={event.event_id}>
          <td>
            <Link to={`/members/${match.params.id}/events/${event.event_id}`}>
              {event.event}
            </Link>
          </td>
          <td>{event.position}</td>
          <td>{event.guild_pts.toLocaleString()}</td>
          <td>{event.solo_pts.toLocaleString()}</td>
          <td>{event.league}</td>
          <td>{event.solo_rank}</td>
          <td>{event.global_rank.toLocaleString()}</td>
        </tr>
      );
    });

    return (
      <main className="container">
        <section className="text-center">
          <h1>
            <i className="fas fa-user-ninja fa-2x mb-2" />
          </h1>
          <h2 className={styles.heading}>{member.name}</h2>
        </section>
        <section className={styles.member_events}>
          <article className="table-responsive">
            <Table>
              <Header dark>
                <th>Event</th>
                <th>Pos.</th>
                <th>Guild Pts</th>
                <th>Solo Pts</th>
                <th>League</th>
                <th>Solo Rank</th>
                <th>Global Rank</th>
              </Header>
              <Body>{eventRows}</Body>
            </Table>
          </article>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  events: state.memberEvents,
  guild: state.guild,
  member: state.member
});

export default connect(
  mapStateToProps,
  { fetchMemberEvents, fetchMember, clearMember }
)(MemberEvents);
