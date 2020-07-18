import React, { useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function App () {
  const [startcity, setStart] = useState('')
  const handleStart = (e) => {
    console.log(e)
    setStart(e)
  }

  const [endcity, setEnd] = useState('')
  const handleEnd = (e) => {
    console.log(e)
    setEnd(e)
  }

  const [daysaway, setDays] = useState('')
  const handleDays = (e) => {
    console.log(e)
    setDays(e)
  }

  return (
    <div className="App container">

      <div className='roadiestart'>
        <DropdownButton
        // alignRight
          title="Choose Roadie Start"
          id="dropdown-menu-align-center"
          onSelect={handleStart}
        >
          <Dropdown.Item eventKey="Auckland">Auckland</Dropdown.Item>
          <Dropdown.Item eventKey="Wellington">Wellington</Dropdown.Item>
          <Dropdown.Item eventKey="Christchurch">Christchurch</Dropdown.Item>
          <Dropdown.Divider />
          {/* <Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
        </DropdownButton>
        <h4>Your roadie will start in {startcity}</h4>
      </div>

      <div className='roadieend'>
        <DropdownButton
        // alignRight
          title="Choose Roadie End"
          id="dropdown-menu-align-center"
          onSelect={handleEnd}
        >
          <Dropdown.Item eventKey="Thames">Thames</Dropdown.Item>
          <Dropdown.Item eventKey="Raglan">Raglan</Dropdown.Item>
          <Dropdown.Item eventKey="Whangarei">Whangarei</Dropdown.Item>
          <Dropdown.Divider />
          {/* <Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
        </DropdownButton>
        <h4>Your roadie will end in {endcity}</h4>
      </div>

      <div className='daysaway'>
        <DropdownButton
        // alignRight
          title="How many days away?"
          id="dropdown-menu-align-center"
          onSelect={handleDays}
        >
          <Dropdown.Item eventKey="1-day">1 Day</Dropdown.Item>
          <Dropdown.Item eventKey="2-days">2 Days</Dropdown.Item>
          <Dropdown.Item eventKey="3-days">3 Days</Dropdown.Item>
          <Dropdown.Item eventKey="4-days">4 Days</Dropdown.Item>
          <Dropdown.Item eventKey="5-days">5 Days</Dropdown.Item>
          <Dropdown.Divider />
          {/* <Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
        </DropdownButton>
        <h4>Your roadie will start in {daysaway}</h4>
      </div>
      <div className='submitbutton'>
        <h2>aaaand pop it through!</h2>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default App
