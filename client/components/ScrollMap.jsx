import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'regenerator-runtime/runtime'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapBoxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

require('dotenv').config()

console.log('mapbox token for Directions map', process.env.ACCESS_TOKEN)

mapboxgl.accessToken = process.env.ACCESS_TOKEN

// code from https://docs.mapbox.com/mapbox-gl-js/example/scroll-fly-to/

class ScrollMap extends Component {
  updateView =(viewport) => {
    this.setState({ viewport })
  }

  componentDidMount () {
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [172.76205, -40.852931],
      zoom: 12.21
    })

    const chapters = [
      {
        id: '1',
        title: 'The Takaka',
        description:
      'This is a test',
        camera: {
          center: [172.76205, -40.852931],
          zoom: 10,
          pitch: 50
        }
      },
      {
        id: '2',
        title: 'The Next place',
        description:
      'This is a test',
        camera: {
          center: [173.76205, -40.852931],
          zoom: 10,
          pitch: 50
        }
      }
    ]

    const title = document.getElementById('location-title')
    const description = document.getElementById('location-description')

    // On every scroll event, check which element is on screen
    window.onscroll = function () {
      var chapterNames = Object.keys(chapters)
      for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i]
        if (isElementOnScreen(chapterName)) {
          setActiveChapter(chapterName)
          break
        }
      }
    }

    var activeChapterName = 'takaka'
    function setActiveChapter (chapterName) {
      if (chapterName === activeChapterName) return

      map.flyTo(chapters[chapterName])

      document.getElementById(chapterName).setAttribute('class', 'active')
      document.getElementById(activeChapterName).setAttribute('class', '')

      activeChapterName = chapterName
    }

    function isElementOnScreen (id) {
      var element = document.getElementById(id)
      var bounds = element.getBoundingClientRect()
      return bounds.top < window.innerHeight && bounds.bottom > 0
    }
  }

  render () {
    return (
      <>

        <p>Scroll Map</p>
        <div id="map" ref={el => (this.mapWrapper = el)}
          className ="mapWrapper"/>

        <div id="features">
          <section id="takaka" className="active">
            <h3>Places</h3>
            <p>
Blah blah
            </p>
          </section>
        </div>
        
      </>
    )
  }
}

export default connect()(ScrollMap)
