import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { addCampsites } from '../actions/campsites'
import proj4 from 'proj4'

const campURL = 'http://localhost:3000/api/v1/coolstuff/campsites'

// EPSG 2193 NZGD2000 is the proj4string of the doc api data//
const tmerc = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
//input coords World Geodetic System 1984 (G1762) used in conversiom, check this string below?  
const wgs84 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs'

class CoolStuff extends Component {
  state= {
    campsites: []
  }

  componentDidMount () {
    request.get(campURL)
      .then(res => {
        const campsites = res.body
        const firstUTM = res.body[0]
        console.log('Long Lat:', proj4(tmerc, wgs84, [firstUTM.x, firstUTM.y]))
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
