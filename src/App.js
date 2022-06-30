import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Detail from './Detail';
import Birds from './Birds';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import AuthPage from './AuthPage';
import { signOut } from './services/fetch-utils';

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  async function handleLogout() {
    await signOut();
    setToken('');
  }

  return (
    <Router>
      <div>
        {token ? (
          <ul>
            <li>
              <Link to="/birds"> All Birds </Link>
            </li>
            <li>
              <Link to="/birds/create"> Create a New Bird! </Link>
            </li>
            <button onClick={handleLogout}> Log Out</button>
          </ul>
        ) : (
          ''
        )}
      </div>

      <Switch>
        <Route exact path="/">
          {token ? <Birds /> : <AuthPage setToken={setToken} />}
        </Route>
        <Route exact path="/birds">
          {token ? <Birds /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/birds/create">
          {token ? <CreatePage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/birds/:id">
          {token ? <Detail /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/birds/update/:id">
          {token ? <UpdatePage /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
