import React, { useState } from 'react'
import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'

import ReactMapGL, { Marker, Popup, Icon, ControlPanel, NavigationControl } from 'react-map-gl'
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

const iconSVG = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`
const SIZE = 20
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
    latitude: -36.86667,
    longitude: 174.76667
  }

  const target = {
    latitude: -38.13,
    longitude: 175.5413
  }

  return (
    <div className="root" >
      <p>map</p>
      <ReactMapGL
        {...viewport}
        width="60vw"
        height="80vh"
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={viewport => viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <div className="nav" style={navStyle}>
          {/* <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })}/> */}
        </div>
        <Marker
          longitude={source.longitude}
          latitude={source.latitude}
        >
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              cursor: 'pointer',
              fill: '#0d89c5',
              stroke: 'none',
              transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
            }}

          >
            <path d={iconSVG} />
          </svg>
        </Marker>

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
