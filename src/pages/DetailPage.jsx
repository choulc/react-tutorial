import React from 'react';
import { useParams } from 'react-router-dom';
import DetailHeader from '../components/DetailHeader';
import DetailPlan from '../components/DetailPlan';
import Footer from '../components/Footer';

export default function DetailPage() {
    const { planId } = useParams();
    return (
        <React.Fragment>
            <section className="wrapper">
                <DetailHeader />
                <DetailPlan />
                <Footer />
            </section>
            <div className="topup"></div>
        </React.Fragment>
    )
}