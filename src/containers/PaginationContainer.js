import { connect } from 'react-redux';
import Pagination from '../components/Pagination';

import { nextPage, previousPage, updateMaxPage } from '../reducers/pagesSlice';

const mapStateToProps = state => ({
    pages: state.pages,
    filteredPlans: state.plans.filteredPlans,
})

const mapDispatchToProps = { nextPage, previousPage, updateMaxPage };

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);