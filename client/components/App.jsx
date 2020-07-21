import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Hello from './Hello'
import Error from './Error'
import InfoReq from './InfoReq'
import Loading from './Loading'
import Trip from './Trip'


// import MainMap from './MainMap'
// import CoolStuff from './CoolStuff'

let renderedComponent = ''
let status = ''

class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    simulateLoading().then(() => this.setState({ loading: false }))
  }

  render () {
    const { loading } = this.state
    if (loading) {
      return null
    }

    if (this.props.waiting) {
      renderedComponent = <Loading />
      status = 'loading-screen'
    } else if (this.props.tripstatus) {
      renderedComponent = <Trip />
      status = 'body'
    } else {
      renderedComponent = <><Hello /><InfoReq /></>
      status = 'body'
    }

    return (
      <div className='app-container'>
        <div className={status}>
          <Error />
          <Header />
          {renderedComponent}
        </div>
      </div>
    )
  }
}

function simulateLoading () {
  return new Promise((resolve) => setTimeout(() => resolve(), 1))
}

const mapStateToProps = state => {
  return {
    waiting: state.waiting,
    tripstatus: state.tripstatus
  }
}

export default connect(mapStateToProps)(App)
