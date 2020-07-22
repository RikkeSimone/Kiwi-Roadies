import React from 'react'
import { connect } from 'react-redux'
import CoolStuff from './CoolStuff'
import DirectionsMap from './DirectionsMap'

class Trip extends React.Component {
  render () {
    return (
      <div className='tripcontainer'>
        <CoolStuff />
        <DirectionsMap />
      </div>
    )
  }
}

export default connect()(Trip)
