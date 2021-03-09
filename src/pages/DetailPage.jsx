import React from 'react';
import { useParams } from 'react-router-dom';
import DetailHeader from '../components/DetailHeader';
import DetailPlan from '../components/DetailPlan';
import Footer from '../components/Footer';

export default function DetailPage(props) {
    const { planLookupTable } = props;
    const { planId } = useParams();
    return (
        <React.Fragment>
            <section className="wrapper">
                <DetailHeader />
                <DetailPlan
                    plan={planLookupTable[planId]}
                />
                <Footer />
            </section>
            <div className="topup" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}></div>
        </React.Fragment>
    )
}