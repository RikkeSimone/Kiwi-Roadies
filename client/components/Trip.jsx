import React from 'react'
import { connect } from 'react-redux'
import CoolStuff from './CoolStuff'
import RoadieMap from './RoadieMap'

class Trip extends React.Component {
  render () {
    return (
      <div>
        <CoolStuff />
        <RoadieMap />
      </div>
    )
  }
}

export default connect()(Trip)
