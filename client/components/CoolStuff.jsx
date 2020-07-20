import React, { Component } from 'react'
import request from 'superagent'

import ReactMapGL from 'react-map-gl'
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

        // add conversion function here
        this.newLatLong()

        const action = addCampsites(campsites)
        this.props.dispatch(action)
      })
  }

  // new conversion function - changing xy to lat long using builtin mapGL function
  // unproject(xyz, opts)
  // z = 0 as there is no z in the data
  // take in the campsite res.body and map over it to find all of the x and y numbers
  // run it through the conversion (unproject([x, y, z]))
  // add the new lat and long to the array
  // send it up to store using line 21 (this.props.dispatch(action))

  newLatLong = (campsites) => {
    const x = this.array.x.map()
    const y = this.array.y.map()
    const z = 0
    return (
      const unproject = ([x, y, z]) => {
        array.x.map()
        // key
        y:
        // function for each object
        array.y.map()
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

export default connect(mapStateToProps)(CoolStuff)
