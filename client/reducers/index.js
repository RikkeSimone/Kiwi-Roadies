import { combineReducers } from 'redux'

import dataSet from './dataSet'
import error from './error'

export default combineReducers({
  dataSet,
  error
})
