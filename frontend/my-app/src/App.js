import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hello from "./Pages/Hello";
import Changed from "./Pages/Changed";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Hello} />
      <Route exact path="/changed" component={Changed} />
    </Router>
  );
}

export default App;
