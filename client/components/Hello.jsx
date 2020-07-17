import React from 'react'
import { connect } from 'react-redux'
import { addName } from '../actions'

let name = ''

class Hello extends React.Component {
  render () {
    return (
      <div className="hello-container">
        <div>
          <h1>Welcome to Kiwi Roadies</h1>
          <h2>Tell us who you are and lets get started</h2>
          <div className="name-form-cont">
            <form className="name-form">
              <input type="text"
                className="form-field"
                placeholder="What's your name?"
                onChange={(event) => (name = event.target.value)}
              />
              <button type="button"
                className="name-button"
                onClick={() => this.props.dispatch(addName(name))}
              >
            Lets get going
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Hello)
