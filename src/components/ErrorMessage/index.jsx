import React from 'react'
import PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'

import './style.scss'

const ErrorMessage = ({ error }) => (
  <Message warning className="message-error">
    <Message.Header>
      {error.message || 'No video found'}
    </Message.Header>
    <p>{error.code ? `Code: ${error.code}` : ''}</p>
  </Message>
)

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired,
}

export default ErrorMessage
