import React, { useState } from 'react'
import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'

import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import DeckGL, { ArcLayer } from 'deck.gl'

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

  const arcs = [
    {
      flyFrom: 'AUCKLAND',
      flyTo: 'THAMES',
      source: [174.7633, -36.8485],
      target: [175.533333, -37.133333]
    },
    {
      flyFrom: 'AUCKLAND',
      flyTo: 'RAGLAN',
      source: [174.7633, -36.8485],
      target: [174.8718, -37.8014]
    },
    {
      flyFrom: 'AUCKLAND',
      flyTo: 'WHANGEREI',
      source: [174.7633, -36.8485],
      target: [174.3237, -35.7251]
    }]

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
        <DeckGL
          viewState={viewport}
          layers={[
            new ArcLayer({
              id: 'flight-arcs',
              data: arcs,
              getSourcePosition: d => d.source,
              getTargetPosition: d => d.target,
              getSourceColor: () => [0, 191, 255, 120],
              getTargetColor: () => [0, 0, 128, 120],
              getWidth: () => 4
            })
          ]}
        />
        <div className="nav" style={navStyle}>
          {/* <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })}/> */}
        </div>
        <Marker
          longitude={arcs[0].source[0]}
          latitude={arcs[0].source[1]}
        >
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              cursor: 'pointer',
              fill: '00BFFF',
              stroke: 'none',
              opacity: '0.6',
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
    roadieform: state.roadieform,
    dataSet: state.dataSet,
    campsites: state.campsites
  }
}

export default connect(mapStateToProps)(MainMap)
