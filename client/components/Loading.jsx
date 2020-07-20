import React from 'react'
import { connect } from 'react-redux'

class Loading extends React.Component {
  render () {
    return (
      <div className="loading-screen-image">
        <img src="./graphics/loadingscreen-revisioned.png" className="kiwi-car"/>
      </div>
    )
  }
}

export default connect()(Loading)
