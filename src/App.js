import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main";

const App = () => {
  return (
      <Router>
          <Route component={Main} />
      </Router>
  );
};

export default App;
