import { ADD_START_CITY, ADD_CITY_VIEWPORT } from '../actions/index'

export default function addCity (state = {
  viewport: {
    latitude: -40.852931,
    longitude: 172.76205,
    zoom: 4,
    bearing: 0,
    pitch: 0,
    width: 500,
    height: 500
  }
}, action) {
  switch (action.type) {
    case ADD_START_CITY:
      return action.city
    case ADD_CITY_VIEWPORT:
      return action.viewport
    default:
      return state
  }
}
