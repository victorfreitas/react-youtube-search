import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import App from '../../components/App'
import searchVideos from '../../actions/searchVideos'

const mapStateToProps = state => ({
  loading: state.loading,
  videos: state.videos,
})

const mapDispatchToProps = {
  searchVideos,
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchVideos: PropTypes.func.isRequired,
  videos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
