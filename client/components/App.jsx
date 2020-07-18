import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Hello from './Hello'
import Error from './Error'
import InfoReq from './InfoReq'
// import MainMap from './MainMap'

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

    return (
      <div className='app-container'>
        <div className="body">
          <Error />
          <Header />
          <Hello />
          <InfoReq />
        </div>
        <Footer />
      </div>
    )
  }
}

function demoAsyncCall () {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App
