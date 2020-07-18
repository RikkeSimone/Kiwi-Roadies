import React from 'react'
import { connect } from 'react-redux'

class Loading extends React.Component {
  render () {
    return (
      <>
        { this.props.waiting &&
      <h2>Loading...</h2>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(Loading)
