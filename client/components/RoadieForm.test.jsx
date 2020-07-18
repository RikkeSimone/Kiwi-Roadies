import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

import RoadieForm from './RoadieForm'

test('RoadieForm contains a dropdown', async () => {
  const { asFragment } = renderWithRedux(<RoadieForm />)
  expect(asFragment()).toMatchSnapshot()
})

