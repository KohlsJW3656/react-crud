import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from './Home';
import {Add} from './Add';
import {Edit} from './Edit';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/add"><Add /></Route>
          <Route path="/edit/:id/:name/:email/:major"><Edit /></Route>
        </Switch>
      </Router>
    </div>
  );
}
