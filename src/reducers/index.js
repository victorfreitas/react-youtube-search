import { combineReducers } from 'redux'

import term from './term'
import videos from './videos'
import currentVideo from './currentVideo'
import loading from './loading'
import searchInfo from './searchInfo'
import loadingList from './loadingList'

export default combineReducers({
  term,
  videos,
  currentVideo,
  loading,
  searchInfo,
  loadingList,
})
