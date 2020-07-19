import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import Hello from './Hello'
import Error from './Error'
import InfoReq from './InfoReq'
import Loading from './Loading'
import Trip from './Trip'
import CoolStuff from './CoolStuff'
import MainMap from './MainMap'

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
          <CoolStuff />
          <MainMap />
        </div>
        {/* <Footer /> */}
        
      </div>
    )
  }
}

function demoAsyncCall () {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500))
}

const mapStateToProps = state => {
  return {
    waiting: state.waiting,
    tripstatus: state.tripstatus
  }
}

export default connect(mapStateToProps)(App)
