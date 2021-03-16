import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFilteredPlans } from '../reducers/plansSlice';

export default function Plans() {

    const filteredPlans = useSelector(selectFilteredPlans);
    const currentPage = useSelector(state => state.pages.currentPage)
    const showPerPage = useSelector(state => state.pages.showPerPage)

    return (
        <React.Fragment>
            <section>
                <div className="ytdwrap">
                    {filteredPlans.slice((currentPage - 1) * showPerPage, currentPage * showPerPage).map((plan, index) => (
                        <div className="clearfix info_item" key={plan.youtubeLink}>
                            <Link to={`plan/${plan.id}`} onClick={() => { window.scrollTo(0, 0) }}>
                                {/* <a href="casestudies.html"> */}
                                <div className={`medal icon_${plan.badge}`}></div>
                                <div className="video-shadow">
                                    <iframe
                                        width="400"
                                        height="200"
                                        src={`https://www.youtube.com/embed/${plan.youtubeLink}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={plan.youtubeLink}
                                    />
                                </div>
                                <div className="textContent">
                                    <h4>適合階段：{plan.grade}</h4>
                                    <h3>{plan.name}</h3>
                                    <p>科目：{plan.subject}</p>
                                </div>
                                {/* </a> */}
                            </Link>
                        </div>
                    ))}

                </div>
            </section>
        </React.Fragment>
    )
}