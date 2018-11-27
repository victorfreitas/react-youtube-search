import React from 'react'
import { List } from 'semantic-ui-react'
import classNames from 'classnames'

import './style.scss'

import Item from '../../containers/VideoList/Item'
import Buttons from './Buttons'

const VideoList = ({ videos, searchVideos, searchInfo, loadingList }) => (
  <div className={classNames('video-list', { 'wait': loadingList })}>
    <List selection verticalAlign="middle">
      {videos.map(video => (
        <Item key={video.etag} video={video} />
      ))}
    </List>
    <Buttons search={searchVideos} info={searchInfo} />
  </div>
)

export default VideoList
