import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'

import ReactMapGL, { NavigationControl } from 'react-map-gl'
import { _goToWellington, _goToAuckland, _goToRaglan, _goToThames, _goToWhangarei } from './goTo.js'

require('dotenv').config()

// some inspiration https://greatescape.co/

console.log('mapbox token', process.env.ACCESS_TOKEN)

const MAPBOX_TOKEN = process.env.ACCESS_TOKEN

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

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

  updateView =(viewport) => {
    this.setState({ viewport })
  }

  render () {
    const { viewport } = this.state
    return (
      <div >
        <button onClick={() => _goToAuckland(viewport, this.updateView)}>Go to Auckland</button>
        <button onClick={() => _goToWellington(viewport, this.updateView)}>Go to Wellington</button>
        <button onClick={() => _goToRaglan(viewport, this.updateView)}>Go to Raglan</button>
        <button onClick={() => _goToThames(viewport, this.updateView)}>Go to Thames</button>
        <button onClick={() => _goToWhangarei(viewport, this.updateView)}>Go to Whangarei</button>

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
    )
  }
}

export default connect()(MainMap)
