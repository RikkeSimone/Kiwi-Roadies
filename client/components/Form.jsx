import React from 'react'
// import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

// import Loading from './Loading'
// import Search from './Search'

class RoadieForm extends React.Component {
  // state = {

  // }

  // changeHandler = (ev) => {
  //   const { value, start, end, numberDays } = ev.target
  //   this.setState({
  //     [start]: value,
  //     [end]: value,
  //     [numberDays]: value
  //   })
  // }

  // getCategory = (cat) => {
  //   this.setState({
  //     categoryName: cat
  //   })
  // }

  // componentDidMount () {
  //   const { getCategories, showError } = this.props

  //   getCategories()
  //     .catch(showError)
  // }

  // onClick = () => {
  //   // addFood(this.state)
  //   //   .then(() => this.props.history.push('/'))
  // }

  render () {
    // const { pending } = this.props

    // if (pending) {
    //   return <Loading />
    // }
    return (
      <div className='InputNeeds'>
        <h1>Where would you like to go?</h1>
        <form>
          <label>Roadie start</label>
          <input placeholder='start' name="start"/>
          <label>Roadie end</label>
          <input placeholder='end' name="end"/>
          <label>Number of days available</label>
          <input placeholder='numberDays' name="numberDays"/>
          {/* { <Search changeHandler={this.getCategory} />} */}
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = {
//   Form
// }

// const mapStateToProps = state => {
//   return {
//     pending: state.pending
//   }
// }

export default connect()(RoadieForm)

// export default connect(mapStateToProps, mapDispatchToProps)(Form)
