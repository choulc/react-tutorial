import React from 'react';
import DetailHeader from '../components/DetailHeader';
import DetailPlan from '../components/DetailPlan';
import Footer from '../components/Footer';

export default function DetailPage() {
    return (
        <React.Fragment>
            <section class="wrapper">
                <DetailHeader />
                <DetailPlan />
                <Footer />
            </section>
            <div class="topup"></div>
        </React.Fragment>
    )
}