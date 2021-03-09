import React from 'react';
import './assets/css/reset.css';
import './assets/css/header.css';
import './assets/css/layout.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MasterPage from './pages/MasterPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MasterPage />
        </Route>
        <Route path="/plan/:planId">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
