import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMemberEventStat } from "../../actions";

class MemberEventStats extends Component {
  componentDidMount = () => {
    const { match } = this.props;
    this.props.fetchMemberEventStat(match.params.m_id, match.params.e_id);
  };

  render() {
    const { memberEventStat } = this.props;
    console.log(this.props);
    return (
      <div className="border border-danger w-50">
        <div className="border border-primary w-75">
          <h1>{memberEventStat.name}</h1>
          <Link to={`/guilds/${memberEventStat.guild_id}/events/${memberEventStat.event_id}`} key={"2"}>
            <h2>{memberEventStat.event}</h2>
          </Link>
          <h3>{memberEventStat.event_type}</h3>
        </div>
        <div className="border border-warning w-50">
          <h3>Show Event Stats in a table.</h3>
        </div>
        <div className="border border-primary w-50">
          <p>Display chart</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  memberEventStat: state.memberEventStat
});

export default connect(
  mapStateToProps,
  { fetchMemberEventStat }
)(MemberEventStats);
