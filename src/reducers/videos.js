import { SEARCH_VIDEOS_SUCCESS, SEARCH_VIDEOS_ERROR } from '../action-types'

export default (state = [], action) => {
  switch (action.type) {
    case SEARCH_VIDEOS_SUCCESS:
      return action.payload

    case SEARCH_VIDEOS_ERROR:
      return { error: action.payload }

    default:
      return state
  }
}
