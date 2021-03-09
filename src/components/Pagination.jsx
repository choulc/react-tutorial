import React, { useEffect } from 'react';
export default function Pagination(props) {
    const { currentPage, setCurrentPage, maxPage, setMaxPage, showPerPage, filteredPlans } = props;

    const onPageChange = (diff) => {
        if (diff === 'previous') {
            setCurrentPage(currentPage - 1);
        } else if (diff === 'next') {
            setCurrentPage(currentPage + 1);
        }
        window.scrollTo({ behavior: 'smooth', top: 600 });
    }

    useEffect(() => {
        setMaxPage(Math.ceil(filteredPlans.length / showPerPage) === 0 ? 1 : Math.ceil(filteredPlans.length / showPerPage));
    }, [filteredPlans, showPerPage, setMaxPage])

    return (
        <React.Fragment>
            <section className="clearfix Pagination">
                <button className="Previous" onClick={currentPage > 1 ? () => { onPageChange('previous') } : null}></button>
                <span>{currentPage}</span>/<span>{maxPage}</span>
                <button className="Next" onClick={currentPage < maxPage ? () => { onPageChange('next') } : null}></button>
            </section>
        </React.Fragment >
    )
}