import { combineReducers } from 'redux'

import dataSet from './dataSet'
import error from './error'
import name from './name'
import roadieform from './roadieform'

export default combineReducers({
  dataSet,
  error,
  name,
  roadieform
})
