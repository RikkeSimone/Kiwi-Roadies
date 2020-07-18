import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

import Hello from './Hello'

test('Hello renders the expected items', async () => {
  const { asFragment } = renderWithRedux(<Hello />)
  expect(asFragment()).toMatchSnapshot()
})
