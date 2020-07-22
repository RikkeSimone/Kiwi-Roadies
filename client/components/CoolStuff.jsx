import React, { Component } from 'react'
import { connect } from 'react-redux'

// our actions
import { addCampsites } from '../actions/campsites'
import { addHuts } from '../actions/huts'
import { addTracks } from '../actions/tracks'

// our functions
import { getCampsites } from './getCampsites'
import { getHuts } from './getHuts'
import { getTracks } from './getTracks'

// our data
import beaches from '../../data/beachData'
import bikeTracks from '../../data/bikeData'

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
          <h3>Awesome choice!</h3>
          <p>Your roadie will start in {this.props.startcity} heading to {this.props.endcity} for an incredible {this.props.daysaway}!</p>
          <h3>While you&apos;re there, grab your togs and head off to one of these amazing beaches!</h3>
          {beaches.map(beach => {
            if (beach.cities.includes(this.props.endcity)) {
              return (
                <div className="beachcontainer">
                  <p><img className="beachimage" src={beach.image}></img></p>
                  <p>Name: {beach.name}</p>
                  <p>Start here: {beach.start}</p>
                  <p>For more info: <a target="_blank" href={beach.url}>Click here</a></p>
                </div>
              )
            }
          }
          )}

          {bikeTracks.map(bike => {
            if (bike.cities.includes(this.props.endcity)) {
              return (
                <div className="bikecontainer">
                  <h3>... or if you&apos;re the more bike loving kind, check out these bike tracks nearby!</h3>
                  <p><img className="bikeimage" src={bike.image}></img></p>
                  <p>Name: {bike.name}</p>
                  <p>Difficulty: {bike.grade}</p>
                  <p>Start here: {bike.start}</p>
                  <p>Total km: {bike.km}</p>
                  <p>For more info: <a target="_blank" href={bike.url}>Click here</a></p>
                </div>
              )
            }
          })}

          <p>On the map we have flagged some of the best Kiwi campsites, tracks and huts for you!
            please visit <a target="_blank" href="https://www.doc.govt.nz/">Department of Conservation</a> for booking or more information.
          </p>

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
    endcity: state.roadieform[0][1],
    daysaway: state.roadieform[0][2]
  }
}

export default connect(mapStateToProps)(CoolStuff)
