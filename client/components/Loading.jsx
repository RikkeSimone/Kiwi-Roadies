import React from 'react'
import { connect } from 'react-redux'

class Loading extends React.Component {
  render () {
    return (
      <>
      <h2>Loading...</h2>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    waiting:
  }
}

export default connect(mapStateToProps)(Loading)