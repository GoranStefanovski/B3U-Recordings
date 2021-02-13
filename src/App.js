import React from "react";
import Header from "./Header";
import WidgetsRow from "./WidgetsRow";
import './App.css';
import Footer from "./Footer";
import Artists from "./Artists";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/home'>

            <WidgetsRow />

          </Route>

          <Route path="/artists">

            <Artists />

          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>


      <Footer />
    </div>
  );
}

export default App;
