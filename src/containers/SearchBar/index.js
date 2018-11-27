import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchBar from '../../components/SearchBar'
import searchVideos from '../../actions/searchVideos'
import setTerm from '../../actions/setTerm'

const mapStateToProps = state => ({
  loading: state.loading,
  term: state.term,
})

const mapDispatchToProps = {
  searchVideos,
  setTerm,
}

SearchBar.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchVideos: PropTypes.func.isRequired,
  setTerm: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
