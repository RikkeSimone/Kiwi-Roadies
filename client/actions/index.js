import { _goToCity } from '../components/goTo'
import * as d3 from 'd3'
import { FlyToInterpolator } from 'react-map-gl'

export const ADD_NAME = 'ADD_NAME'
export const RECEIVED_INFO = 'RECEIVED_INFO'
export const ADD_TRIP = 'ADD_TRIP'
export const TURN_OFF_WAIT = 'TURN_OFF_WAIT'
export const ADD_START_CITY = 'ADD_START_CITY'
export const ADD_CITY_VIEWPORT = 'ADD_CITY_VIEWPORT'

export const addName = (name) => {
  return {
    type: 'ADD_NAME',
    name: name,
    waiting: true
  }
}

export const turnOffWait = () => {
  return {
    type: 'TURN_OFF_WAIT',
    waiting: false
  }
}

export const addTripRequest = (roadie) => {
  return {
    type: 'ADD_TRIP',
    roadie: roadie,
    waiting: true,
    name: null,
    tripstatus: true
  }
}

export function acquireName (name) {
  return (dispatch) => {
    dispatch(addName(name))
    setTimeout(() => {
      dispatch(turnOffWait())
    }, 3000)
  }
}

export function addCityViewPort (viewport) {
  return {
    type: 'ADD_CITY_VIEWPORT',
    viewport: viewport
  }
}

export function grabStartCity (city, ogViewport) {
  let cityViewPort
  if (city === 'Auckland') {
    cityViewPort = {
      viewport: {
        ...ogViewport,
        latitude: -36.8485,
        longitude: 174.7633,
        zoom: 14,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: d3.easeCubic
      }
    }
  } else if (city === 'Thames') {
    cityViewPort = {
      ...ogViewport,
      latitude: -41.2867,
      longitude: 174.7730,
      zoom: 14,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: d3.easeCubic
    }
  } else if (city === 'Whangarei') {
    cityViewPort = {
      ...ogViewport,
      latitude: -35.7251,
      longitude: 174.3237,
      zoom: 14,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: d3.easeCubic
    }
  }
  return (dispatch) => {
    dispatch(addCityViewPort(cityViewPort))
  }
}

export function acquireTripDetails (startcity, endcity, daysaway) {
  return (dispatch) => {
    dispatch(addTripRequest([startcity, endcity, daysaway]))
    setTimeout(() => {
      dispatch(turnOffWait())
    }, 1000)
  }
}
