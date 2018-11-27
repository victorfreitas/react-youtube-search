import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Item from '../../components/VideoList/Item'
import setCurrentVideo from '../../actions/setCurrentVideo'

const mapStateToProps = state => ({
  current: state.currentVideo,
})

const mapDispatchToProps = {
  setCurrentVideo,
}

Item.propTypes = {
  setCurrentVideo: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
