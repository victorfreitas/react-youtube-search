import React, { Fragment } from 'react'
import { Dimmer, Loader, Image } from 'semantic-ui-react'

const Spinner = ({ active }) => {
  if (!active) {
    return null
  }

  const src = 'https://react.semantic-ui.com/images/wireframe/short-paragraph.png'

  return (
    <Fragment>
      <Dimmer active inverted>
        <Loader size="massive">Loading</Loader>
      </Dimmer>

      <Image src={src} size="massive" />
      <Image src={src} size="massive" />
      <Image src={src} size="massive" />
    </Fragment>
  )
}

export default Spinner
