import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import Hello from './Hello'
import Error from './Error'
import InfoReq from './InfoReq'
import Loading from './Loading'
import Trip from './Trip'

// import MainMap from './MainMap'
// import CoolStuff from './CoolStuff'

let renderedComponent = ''

class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    demoAsyncCall().then(() => this.setState({ loading: false }))
  }

  render () {
    const { loading } = this.state
    if (loading) {
      return null
    }

    if (this.props.waiting) {
      renderedComponent = <Loading />
    } else if (this.props.tripstatus) {
      renderedComponent = <Trip />
    } else {
      renderedComponent = <><Hello /><InfoReq /></>
    }

    return (
      <div className='app-container'>
        <div className="body">
          <Error />
          <Header />
          {renderedComponent}
        </div>
      </div>
    )
  }
}

function demoAsyncCall () {
  return new Promise((resolve) => setTimeout(() => resolve(), 1))
}

const mapStateToProps = state => {
  return {
    waiting: state.waiting,
    tripstatus: state.tripstatus
  }
}

export default connect(mapStateToProps)(App)
