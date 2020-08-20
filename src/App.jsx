import React from "react";
import Home from "./Home/Home";
import Grades from "./Grades/Grades";
import NewSubmit from "./Submit/NewSubmit";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/grades" component={Grades} />
          <Route path="/submit" component={NewSubmit} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
