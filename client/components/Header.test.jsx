import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

import Header from './Header'

test('Header contains a logo', async () => {
  const { asFragment } = renderWithRedux(<Header />)
  expect(asFragment()).toMatchSnapshot()
})
