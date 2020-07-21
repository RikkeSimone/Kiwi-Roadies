import React from 'react'
import { connect } from 'react-redux'
import Greeting from './Greeting'
import RoadieForm from './RoadieForm'
import MainMap from './MainMap'
import DirectionsMap from './DirectionsMap'

class InfoReq extends React.Component {
  state = { isLoading: true }

  componentDidMount () {
    this.setState({
      isLoading: false
    })
  }

  render () {
    return (
      <div>
        <Greeting />
        <RoadieForm />
        <MainMap />
        <DirectionsMap/>
      </div>
    )
  }
}

export default connect()(InfoReq)
