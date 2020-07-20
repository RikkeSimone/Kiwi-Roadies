import React from 'react'
import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'

import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

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

const MainMap = (props) => {
  const { roadieform, dataSet, campsites } = props
  console.log('the dataSet is for the trip planning is ', dataSet)
  console.log('the roadieform is ', roadieform)
  console.log('the campsites are ', campsites)

  const viewport = {
    latitude: -40.852931,
    longitude: 172.76205,
    zoom: 4,
    bearing: 0,
    pitch: 0
  }

  return (
    <div className="root" >
      <ReactMapGL
        {...viewport}
        width="60vw"
        height="60vh"
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={viewport => viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <div className="nav" style={navStyle}>
          {/* <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })}/> */}
        </div>
      </ReactMapGL>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    roadieform: state.roadieform,
    dataSet: state.dataSet,
    campsites: state.campsites
  }
}

export default connect(mapStateToProps)(MainMap)
