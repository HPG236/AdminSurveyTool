import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Survey from "./pages/Survey";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/survey" component={Survey} />
      </Switch>
    </Router>
  );
}

export default App;
