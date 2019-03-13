import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./nav/Nav";
import MemberEvents from "../containers/events/MemberEvents";
import MemberEventStats from "../containers/event-stats/MemberEventStats";

const Member = () => {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/members/:id/events" component={MemberEvents} />
        <Route exact path="/members/:m_id/events/:e_id" component={MemberEventStats} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default Member;
