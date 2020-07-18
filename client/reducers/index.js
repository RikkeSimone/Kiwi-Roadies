import { combineReducers } from 'redux'

import dataSet from './dataSet'
import error from './error'
import name from './name'

export default combineReducers({
  dataSet,
  error,
  name
})
