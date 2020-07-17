import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Hello from './Hello'
import MainMap from './MainMap'

const App = () => (
  <div className='app-container'>
    <div className="body">
      <Header />
      <Hello />
      <MainMap />
    </div>
    <Footer />
  </div>
)

export default App
