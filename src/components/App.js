import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import { routes } from "../routes";

function App() {
  return (
    <Router>
      <Header />
      {routes}
    </Router>
  );
}

export default App;
