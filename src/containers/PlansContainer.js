import { connect } from 'react-redux'
import Plans from '../components/Plans'

const mapStateToProps = state => ({
    filteredPlans: state.plans.filteredPlans,
    currentPage: state.pages.currentPage,
    showPerPage: state.pages.showPerPage,
});

export default connect(mapStateToProps, null)(Plans);