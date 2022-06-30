import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from './Detail';
import Birds from './Birds';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/birds"> All Birds </Link>
          </li>
          <li>
            <Link to="/birds/create"> Create a New Bird! </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/birds">
          <Birds />
        </Route>

        <Route exact path="/birds/create">
          <CreatePage />
        </Route>
        <Route exact path="/birds/:id">
          <Detail />
        </Route>
        <Route exact path="/birds/update/:id">
          
          <UpdatePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
