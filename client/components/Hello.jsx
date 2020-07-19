import React from 'react'
import { connect } from 'react-redux'
import { acquireName } from '../actions'

let name = ''

class Hello extends React.Component {
  render () {
    return (
      <>
        { this.props.name
          ? null
          : <div className="hello-container">
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
                    onClick={() => this.props.dispatch(acquireName(name))}
                  >
            Lets get going
                  </button>
                </form>
              </div>
            </div>
          </div>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps)(Hello)
