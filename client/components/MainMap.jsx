import React from 'react'
import { Icon, Marker, Popup } from 'leaflet'
import { Map, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'

// coordinates to center map
const position = [-40.852931, 172.762057]

const car = new Icon({
  iconUrl: './graphics/kiwiroadieslogo.png',
  iconSize: [25, 25]
})

const MainMap = ({ dataSet }) => (
  <div className='map-container'>
    <Map center={position} zoom={5} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Marker position={position}>
        <Popup>
            CAR
        </Popup> */}
      {/* </Marker> */}
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
