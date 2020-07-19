import React, { useState } from 'react'
import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'

import ReactMapGL, { Marker, Popup, Layer, ControlPanel, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// import DeckGL, { ArcLayer } from 'deck.gl'

// coordinates to center map
// const position = [172.762057, -40.852931]

// some inspiration https://greatescape.co/

console.log('mapbox token', process.env.ACCESS_TOKEN)

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2ltbmV3emVhbGFuZCIsImEiOiJja2NzY3Q3anMxaXY4MnltazVsdHMxNGMyIn0.Vpc0ObF_wq6PfnZTfWTxJQ'

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

const MainMap = (props) => {
  const { dataSet } = props
  console.log('the dataSet is for the trip planning is ', dataSet)

  const viewport = {
    latitude: -40.852931,
    longitude: 172.76205,
    zoom: 4,
    bearing: 0,
    pitch: 0
  }

  const source = {
    latitude: -36,
    longitude: 175
  }

  const target = {
    latitude: -38.13,
    longitude: 175.5413
  }

  return (
    <div className="root">
      <p>map</p>
      <ReactMapGL
        {...viewport}
        width="60vw"
        height="80vh"
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={viewport => viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          longitude={source.longitude}
          latitude={source.latitude}
          offsetTop={-20}
          offsetLeft={-10}
        >
Marker
        </Marker>
        <Popup
          longitude={source.longitude}
          latitude={source.latitude}
          // onClose={closePopup}
          closeButton={true}
          closeOnClick={true}
          // offsetTop={-30}
        >
          <p>Marker</p>
        </Popup>
      </ReactMapGL>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dataSet: state.dataSet
  }
}

export default connect(mapStateToProps)(MainMap)
