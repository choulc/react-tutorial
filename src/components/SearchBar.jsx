import React, { useState } from 'react';

export default function SearchBar(props) {

    const {
        planItems,
        filteredPlans,
        search,
        selectedEduLevel,
        selectedSubjects,
        selectedSubject,
        selectedCounty,
        searchResult,
        setCurrentPage,
        updateSelectedEduLevel,
        updateSelectedSubjects,
        updateSelectedSubject,
        updateSelectedCounty,
        updateSelectedKeyword,
        updateSearchResult,
        updateFilteredPlans,
    } = props;

    const [showEduLevel, setShowEduLevel] = useState(false);
    const [showSubjects, setShowSubjects] = useState(false);
    const [showCounties, setShowCounties] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);

    const onEduButtonLevelClicked = () => {
        setShowEduLevel(!showEduLevel);
        setShowSubjects(false);
        setShowCounties(false);
        setShowSearchResult(false);
        updateSelectedSubjects('');
        updateSelectedCounty('');
    }

    const onSubButtonClicked = () => {
        setShowEduLevel(false);
        setShowSubjects(!showSubjects);
        setShowCounties(false);
        setShowSearchResult(false);
    }

    const onCountyButtonClicked = () => {
        setShowEduLevel(false);
        setShowSubjects(false);
        setShowCounties(!showCounties);
        setShowSearchResult(false);
    }

    let eduLevelDisplay = !!selectedEduLevel ? selectedEduLevel : '學習階段';
    let subjectDisplay = !!selectedSubject ? selectedSubject : '學習科目';
    let countyDisplay = !!selectedCounty ? selectedCounty : '學習地區';

    const onSelectEdu = (edu) => {
        updateSelectedEduLevel(edu);
        setShowEduLevel(false);
        updateSelectedSubjects(edu === '高中職科目' ? search.subjects['高中職'] : (edu === '國中科目' ? search.subjects['國中'] : (edu === '不分學段' ? [] : search.subjects[edu])));
    }

    const onSelectSubject = (subject) => {
        updateSelectedSubject(subject);
        setShowSubjects(false);
    }

    const onSelectCounty = (county) => {
        updateSelectedCounty(county);
        setShowCounties(false);
    }

    let eduButtons = (
        <React.Fragment>
            <button onClick={() => onSelectEdu('不分學段')}>不分學段</button>
            {search.eduLevel.map((edu, index) => (<button key={index} onClick={() => onSelectEdu(edu)}>{edu}</button>))}
        </React.Fragment>
    )

    let subjectButtons = (
        <React.Fragment>
            {selectedEduLevel === '不分學段' ? <div style={{ textAlign: 'center' }}>預設選擇全部科目。</div> : null}
            {(!!selectedEduLevel && selectedEduLevel !== '不分學段') ? <button onClick={() => onSelectSubject('全部學科')}>全部學科</button> : null}
            {!!selectedEduLevel ? selectedSubjects.map((subject, index) => (<button key={index} onClick={() => onSelectSubject(subject)}>{subject}</button>)) :
                ((!showEduLevel && !showCounties && !showSearchResult) ? <div style={{ textAlign: 'center' }}>請先選擇學習階段。</div> : null)}
        </React.Fragment>
    )

    let countyButtons = (
        <React.Fragment>
            <button onClick={() => onSelectCounty('全台')}>全台</button>
            {search.counties.map((county, index) => (<button key={index} onClick={() => onSelectCounty(county)}>{county}</button>))}
        </React.Fragment>
    )


    const onSearchClick = () => {
        const tempPlans = [...planItems];
        updateFilteredPlans(tempPlans
            .filter(plan => plan.grade.includes(selectedEduLevel === '高中職科目' ? '高中職'
                : (selectedEduLevel === '國中科目' ? '國中' : (selectedEduLevel === '不分學段' ? '' : selectedEduLevel))))
            .filter(plan => plan.subject.includes((selectedSubject === '全部學科') ? '' : selectedSubject))
            .filter(plan => plan.city.includes(selectedCounty === '離島' ? '連江縣' : selectedCounty)
                || plan.city.includes(selectedCounty === '離島' ? '金門縣' : selectedCounty)
                || plan.city.includes(selectedCounty === '離島' ? '澎湖縣' : selectedCounty)
                || plan.city.includes(selectedCounty === '臺中市' ? '台中市' : selectedCounty)
                || plan.city.includes(selectedCounty === '全台' ? '' : selectedCounty))
            .filter(plan => Object.values(plan).join('').includes(search.selectedKeyword))
        );
        setCurrentPage(1);
        setShowEduLevel(false);
        setShowSubjects(false);
        setShowCounties(false);
        setShowSearchResult(true);
        updateSearchResult({ selectedEduLevel: selectedEduLevel, selectedSubject: selectedSubject, selectedCounty: selectedCounty, selectedKeyword: search.selectedKeyword });
    }

    let resultInfo = (
        <React.Fragment>
            {(!!filteredPlans.length ?
                <p style={{ textAlign: 'center' }}>
                    {!!searchResult.selectedEduLevel.length ? `${searchResult.selectedEduLevel} > ` : null}
                    {!!searchResult.selectedSubject.length ? `${searchResult.selectedSubject} > ` : null}
                    {!!searchResult.selectedCounty.length ? `${searchResult.selectedCounty} > ` : null}
                    {!!searchResult.selectedKeyword.length ? `${searchResult.selectedKeyword} > ` : null}
                                    共{filteredPlans.length}筆搜尋結果。
                                </p> :
                <p style={{ textAlign: 'center' }}>無關聯教案，請重新搜尋！</p>)}
        </React.Fragment>
    )


    return (
        <React.Fragment>
            <div className="Search_Bar">
                <div className="Search_Bar_item">
                    <ul className="search-navtabs">
                        <li onClick={onEduButtonLevelClicked}><i className="icon-search-01"></i><span>{eduLevelDisplay}</span></li>
                        <li onClick={onSubButtonClicked}><i className="icon-search-02"></i><span>{subjectDisplay}</span></li>
                        <li onClick={onCountyButtonClicked}><i className="icon-search-03"></i><span>{countyDisplay}</span></li>
                    </ul>
                    <div className="search-container">
                        <input type="text" placeholder="請輸入.." name="search" value={search.selectedKeyword} onChange={(e) => updateSelectedKeyword(e.target.value)} />
                        <button type="submit" onClick={onSearchClick}>搜 尋</button>
                    </div>
                    <div className="search_datawrap">
                        <div className="search_info" style={{ display: (showEduLevel || showSubjects || showCounties || showSearchResult) ? 'block' : 'none' }}>
                            {showEduLevel ? eduButtons : null}
                            {showSubjects ? subjectButtons : null}
                            {showCounties ? countyButtons : null}
                            {showSearchResult ? resultInfo : null}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}