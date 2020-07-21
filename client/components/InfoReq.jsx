import React from 'react'
import { connect } from 'react-redux'
import Greeting from './Greeting'
import RoadieForm from './RoadieForm'
import RoadieMap from './RoadieMap'
// import DirectionsMap from './DirectionsMap'
import ScrollMap from './ScrollMap'

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
        <RoadieMap />
      </div>
    )
  }
}

export default connect()(InfoReq)
