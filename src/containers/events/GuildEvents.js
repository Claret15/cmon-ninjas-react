import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./GuildEvents.module.scss";
import { Table, Header, Body } from "../../Components/table/table";
import {fetchEventsList, fetchGuild} from "../../actions";

class GuildEvents extends Component {
  componentDidMount = () => {
    const { match, fetchGuild, fetchEventsList } = this.props;
    if(fetchGuild.length === 0){
      fetchGuild(match.params.id);
    }
    fetchEventsList();
  }

  render() {
    const {events, match } = this.props;
    const eventsList = events.map(event => {
        return (
          <tr key={event.id}>
            <td>
              <Link to={`/guilds/${match.params.id}/events/${event.id}`}>{event.name}</Link>
            </td>
            <td>
              {event.event_type}
            </td>
            <td>
              {event.event_date}
            </td>
          </tr>
        );
      });

    return (
      <main className="container">
        <section className="text-center">
          <h1 className={styles.heading}>Events</h1>
        </section>
        <section className={styles.events}>
          <article className="table-responsive">
            <Table small>
              <Header>
                <th>Event</th>
                <th>Type</th>
                <th>Date</th>
              </Header>
              <Body>
                {eventsList}
              </Body>
            </Table>
          </article> 
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  guild : state.guild
});

export default connect(
  mapStateToProps,
  {fetchGuild, fetchEventsList}
)(GuildEvents);
