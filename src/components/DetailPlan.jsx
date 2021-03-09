import React from 'react';

const DetailPlan = (props) => {
    const { plan } = props;

    const getSummary = () => {
        return { __html: plan.summary }
    }

    return (
        <React.Fragment>
            <section className="cases-main m_10em">
                <div className="share-box">
                    <ul className="share-itme l_float">
                        <li className="bk"><span className="share-01"></span></li>
                        <li> <span className="share-02">facebook</span></li>
                        <li> <span className="share-03">line</span></li>
                    </ul>
                    <ul className="share-itme r_float">
                        <li><span className="share-04">翰林出版</span></li>
                        <li><span className="share-05">天下雜誌</span></li>
                    </ul>
                </div>
                <h3 className="clearfix">{plan ? plan.name : null}</h3>
                <div className="intro_box">
                    <ul className="w_40">
                        <li><span>適合階段：</span>{plan ? plan.grade : null}</li>
                        <li><span> 年度：</span>{plan ? plan.year : null}</li>
                        <li><span> 獎項：</span>{plan ? plan.awardName : null}</li>
                        <li><span> 地區：</span>{plan ? plan.city : null}</li>
                    </ul>
                    <ul className="w_60">
                        <li><span>科目：</span>{plan ? plan.subject : null}</li>
                        <li><span>教師：</span>{plan ? plan.teacher : null}</li>
                        <li><span>學校：</span>{plan ? plan.school : null}</li>
                    </ul>
                </div>
                <div className="video-shadow">
                    {/* <!-- <div className="iframe-img"></div> --> */}
                    <iframe
                        width="1280"
                        height="717"
                        src={`https://www.youtube.com/embed/${plan ? plan.youtubeLink : null}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="intro_text" dangerouslySetInnerHTML={{ __html: plan ? plan.summary : null }}>
                </div>
            </section>
        </React.Fragment >
    );
}

export default DetailPlan;