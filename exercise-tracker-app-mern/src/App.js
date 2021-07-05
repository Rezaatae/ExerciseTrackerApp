import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExcercise} />
      <Route path="/create" component={CreateExcercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
