import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { addCampsites } from '../actions/campsites'

const campURL = 'http://localhost:3000/api/v1/coolstuff/campsites'

class CoolStuff extends Component {
  state= {
    campsites: []
  }

  componentDidMount () {
    request.get(campURL)
      .then(res => {
        const campsites = res.body
        const action = addCampsites(campsites)
        this.props.dispatch(action)
      })
  }

  render () {
    return (
      <>
        <h2>Campsites</h2>
        <h2>{this.props.campsites[0] && this.props.campsites[0].name}</h2>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    campsites: state.campsites
  }
}

export default connect(
  mapStateToProps
)(CoolStuff)
