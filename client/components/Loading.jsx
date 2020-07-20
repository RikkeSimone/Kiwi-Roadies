import React from 'react'
import { connect } from 'react-redux'

class Loading extends React.Component {
  render () {
    return (
      <>
        <div className="loader"></div>
      </>
    )
  }
}

export default connect()(Loading)
