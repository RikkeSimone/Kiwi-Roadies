import React from 'react'
import { connect } from 'react-redux'

class Loading extends React.Component {
  render () {
    return (
      <>
        <img src="./graphics/kiwiroadieslogo.png"/>
      </>
    )
  }
}

export default connect()(Loading)
