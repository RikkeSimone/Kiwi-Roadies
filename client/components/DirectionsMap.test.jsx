import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

import DirectionsMap from './DirectionsMap'

test('Directions Map contains a map', async () => {
  const { asFragment } = renderWithRedux(<DirectionsMap/>)
  expect(asFragment()).toMatchSnapshot()
})
