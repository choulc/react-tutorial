import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import KeyVisual from '../components/KeyVisual';
import Pagination from '../components/Pagination';
import Plans from '../components/Plans';
import SearchBar from '../components/SearchBar';

export default function MasterPage(props) {
    const { planItems, filteredPlans, setFilteredPlans, currentPage, setCurrentPage, maxPage, setMaxPage, showPerPage, eduLevel, subjects, counties, selectedEduLevel, setSelectedEduLevel, selectedSubjects, setSelectedSubjects, selectedSubject, setSelectedSubject, selectedCounty, setSelectedCounty, selectedKeyword, setSelectedKeyword, searchResult, setSearchResult } = props;
    return (
        <React.Fragment>
            <section className="wrapper">
                <Header />
                <KeyVisual />
                <section className="cw-main">
                    <SearchBar
                        planItems={planItems}
                        filteredPlans={filteredPlans}
                        setFilteredPlans={setFilteredPlans}
                        setCurrentPage={setCurrentPage}
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
                    <Plans
                        filteredPlans={filteredPlans}
                        currentPage={currentPage}
                        showPerPage={showPerPage}
                    />
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        maxPage={maxPage}
                        setMaxPage={setMaxPage}
                        showPerPage={showPerPage}
                        filteredPlans={filteredPlans}
                    />
                </section>
                <Footer />
            </section>
            <div className="topup"></div>
        </React.Fragment>
    )
}