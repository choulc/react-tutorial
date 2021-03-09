import React from 'react';

export default function Pagination(props) {
    const { currentPage, setCurrentPage, maxPage } = props;
    return (
        <React.Fragment>
            <section class="clearfix Pagination">
                <button class="Previous" onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : null}></button>
                <span>{currentPage}</span>/<span>{maxPage}</span>
                <button class="Next" onClick={() => currentPage < maxPage ? setCurrentPage(currentPage + 1) : null}></button>
            </section>
        </React.Fragment>
    )
}