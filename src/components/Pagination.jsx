import React, { useEffect } from 'react';

export default function Pagination(props) {
    const { pages, filteredPlans, nextPage, previousPage, updateMaxPage } = props;

    useEffect(() => {
        Math.ceil(filteredPlans.length / pages.showPerPage) === 0 ? updateMaxPage(1) : updateMaxPage(Math.ceil(filteredPlans.length / pages.showPerPage))
    }, [filteredPlans, pages.showPerPage, updateMaxPage])

    return (
        <React.Fragment>
            <section className="clearfix Pagination">
                <button className="Previous" onClick={() => { previousPage(); window.scrollTo({ behavior: 'smooth', top: 600 }) }} ></button>
                <span>{pages.currentPage}</span>/<span>{pages.maxPage}</span>
                <button className="Next" onClick={() => { nextPage(); window.scrollTo({ behavior: 'smooth', top: 600 }) }} ></button>
            </section>
        </React.Fragment >
    )
}