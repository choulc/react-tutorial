import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { setCurrentPage } from '../reducers/pagesSlice';
import { updateFilteredPlans } from '../reducers/plansSlice';
import {
    updateSelectedEduLevel,
    updateSelectedSubjects,
    updateSelectedSubject,
    updateSelectedCounty,
    updateSelectedKeyword,
    updateSearchResult,
} from '../reducers/searchSlice'

const mapStateToProps = state => ({
    planItems: state.plans.planItems,
    filteredPlans: state.plans.filteredPlans,
    search: state.search,
    selectedEduLevel: state.search.selectedEduLevel,
    selectedSubjects: state.search.selectedSubjects,
    selectedSubject: state.search.selectedSubject,
    selectedCounty: state.search.selectedCounty,
    searchResult: state.search.searchResult,
})

const mapDispatchToProps = {
    setCurrentPage,
    updateSelectedEduLevel,
    updateSelectedSubjects,
    updateSelectedSubject,
    updateSelectedCounty,
    updateSelectedKeyword,
    updateSearchResult,
    updateFilteredPlans,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);