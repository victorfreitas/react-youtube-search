import React from 'react'

import Message from './Message'
import Play from './Play'

import './style.scss'

const VideoPlayer = ({ video }) => (
  <div className="video-player">
    {video.id ? <Play video={video} /> : <Message />}
  </div>
)

export default VideoPlayer
