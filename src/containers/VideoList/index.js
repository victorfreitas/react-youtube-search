import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import VideoList from '../../components/VideoList'
import setCurrentVideo from '../../actions/setCurrentVideo'
import searchVideos from '../../actions/searchVideos'

const mapStateToProps = state => ({
  videos: state.videos,
  searchInfo: state.searchInfo,
  loadingList: state.loadingList,
})

const mapDispatchToProps = {
  setCurrentVideo,
  searchVideos,
}

VideoList.propTypes = {
  setCurrentVideo: PropTypes.func.isRequired,
  searchVideos: PropTypes.func.isRequired,
  loadingList: PropTypes.bool.isRequired,
  searchInfo: PropTypes.object.isRequired,
  videos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)
