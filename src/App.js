import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main";

const App = () => {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <Route component={Main} />
      </Router>
  );
};

export default App;
