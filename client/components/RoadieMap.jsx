import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'

import ReactMapGL, { NavigationControl } from 'react-map-gl'
import { _goToWellington, _goToAuckland, _goToRaglan, _goToThames, _goToWhangarei } from './goTo.js'
// import { point } from 'leaflet'

require('dotenv').config()
// some inspiration https://greatescape.co/

const MAPBOX_TOKEN = process.env.ACCESS_TOKEN

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

// maker styling
// const style = {
//   padding: '10px',
//   color: '#fff',
//   cursor: 'pointer',
//   background: '#1978c8',
//   borderRadius: '6px'
// }

class MainMap extends Component {
  state= {
    viewport: {
      latitude: -40.852931,
      longitude: 172.76205,
      zoom: 4,
      bearing: 0,
      pitch: 0,
      width: 500,
      height: 500
    }
  }

  componentDidMount () {
    if (this.props.name) {
      setTimeout(() => {
        document.getElementById('akl-btn').click()
      }, 2000)
      setTimeout(() => {
        document.getElementById('rgl-btn').click()
      }, 25000)
      setTimeout(() => {
        document.getElementById('wlgtn-btn').click()
      }, 15000)
    }
  }

  updateView =(viewport) => {
    this.setState({ viewport })
  }

  render () {
    const { viewport } = this.state
    return (
      <>
        { this.props.name &&
      <div className="roadiemap-container">
        <button className="map-btn" id="akl-btn" onClick={() => _goToAuckland(viewport, this.updateView)}>Go to Auckland</button>
        <button className="map-btn" id="wlgtn-btn" onClick={() => _goToWellington(viewport, this.updateView)}>Go to Wellington</button>
        <button className="map-btn" id="rgl-btn" onClick={() => _goToRaglan(viewport, this.updateView)}>Go to Raglan</button>
        <button className="map-btn" id="th-btn" onClick={() => _goToThames(viewport, this.updateView)}>Go to Thames</button>
        <button className="map-btn" id="wh-btn" onClick={() => _goToWhangarei(viewport, this.updateView)}>Go to Whangarei</button>

        <ReactMapGL
          {...this.state.viewport}
          width="60vw"
          height="60vh"
          mapStyle="mapbox://styles/mapbox/light-v10"
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <div className="nav" style={navStyle}>
            <NavigationControl showCompass ={false} />
          </div>
        </ReactMapGL>

      </div>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    trips: state.dataSet.trips,
    name: state.name
  }
}

export default connect(mapStateToProps)(MainMap)
