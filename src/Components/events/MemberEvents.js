import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchMemberEvents, fetchMember } from "../../actions";

class MemberEvents extends Component {
  componentDidMount = () => {
    const { match } = this.props;
    this.props.fetchMemberEvents(match.params.id);
    this.props.fetchMember(match.params.id);
  }

  showMemberEvents(){
    const { events, match } = this.props;
    console.log(events);
    return events.map(event => {
      return (
        <div key={event.event_id}>
          <Link to={`/members/${match.params.id}/events/${event.event_id}`}>{event.event}</Link>
        </div>
      );
    });

  } 

  render() {
    const {member} = this.props;
    return (
      <div className="border border-danger w-50">
        <div className="border border-primary w-75">
          <h1>{member.name}</h1>
          <h3>Events</h3>
        </div>
        <div className="border border-warning w-75">
          {this.showMemberEvents()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.memberEvents,
  guild: state.guild,
  member: state.member
})

export default connect(
  mapStateToProps,
  {fetchMemberEvents, fetchMember}
)(MemberEvents);