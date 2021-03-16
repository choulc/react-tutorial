import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import KeyVisual from '../components/KeyVisual';
import Pagination from '../components/Pagination';
import Plans from '../components/Plans';
import SearchBar from '../components/SearchBar';

export default function MasterPage() {
    return (
        <React.Fragment>
            <section className="wrapper">
                <Header />
                <KeyVisual />
                <section className="cw-main">
                    <SearchBar />
                    <Plans />
                    <Pagination />
                </section>
                <Footer />
            </section>
            <div className="topup" onClick={() => { window.scrollTo(0, 0) }}></div>
        </React.Fragment>
    )
}