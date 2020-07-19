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
        console.log('the campsites are ', campsites)
        // not currently dispatching to store?
        addCampsites(campsites)
      })
  }

  render () {
    return (
      <>
        <h2>Campsites</h2>
        <h3>name: Akapoua Bay Campsite, status: OPEN, region: Auckland</h3>
      </>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCampsites
  }
}

const mapStateToProps = state => {
  return {
    campsites: state.campsites
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoolStuff)
