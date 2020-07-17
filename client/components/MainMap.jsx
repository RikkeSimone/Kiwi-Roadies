import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'

const position = [-36.8, 174.7]
export default function App () {
  return (

    <Map center={position} zoom={8}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>

  )
}
