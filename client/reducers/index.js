import { combineReducers } from 'redux'

import dataSet from './dataSet'
import error from './error'
import name from './name'
import campsites from './campsites'

export default combineReducers({
  dataSet,
  error,
  name,
  campsites
})
