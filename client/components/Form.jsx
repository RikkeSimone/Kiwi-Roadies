import React from 'react'
// import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { Redirect, useHistory } from 'react-router-dom'

// import Loading from './Loading'
// import Search from './Search'

class Form extends React.Component {
  // state = {

  // }

  changeHandler = (ev) => {
    const { value, start, end, numberDays } = ev.target
    this.setState({
      [start]: value,
      [end]: value,
      [numberDays]: value
    })
  }

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
        <Form onSubmit={this.onClick} >
          <Form.Field>
            <label>Go from</label>
            <input placeholder='start' name="start"/>
          </Form.Field>
          <Form.Field>
            <label>to</label>
            <input placeholder='end' name="end"/>
          </Form.Field>
          <Form.Field>
            <label>Number of days available</label>
            <input placeholder='numberDays' name="numberDays"/>
          </Form.Field>
          {/* <Search changeHandler={this.getCategory} />
          <Button type='submit'>Submit</Button> */}
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  Form
}

const mapStateToProps = state => {
  return {
    pending: state.pending
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
