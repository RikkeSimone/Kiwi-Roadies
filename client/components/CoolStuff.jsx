import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCampsites } from '../actions/campsites'
import proj4 from 'proj4'

const campURL = 'http://localhost:3000/api/v1/coolstuff/campsites'

// EPSG 2193 NZGD2000 is the proj4string of the doc api data//
const tmerc = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
// input coords World Geodetic System 1984 (G1762) used in conversiom, check this string below?
const wgs84 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs'
import { addHuts } from '../actions/huts'
// import { addTracks } from '../actions/tracks'
import { addTracks } from '../actions/tracks'
import { getCampsites } from './getCampsites'
import { getHuts } from './getHuts'
import { getTracks } from './getTracks'

class CoolStuff extends Component {
  state= {
    campsites: [],
    tracks: [],
    huts: []
  }

  componentDidMount () {
    getCampsites()
      .then(campsites => {
        const action = addCampsites(campsites)
        this.props.dispatch(action)
      })

    getHuts()
      .then(huts => {
        const action = addHuts(huts)
        this.props.dispatch(action)
      })

    getTracks()
      .then(tracks => {
        const action = addTracks(tracks)
        this.props.dispatch(action)
      })
  }

  render () {
    return (
      <>
        <h2>Campsites</h2>
        <h2>{this.props.campsites[0] && this.props.campsites[0].name}</h2>

        <h2>Huts</h2>
        <h2>{this.props.huts[0] && this.props.huts[0].name}</h2>

        <h2>Tracks</h2>
        <h2>{this.props.tracks[0] && this.props.tracks[0].name}</h2>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    huts: state.huts,
    tracks: state.tracks
  }
}

export default connect(mapStateToProps)(CoolStuff)
