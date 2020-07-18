import React from 'react'
import { connect } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'
// import Loading from './Loading'
// import Search from './Search'

function RoadieForm () {
  // const [value, setValue] = useState('')

  const handleSelect = (e) => {
    setValue(e)
  }

  // render () {
  //   console.log(this.props.cities)
  // const { pending } = this.props

  // if (pending) {
  //   return <Loading />
  // }
  return (
    <div className='form-container'>

      <div className='dropdowncontainer'>
        <div className ='dropdownstart'>

          <h2>Where would you like your Roadie to start?</h2>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Roadie Start
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p><Dropdown.Item href="#/action-1">Auckland</Dropdown.Item></p>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className='dropdownend'>
          <h2>Where would you like your Roadie to end?</h2>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Roadie End
            </Dropdown.Toggle>

            <Dropdown.Menu onSelect={handleSelect}>
              <p><Dropdown.Item eventKey="option1">Option 1</Dropdown.Item></p>
              <p><Dropdown.Item eventKey="option2">Option 2</Dropdown.Item></p>
              <p><Dropdown.Item eventKey="option3">Option 2</Dropdown.Item></p>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className='dropdowndays'>
          <h2>How many days would you like to be away?</h2>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Number of Days
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p><Dropdown.Item href="#/action-1">1 day</Dropdown.Item></p>
              <p><Dropdown.Item href="#/action-1">2 days</Dropdown.Item></p>
              <p><Dropdown.Item href="#/action-1">3 days</Dropdown.Item></p>
              <p><Dropdown.Item href="#/action-1">4 days</Dropdown.Item></p>
              <p><Dropdown.Item href="#/action-1">5 days</Dropdown.Item></p>
              <p><Dropdown.Item href="#/action-1">6 days</Dropdown.Item></p>
              <p><Dropdown.Item href="#/action-1">7 days</Dropdown.Item></p>
              <p><Dropdown.Item href="#/action-1">8 days</Dropdown.Item></p>
              <p><Dropdown.Item href="#/action-1">9 days</Dropdown.Item></p>
              <p><Dropdown.Item href="#/action-1">10+ days</Dropdown.Item></p>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className='submitbutton'>
        <h2>aaaand pop it through!</h2>
        <button>Submit</button>
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     cities: state.cities.trips
//   }
// }

export default connect(mapStateToProps)(RoadieForm)

// const mapDispatchToProps = {
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RoadieForm)

// state = {
// }

// changeHandler = (ev) => {
//   const { value, start, end, numberDays } = ev.target
//   this.setState({
//   })
// }

// componentDidMount () {
// }

// onClick = () => {
//   // addFood(this.state)
//   //   .then(() => this.props.history.push('/'))
// }
