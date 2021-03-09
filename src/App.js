import React, { useEffect, useState } from 'react';
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
import axios from 'axios';


function App() {

  const [planItems, setPlanItems] = useState([]);
  const [filteredPlan, setFilteredPlan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(9);

  useEffect(() => {
    const getPlans = async () => {
      const result = await axios.get('/lesson-plans.json');
      setPlanItems(result.data);
      setFilteredPlan(result.data);
      setMaxPage(Math.ceil(result.data.length / showPerPage));
    }
    getPlans();
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MasterPage
            filteredPlan={filteredPlan}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={maxPage}
            setMaxPage={setMaxPage}
            showPerPage={showPerPage}
          />
        </Route>
        <Route path="/plan/:planId">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
