import React from 'react';
import './assets/css/reset.css';
import './assets/css/header.css';
import './assets/css/layout.css';
import MasterPage from './pages/MasterPage';

function App() {
  return (
    <React.Fragment>
      <MasterPage />
      <div class="topup"></div>
    </React.Fragment>
  );
}

export default App;
