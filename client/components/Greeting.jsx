import React from 'react'
import { connect } from 'react-redux'

class Greeting extends React.Component {
  render () {
    return (
      <>
        { this.props.name &&
           <div className="greeting-text">
             <h2>hey, {this.props.name}!</h2>
             <p>Tell us where you would like to go!</p>
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

export default connect(mapStateToProps)(Greeting)
