import React from 'react'
import { connect } from 'react-redux'
import Greeting from './Greeting'
import Loading from './Loading'
import Form from './Form'

class InfoReq extends React.Component {
  state = { isLoading: true }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }

  render () {
    return (
      <div>
        {this.state.isLoading ? <Loading />
          : <div>
            <Greeting />
            <Form />
          </div>}
      </div>
    )
  }
}

export default connect()(InfoReq)
