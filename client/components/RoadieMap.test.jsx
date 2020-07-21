import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

import RoadieMap from './RoadieMap'

test('Roadie Map contains a map', async () => {
  const { asFragment } = renderWithRedux(<RoadieMap/>)
  expect(asFragment()).toMatchSnapshot()
})
