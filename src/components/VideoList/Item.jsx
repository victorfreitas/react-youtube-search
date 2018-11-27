import React from 'react'
import PropTypes from 'prop-types'

import { List, Image } from 'semantic-ui-react'

const Item = ({ video, current, setCurrentVideo }) => (
  <List.Item
    onClick={() => setCurrentVideo(video)}
    active={video.id === current.id}
  >
    <Image
      rounded
      verticalAlign="middle"
      size="tiny"
      src={video.thumbnails.default.url}
    />
    <List.Content>
      <List.Header>
        {video.title}
      </List.Header>
      <List.Description>
        {video.channelTitle}
      </List.Description>
    </List.Content>
  </List.Item>
)

Item.propTypes = {
  video: PropTypes.object.isRequired,
}

export default Item
