import React, { useState } from 'react'
import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'

import MapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// coordinates to center map
const position = [172.762057, -40.852931]

const from = [175, -36]
const to = [175.5413, -38.13]

console.log('mapbox token', process.env.ACCESS_TOKEN)

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2ltbmV3emVhbGFuZCIsImEiOiJja2NzY3Q3anMxaXY4MnltazVsdHMxNGMyIn0.Vpc0ObF_wq6PfnZTfWTxJQ'
// Leaflet controls examples, leaflet maps maintain their own state. todo add ref to Map
// https://www.azavea.com/blog/2016/12/05/getting-started-with-react-and-leaflet/

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

  return (
    <div>
      <p>map</p>
      <MapGL
        {...viewport}
        width="60vw"
        height="80vh"
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={viewport => viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dataSet: state.dataSet
  }
}

export default connect(mapStateToProps)(MainMap)
