import React, { useState } from 'react'
import { connect } from 'react-redux'

// our actions
import { acquireTripDetails } from '../actions'

// our buttons
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function RoadieForm (props) {
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
    <>
      { props.name &&
    <div className="roadieformcontainer">

      <div className='roadiestart'>
        <DropdownButton
          title="Choose Roadie Start"
          id="dropdown-menu-align-center"
          onSelect={handleStart}
        >
          <Dropdown.Item eventKey="Auckland">Auckland</Dropdown.Item>
          <Dropdown.Item eventKey="Wellington">Wellington</Dropdown.Item>
          <Dropdown.Item eventKey="Christchurch">Christchurch</Dropdown.Item>
          <Dropdown.Divider />
        </DropdownButton>
        <h3>Your roadie will start in {startcity}</h3>
      </div>

      <div className='roadieend'>
        <DropdownButton
          title="Choose Roadie End"
          id="dropdown-menu-align-center"
          onSelect={handleEnd}
        >
          <Dropdown.Item eventKey="Thames">Thames</Dropdown.Item>
          <Dropdown.Item eventKey="Raglan">Raglan</Dropdown.Item>
          <Dropdown.Item eventKey="Whangarei">Whangarei</Dropdown.Item>
          <Dropdown.Divider />
        </DropdownButton>
        <h3>Your roadie will end in {endcity}</h3>
      </div>

      {/* <div className='daysaway'>
        <DropdownButton
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
        </DropdownButton>
        <h3>Your roadie will be {daysaway}</h3>
      </div> */}
      <div className='submitbutton'>
        <h3>...aaaand pop it through!</h3>
        <span className="fas fa-arrow-circle-right" onClick={() => props.dispatch(acquireTripDetails([startcity, endcity, daysaway]))}></span>
      </div>
    </div>
      }
    </>
  )
}

// this.props.dispatch(addTripRequest(setStart, setEnd, setDays))}

const mapStateToProps = state => {
  return {
    roadie: state.roadie,
    name: state.name,
    startcity: state.startcity,
    endcity: state.endcity,
    daysaway: state.daysaway
  }
}

// const mapDispatchToProps = state => {
//   return {
//     addTripRequest
//   }
// }

export default connect(mapStateToProps)(RoadieForm)
