import React from 'react'
import { connect } from 'react-redux'
import MainMap from './MainMap'
import CoolStuff from './CoolStuff'

class Trip extends React.Component {
  render () {
    return (
      <div>
        <MainMap />
        <CoolStuff />
      </div>
    )
  }
}

export default connect()(Trip)