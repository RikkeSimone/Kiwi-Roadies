import React, { Component } from 'react'
import { connect } from 'react-redux'

// our actions
import { addCampsites } from '../actions/campsites'
// import proj4 from 'proj4'
import { addHuts } from '../actions/huts'
import { addTracks } from '../actions/tracks'

// our functions
import { getCampsites } from './getCampsites'
import { getHuts } from './getHuts'
import { getTracks } from './getTracks'

// our data
import beaches from '../../data/beachData'
import bikeTrack from '../../data/bikeData'
import nationalPark from '../../data/nationalparks'

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
        <div className="coolcontainer">
          <h2>Awesome choice!</h2>
          <p>Your roadie will start in {this.props.startcity} heading to {this.props.endcity}</p>
          <h2>While you&quot;re there, grab your togs and head off to the beach!</h2>
          {beaches.map(beach => {
            if (beach.cities.includes(this.props.endcity)) {
              return (
                <div>
                  <p>Name: {beach.name}</p>
                </div>
              )
            }
          }
          )}

          <p>On the map we have outlined some campsites, tracks and huts for you,
            please visit <a target="_blank" href="https://www.doc.govt.nz/">Department of Conservation</a> for more information.
          </p>

          <img></img>

        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    huts: state.huts,
    tracks: state.tracks,
    startcity: state.roadieform[0][0],
    endcity: state.roadieform[0][1]
  }
}

export default connect(mapStateToProps)(CoolStuff)
