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
            <section class="wrapper">
                <Header />
                <KeyVisual />
                <section class="cw-main">
                    <SearchBar />
                    <Plans />
                    <Pagination />
                </section>
                <Footer />
            </section>
        </React.Fragment>
    )
}