import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

require('dotenv').config()

console.log('mapbox token for Directions map', process.env.ACCESS_TOKEN)

mapboxgl.accessToken = process.env.ACCESS_TOKEN

class DirectionsMap extends Component {
  updateView =(viewport) => {
    this.setState({ viewport })
  }

  componentDidMount () {
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [172.76205, -40.852931],
      zoom: 4
    })
  }

  render () {
    return (
      <>
        <p>Directions Map</p>
        <div ref={el => (this.mapWrapper = el)}
          className ="mapWrapper"/>
      </>
    )
  }
}

export default connect()(DirectionsMap)
