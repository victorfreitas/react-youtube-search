import React, { PureComponent, Fragment } from 'react'

import './style.scss'

import Spinner from '../Spinner'
import SearchBar from '../../containers/SearchBar'
import VideoList from '../../containers/VideoList'
import VideoPlayer from '../../containers/VideoPlayer'
import ErrorMessage from '../ErrorMessage'

class App extends PureComponent {
  componentDidMount() {
    const { searchVideos } = this.props
    searchVideos({ q: '', order: 'viewCount' })
  }

  renderOnError() {
    const { videos: { error } } = this.props

    return error ? <ErrorMessage error={error} /> : null
  }

  renderOnSuccess() {
    const { videos } = this.props

    if (videos.error) {
      return null
    }

    return (
      <Fragment>
        <VideoPlayer />
        <VideoList />
      </Fragment>
    )
  }

  render() {
    const { loading } = this.props

    return (
      <div className="container">
        <SearchBar />
        <Spinner active={loading} />
        {this.renderOnError()}
        {this.renderOnSuccess()}
      </div>
    )
  }
}

export default App
