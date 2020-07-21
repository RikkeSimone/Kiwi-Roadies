import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCampsites } from '../actions/campsites'
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
