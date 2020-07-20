import React, { Component } from 'react'
import { connect } from 'react-redux'

class LatLong extends Component {

function getCoordsOfNextPoint (firstPoint, nextPoint, prevXY = { x: 0, y: 0 }) {
  const bearing = turf.bearing(firstPoint, nextPoint)
  const distance = turf.distance(firstPoint, nextPoint, { units: 'kilometers' })

  const xy = {
    x: prevXY.x + distance * 1000 * Math.cos(bearing * Math.PI / 180),
    y: prevXY.y + distance * 1000 * Math.sin(bearing * Math.PI / 180)
  }

  return xy
}

const myFirstPoint = [-75.343, 39.984]
const mySecondPoint = [-75.534, 39.123]
const secondPointXYCoords = getCoordsOfNextPoint(myFirstPoint, mySecondPoint)

export default connect()(LatLong)
