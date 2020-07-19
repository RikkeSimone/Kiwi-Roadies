import React from 'react'
import { connect } from 'react-redux'
import Greeting from './Greeting'
import Loading from './Loading'
import RoadieForm from './RoadieForm'

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
      </div>
    )
  }
}

export default connect()(InfoReq)
