import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "../Components/nav/Nav";
import MemberEvents from "../Components/events/MemberEvents.js";
import MemberEventStats from "../Components/event-stats/MemberEventStats";

const Member = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/members/:id/events" component={MemberEvents} />
        <Route exact path="/members/:id/events/:id" component={MemberEventStats} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Member;
