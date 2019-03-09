import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./nav/Nav";
import MemberEvents from "./events/MemberEvents.js";
import MemberEventStats from "../containers/event-stats/MemberEventStats";

const Member = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/members/:id/events" component={MemberEvents} />
        <Route exact path="/members/:m_id/events/:e_id" component={MemberEventStats} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Member;
