import ytSearch from 'youtube-api-v3-search'

import parseVideos from '../helpers/parseVideos'
import {
  LOADING,
  SEARCH_VIDEOS_SUCCESS,
  SEARCH_VIDEOS_ERROR,
  SEARCH_PAGE_INFO,
  VIDEO_LIST_LOADING,
} from '../action-types'

const { REACT_APP_API_KEY } = process.env

export default (args, pageLoad = true) => dispatch => {
  const dispatchLoading = payload => {
    dispatch({
      type: pageLoad ? LOADING : VIDEO_LIST_LOADING,
      payload,
    })
  }

  const onSuccess = ({
    items,
    nextPageToken,
    pageInfo,
    prevPageToken,
  }) => {
    const videos = parseVideos(items)

    dispatchLoading(false)

    dispatch({
      type: SEARCH_VIDEOS_SUCCESS,
      payload: videos,
    })

    dispatch(      {
      type: SEARCH_PAGE_INFO,
      payload: {
        prevPageToken,
        nextPageToken,
        ...pageInfo,
      },
    })
  }

  const onError = ({ error }) => {
    dispatchLoading(false)
    dispatch({
      type: SEARCH_VIDEOS_ERROR,
      payload: { ...error },
    })
  }

  dispatchLoading(true)
  ytSearch(REACT_APP_API_KEY, { maxResults: 8, ...args })
    .then(onSuccess)
    .catch(onError)
}
