import { combineReducers } from 'redux'

import dataSet from './dataSet'
import error from './error'
import name from './name'
import campsites from './campsites'
import waiting from './waiting'
import roadieform from './roadieform'
import nationalParks from './nationalParks'
import tripstatus from './tripstatus'
import city from './city'

export default combineReducers({
  dataSet,
  error,
  name,
  roadieform,
  nationalParks,
  campsites,
  waiting,
  tripstatus,
  city
})
