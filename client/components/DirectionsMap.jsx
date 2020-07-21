import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapBoxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

require('dotenv').config()

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

    const start = this.props.roadieform[0][0].concat(', New Zealand')
    const end = this.props.roadieform[0][1].concat(', New Zealand')

    const parks = this.props.nationalParks.nationalParks

    console.log('national parks', parks)

    map.on('load', function () {
      const directions = new MapBoxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving'
      })

      map.addControl(directions, 'top-left')

      parks.map(park => {
        var popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'National Park'
        )
        const marker = new mapboxgl.Marker(
          <div
            style={{
              width: '5rem',
              height: '5rem',
              borderRadius: '50%',
              cursor: 'pointer',
              fill: '00BFFF',
              stroke: 'none',
              opacity: '0.6'
            }} />
        )
          .setLngLat([park.long, park.lat])
          .setPopup(popup)
          .addTo(map)
      }
      )

      directions.setOrigin(start).setDestination(end)
    })
  }

  render () {
    console.log(this.props.roadieform)
    return (
      <>
        <p>Directions Map</p>
        <div ref={el => (this.mapWrapper = el)}
          className ="mapWrapper"/>
      </>
    )
  }
}

const mapStateToProps = state => ({
  roadieform: state.roadieform,
  nationalParks: state.nationalParks,
  campsites: state.campsites

})

export default connect(mapStateToProps)(DirectionsMap)
