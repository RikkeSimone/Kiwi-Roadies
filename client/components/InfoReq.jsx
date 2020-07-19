import React from 'react'
import { connect } from 'react-redux'
import Greeting from './Greeting'
import Form from './Form'

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
        <Form />
      </div>
    )
  }
}

export default connect()(InfoReq)
