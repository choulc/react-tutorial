import React, { useEffect } from 'react';
import './assets/css/reset.css';
import './assets/css/header.css';
import './assets/css/layout.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MasterPage from './pages/MasterPage';
import DetailPage from './containers/DetailPageContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlans } from './reducers/plansSlice';
import { fetchCounties, fetchEdu, fetchSubjects } from './reducers/searchSlice';


function App() {
  const dispatch = useDispatch();
  const planStatus = useSelector(state => state.plans.status)
  const eduStatus = useSelector(state => state.search.eduStatus)
  const subjectsStatus = useSelector(state => state.search.subjectsStatus)
  const countiesStatus = useSelector(state => state.search.countiesStatus)

  useEffect(() => {
    if (planStatus === 'idle') {
      dispatch(fetchPlans())
    }
    if (eduStatus === 'idle') {
      dispatch(fetchEdu())
    }
    if (subjectsStatus === 'idle') {
      dispatch(fetchSubjects())
    }
    if (countiesStatus === 'idle') {
      dispatch(fetchCounties())
    }
  }, [planStatus, eduStatus, subjectsStatus, countiesStatus, dispatch])

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
