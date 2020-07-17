import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

import Footer from './Footer'

test('Footer contains names of website creators', async () => {
  const { asFragment } = renderWithRedux(<Footer />)
  expect(asFragment()).toMatchSnapshot()
})
