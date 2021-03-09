import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import KeyVisual from '../components/KeyVisual';
import Pagination from '../components/Pagination';
import Plans from '../components/Plans';
import SearchBar from '../components/SearchBar';

export default function MasterPage(props) {
    const { filteredPlan, currentPage, setCurrentPage, maxPage, setMaxPage, showPerPage } = props;
    return (
        <React.Fragment>
            <section class="wrapper">
                <Header />
                <KeyVisual />
                <section class="cw-main">
                    <SearchBar />
                    <Plans
                        filteredPlan={filteredPlan}
                        currentPage={currentPage}
                        showPerPage={showPerPage}
                    />
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        maxPage={maxPage}
                    />
                </section>
                <Footer />
            </section>
            <div class="topup"></div>
        </React.Fragment>
    )
}