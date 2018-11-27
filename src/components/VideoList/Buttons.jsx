import React, { PureComponent, Fragment } from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Buttons extends PureComponent {
  handleChange = (isNext) => {
    const { search, info } = this.props
    const pageToken = isNext ? info.nextPageToken : info.prevPageToken

    search({ pageToken }, false)
  }

  render() {
    const { info } = this.props

    return (
      <Fragment>
        <Button
          disabled={!info.prevPageToken}
          content="Prev"
          icon="left arrow"
          labelPosition="left"
          onClick={() => this.handleChange(false)}
        />
        <Button
          disabled={!info.nextPageToken}
          content="Next"
          icon="right arrow"
          labelPosition="right"
          onClick={() => this.handleChange(true)}
        />
      </Fragment>
    )
  }
}

Buttons.propTypes = {
  search: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired,
}

export default Buttons
