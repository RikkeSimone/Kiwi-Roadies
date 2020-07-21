import React from 'react'
import { connect } from 'react-redux'
import Greeting from './Greeting'
import RoadieForm from './RoadieForm'
import MainMap from './MainMap'
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
        <MainMap />
        <ScrollMap />
      </div>
    )
  }
}

export default connect()(InfoReq)
