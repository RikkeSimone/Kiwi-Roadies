import React from 'react'

import Header from './Header'
import Footer from './Footer'
// import Hello from './Hello'
// import MainMap from './MainMap'
import Form from './Form'

const App = () => (
  <div className='app-container'>
    <div className="body">
      <Header />
      {/* <Hello /> */}
      <Form />
    </div>
    <Footer />
  </div>
)

export default App
