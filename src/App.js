import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Detail } from './Detail';
import { Birds } from './Birds';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/birds"> All Birds </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/birds">
          <Birds />
        </Route>

        <Route exact path="/birds/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
