import React from 'react'
import { Icon } from 'leaflet'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { connect } from 'react-redux'

// coordinates to center map
const position = [-40.852931, 172.762057]

const carIcon = new Icon({
  iconUrl: './graphics/kiwiroadieslogo.png',
  iconSize: [50, 50]
})

const startPosition = [-36, 175]

// To figure out how to pass map props if using this one?
// https://github.com/arjunghimire/react-leaflet-routing-machine-example

const MainMap = ({ dataSet }) => (

  <div className='map-container'>
    <Map center={position} zoom={5} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* <Routing
        // optional: map layer
        // mapLayer={
        //   name: 'OpenStreetMap',
        //   type: 'TileLayer',
        //   url: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
        //   attribution: '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
        // }

        // optional : initial region displayed
        initialRegion={startPosition}

        // optional: coordinates of the starting point
        from={startPosition}

        // optional: coordinates of the arriving point
        to={endPosition}
      /> */}

      <Marker
        position={startPosition}
        icon={carIcon}
      />

    </Map>
  </div>
)

const mapStateToProps = (state) => {
  console.log('state:', state.dataSet.trips[0])
  return {
    dataSet: state.dataSet
  }
}

export default connect(mapStateToProps)(MainMap)
