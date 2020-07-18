import React, { useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function App () {
  const [value, setValue] = useState('')
  const handleStart = (e) => {
    console.log(e)
    setValue(e)
  }

  const handleEnd = (e) => {
    console.log(e)
    setValue(e)
  }

  return (
    <div className="App container">

      <div>
        <DropdownButton
        // alignRight
          title="Roadie Start"
          id="dropdown-menu-align-center"
          onSelect={handleStart}
        >
          <Dropdown.Item eventKey="Auckland">Auckland</Dropdown.Item>
          <Dropdown.Item eventKey="Wellington">Wellington</Dropdown.Item>
          <Dropdown.Item eventKey="Christchurch">Christchurch</Dropdown.Item>
          <Dropdown.Divider />
          {/* <Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
        </DropdownButton>
        <h4>Your roadie will start in {value}</h4>
      </div>

      <div>
        <DropdownButton
        // alignRight
          title="Roadie End"
          id="dropdown-menu-align-center"
          onSelect={handleEnd}
        >
          <Dropdown.Item eventKey="Thames">Thames</Dropdown.Item>
          <Dropdown.Item eventKey="Raglan">Raglan</Dropdown.Item>
          <Dropdown.Item eventKey="Whangarei">Whangarei</Dropdown.Item>
          <Dropdown.Divider />
          {/* <Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
        </DropdownButton>
        <h4>Your roadie will end in {value}</h4>
      </div>
    </div>
  )
}

export default App
