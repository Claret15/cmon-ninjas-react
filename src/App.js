import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Main from "./Components/Main";

const App = () => {
  return (
      <Router>
          <Route component={Main} />
      </Router>
  );
};

export default App;
