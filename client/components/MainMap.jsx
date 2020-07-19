import React from 'react'
import { Icon } from 'leaflet'
import { Map, TileLayer, Marker } from 'react-leaflet'

import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'
const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png'
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

// import mapLayers from './mapLayers'

// coordinates to center map
const position = [-40.852931, 172.762057]

const carIcon = new Icon({
  iconUrl: './graphics/just-kiwi.png',
  iconSize: [30, 30]
  // iconAnchor: [15, 42]
})

const endIcon = new Icon({
  // className: 'custom-div-icon',
  iconUrl: './graphics/just-kiwi.png',
  html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'>weekend</i>",
  iconSize: [50, 50]
})

const from = [-36, 175]
const to = [-38.13, 175.5413]

console.log('mapbox token', process.env.accessToken)

// Leaflet controls examples, leaflet maps maintain their own state. todo add ref to Map
// https://www.azavea.com/blog/2016/12/05/getting-started-with-react-and-leaflet/

const MainMap = (props) => {
  const { dataSet } = props
  console.log('the dataSet is for the trip planning is ', dataSet)

  return (
    <div className='map-container'>
      <Map
      // Add ref to
      // ref={m => { this.leafletMap = m }}
        center={position}
        zoom={5} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <TileLayer
          attribution={stamenTonerAttr}
          url={stamenTonerTiles}
        />
        <Marker
          position={from}
          icon={carIcon}
        />

        <Marker
          position={to}
          icon={endIcon}
        />

      </Map>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dataSet: state.dataSet
  }
}

export default connect(mapStateToProps)(MainMap)
