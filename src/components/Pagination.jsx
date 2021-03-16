import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { previousPage, nextPage, updateMaxPage } from '../reducers/pagesSlice'
import { selectFilteredPlans } from '../reducers/plansSlice'

export default function Pagination() {

    const dispatch = useDispatch();

    const pages = useSelector(state => state.pages);
    const filteredPlans = useSelector(selectFilteredPlans)

    useEffect(() => {
        Math.ceil(filteredPlans.length / pages.showPerPage) === 0 ? dispatch(updateMaxPage(1)) : dispatch(updateMaxPage(Math.ceil(filteredPlans.length / pages.showPerPage)))
    }, [filteredPlans, pages.showPerPage, dispatch])

    const onPreviousCkicked = () => {
        dispatch(previousPage());
        window.scrollTo({ behavior: 'smooth', top: 600 });
    }

    const onNextClicked = () => {
        dispatch(nextPage());
        window.scrollTo({ behavior: 'smooth', top: 600 });
    }


    return (
        <React.Fragment>
            <section className="clearfix Pagination">
                <button className="Previous" onClick={onPreviousCkicked} ></button>
                <span>{pages.currentPage}</span>/<span>{pages.maxPage}</span>
                <button className="Next" onClick={onNextClicked} ></button>
            </section>
        </React.Fragment >
    )
}