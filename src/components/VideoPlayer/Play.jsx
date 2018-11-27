import React from 'react'
import YouTube from 'react-player/lib/players/YouTube'
import PropTypes from 'prop-types'

const ytconfig = {
  youtube: {
    playerVars: {
      enablejsapi: 1,
      modestbranding: 1,
    },
  },
}

const Play = ({ video }) => (
  <div className="player-wrapper">
    <YouTube
      className="react-player"
      url={video.url}
      config={ytconfig}
      width="100%"
      height="100%"
      playing
    />
  </div>
)

Play.propTypes = {
  video: PropTypes.object.isRequired,
}

export default Play
