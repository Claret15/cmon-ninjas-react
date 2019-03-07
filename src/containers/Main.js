import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/home/Home";
import Guild from "./Guild";
import Member from "./Member";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/guilds" component={Guild} />
      <Route path="/members" component={Member} />
    </Switch>
  );
};

export default Main;
