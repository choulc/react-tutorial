import React, { useState } from 'react';

export default function SearchBar(props) {

    const { planItems, filteredPlans, setFilteredPlans, setCurrentPage, eduLevel, subjects, counties, selectedEduLevel, setSelectedEduLevel, selectedSubjects, setSelectedSubjects, selectedSubject, setSelectedSubject, selectedCounty, setSelectedCounty, selectedKeyword, setSelectedKeyword, searchResult, setSearchResult } = props;

    const [showEduLevel, setShowEduLevel] = useState(false);
    const [showSubjects, setShowSubjects] = useState(false);
    const [showCounties, setShowCounties] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);

    const onSelectEdu = (edu) => {
        setSelectedSubject('');
        setSelectedEduLevel(edu);
        setShowEduLevel(false);
        setSelectedSubjects(edu === '高中職科目' ? subjects['高中職'] : (edu === '國中科目' ? subjects['國中'] : (edu === '不分學段' ? [] : subjects[edu])));
    }

    const onSelectSubject = (subject) => {
        setSelectedSubject(subject);
        setShowSubjects(false);
    }

    const onSelectCounty = (county) => {
        setSelectedCounty(county);
        setShowCounties(false);
    }

    const onSearchClick = () => {
        const tempPlans = [...planItems];
        console.log(tempPlans
            .filter(plan => plan.grade.includes(selectedEduLevel === '高中職科目' ? '高中職'
                : (selectedEduLevel === '國中科目' ? '國中' : (selectedEduLevel === '不分學段' ? '' : selectedEduLevel))))
            .filter(plan => plan.subject.includes((selectedSubject === '全部學科') ? '' : selectedSubject))
            .filter(plan => plan.city.includes(selectedCounty === '離島' ? '連江縣' : selectedCounty)
                || plan.city.includes(selectedCounty === '離島' ? '金門縣' : selectedCounty)
                || plan.city.includes(selectedCounty === '離島' ? '澎湖縣' : selectedCounty)
                || plan.city.includes(selectedCounty === '臺中市' ? '台中市' : selectedCounty)
                || plan.city.includes(selectedCounty === '全台' ? '' : selectedCounty))
            .filter(plan => Object.values(plan).join('').includes(selectedKeyword)))
        setFilteredPlans(tempPlans
            .filter(plan => plan.grade.includes(selectedEduLevel === '高中職科目' ? '高中職'
                : (selectedEduLevel === '國中科目' ? '國中' : (selectedEduLevel === '不分學段' ? '' : selectedEduLevel))))
            .filter(plan => plan.subject.includes((selectedSubject === '全部學科') ? '' : selectedSubject))
            .filter(plan => plan.city.includes(selectedCounty === '離島' ? '連江縣' : selectedCounty)
                || plan.city.includes(selectedCounty === '離島' ? '金門縣' : selectedCounty)
                || plan.city.includes(selectedCounty === '離島' ? '澎湖縣' : selectedCounty)
                || plan.city.includes(selectedCounty === '臺中市' ? '台中市' : selectedCounty)
                || plan.city.includes(selectedCounty === '全台' ? '' : selectedCounty))
            .filter(plan => Object.values(plan).join('').includes(selectedKeyword))
        );
        setCurrentPage(1);
        setShowEduLevel(false);
        setShowSubjects(false);
        setShowCounties(false);
        setShowSearchResult(true);
        setSearchResult({ selectedEduLevel, selectedSubject, selectedCounty, selectedKeyword });
    }


    return (
        <React.Fragment>
            <div className="Search_Bar">
                <div className="Search_Bar_item">
                    <ul className="search-navtabs">
                        <li onClick={() => { setShowEduLevel(!showEduLevel); setShowSubjects(false); setShowCounties(false); setShowSearchResult(false) }}><i className="icon-search-01"></i><span>{!!selectedEduLevel ? selectedEduLevel : '學習階段'}</span></li>
                        <li onClick={() => { setShowEduLevel(false); setShowSubjects(!showSubjects); setShowCounties(false); setShowSearchResult(false) }}><i className="icon-search-02"></i><span>{!!selectedSubject ? selectedSubject : '學習科目'}</span></li>
                        <li onClick={() => { setShowEduLevel(false); setShowSubjects(false); setShowCounties(!showCounties); setShowSearchResult(false) }}><i className="icon-search-03"></i><span>{!!selectedCounty ? selectedCounty : '學習地區'}</span></li>
                    </ul>
                    <div className="search-container">
                        <input type="text" placeholder="請輸入.." name="search" value={selectedKeyword} onChange={(e) => setSelectedKeyword(e.target.value)} />
                        <button type="submit" onClick={onSearchClick}>搜 尋</button>
                    </div>
                    <div className="search_datawrap">
                        <div className="search_info" style={{ display: (showEduLevel || showSubjects || showCounties || showSearchResult) ? 'block' : 'none' }}>
                            {showEduLevel ? <button onClick={() => onSelectEdu('不分學段')}>不分學段</button> : null}
                            {showEduLevel ? eduLevel.map((edu, index) => (<button key={index} onClick={() => onSelectEdu(edu)}>{edu}</button>)) : null}
                            {(showSubjects && selectedEduLevel === '不分學段') ? <div style={{ textAlign: 'center' }}>預設選擇全部科目。</div> : null}
                            {(showSubjects && !!selectedEduLevel && selectedEduLevel !== '不分學段') ? <button onClick={() => onSelectSubject('全部學科')}>全部學科</button> : null}
                            {(showSubjects && !!selectedEduLevel) ? selectedSubjects.map((subject, index) => (<button key={index} onClick={() => onSelectSubject(subject)}>{subject}</button>)) :
                                ((!showEduLevel && !showCounties && !showSearchResult) ? <div style={{ textAlign: 'center' }}>請先選擇學習階段。</div> : null)}
                            {showCounties ? <button onClick={() => onSelectCounty('全台')}>全台</button> : null}
                            {showCounties ? counties.map((county, index) => (<button key={index} onClick={() => onSelectCounty(county)}>{county}</button>)) : null}
                            {showSearchResult ? (!!filteredPlans.length ?
                                <p style={{ textAlign: 'center' }}>
                                    {!!searchResult.selectedEduLevel.length ? `${searchResult.selectedEduLevel} > ` : null}
                                    {!!searchResult.selectedSubject.length ? `${searchResult.selectedSubject} > ` : null}
                                    {!!searchResult.selectedCounty.length ? `${searchResult.selectedCounty} > ` : null}
                                    {!!searchResult.selectedKeyword.length ? `${searchResult.selectedKeyword} > ` : null}
                                    共{filteredPlans.length}筆搜尋結果。
                                </p> :
                                <p style={{ textAlign: 'center' }}>無關聯教案，請重新搜尋！</p>) : null}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}