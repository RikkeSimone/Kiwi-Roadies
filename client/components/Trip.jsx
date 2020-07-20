import React from 'react'
import { connect } from 'react-redux'
import MainMap from './MainMap'
import CoolStuff from './CoolStuff'
import RoadieMap from './RoadieMap'

class Trip extends React.Component {
  render () {
    return (
      <div>
        <MainMap />
        <CoolStuff />
        <RoadieMap />
      </div>
    )
  }
}

export default connect()(Trip)
