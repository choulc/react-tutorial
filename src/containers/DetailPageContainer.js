import { connect } from 'react-redux';
import DetailPage from '../pages/DetailPage'

const mapStateToProps = state => ({
    planLookupTable: state.plans.planLookupTable
})

export default connect(mapStateToProps, null)(DetailPage)