import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Hello from './Hello'
import Error from './Error'
import Greeting from './Greeting'
import FormAriana from './FormAriana'
// import MainMap from './MainMap'

const App = () => (
  <div className='app-container'>
    <div className="body">
      <Error />
      <Header />
      {/* <Hello /> */}
      <FormAriana />
      {/* <Greeting /> */}
    </div>
    <Footer />
  </div>
)

export default App
