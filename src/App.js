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
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(9);

  const [eduLevel, setEduLevel] = useState([]);
  const [subjects, setSubjects] = useState({});
  const [counties, setCounties] = useState([]);

  const [selectedEduLevel, setSelectedEduLevel] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [searchResult, setSearchResult] = useState({ selectedEduLevel, selectedSubject, selectedCounty, selectedKeyword });

  const [planLookupTable, setPlanLookupTable] = useState({});

  useEffect(() => {
    const getPlans = async () => {
      const result = await axios.get('/lesson-plans.json');
      setPlanItems(result.data);
      setFilteredPlans(result.data);
      setMaxPage(Math.ceil(result.data.length / showPerPage));

      const tempLookupTable = {};
      result.data.forEach(plan => { tempLookupTable[plan.id] = plan });
      setPlanLookupTable(tempLookupTable);
    }

    const getEdu = async () => {
      const result = await axios.get('/education-levels.json');
      setEduLevel(result.data);
    }

    const getSubjects = async () => {
      const result = await axios.get('/subjects.json');
      setSubjects(result.data);
    }

    const getCounties = async () => {
      const result = await axios.get('/counties.json');
      setCounties(result.data);
    }

    getPlans();
    getEdu();
    getSubjects();
    getCounties();
  }, [showPerPage])



  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MasterPage
            planItems={planItems}
            filteredPlans={filteredPlans}
            setFilteredPlans={setFilteredPlans}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={maxPage}
            setMaxPage={setMaxPage}
            showPerPage={showPerPage}
            eduLevel={eduLevel}
            subjects={subjects}
            counties={counties}
            selectedEduLevel={selectedEduLevel}
            setSelectedEduLevel={setSelectedEduLevel}
            selectedSubjects={selectedSubjects}
            setSelectedSubjects={setSelectedSubjects}
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
            selectedCounty={selectedCounty}
            setSelectedCounty={setSelectedCounty}
            selectedKeyword={selectedKeyword}
            setSelectedKeyword={setSelectedKeyword}
            searchResult={searchResult}
            setSearchResult={setSearchResult}
          />
        </Route>
        <Route path="/plan/:planId">
          <DetailPage
            planLookupTable={planLookupTable}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
