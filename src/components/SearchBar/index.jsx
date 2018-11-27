import React, { PureComponent } from 'react'
import { Segment, Form } from 'semantic-ui-react'

import './style.scss'

class SearchBar extends PureComponent {
  handleSubmit = (event) => {
    const { searchVideos, term } = this.props

    searchVideos({ q: term })
    event.preventDefault()
  }

  handleInput = ({ target }) => {
    const { setTerm } = this.props

    setTerm(target.value)
  }

  render() {
    const { loading, term } = this.props

    return (
      <div className="search-bar">
        <Segment stacked>
          <Form action="" onSubmit={this.handleSubmit}>
            <Form.Input
              type="search"
              icon="search"
              size="big"
              placeholder="Search..."
              disabled={loading}
              onInput={this.handleInput}
              defaultValue={term}
            />
          </Form>
        </Segment>
      </div>
    )
  }
}

export default SearchBar
