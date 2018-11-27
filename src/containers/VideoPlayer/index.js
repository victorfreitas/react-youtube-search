import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import VideoPlayer from '../../components/VideoPlayer'

const mapStateToProps = state => ({
  video: state.currentVideo,
  loading: state.loading,
})

VideoPlayer.propTypes = {
  loading: PropTypes.bool.isRequired,
  video: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(VideoPlayer)
