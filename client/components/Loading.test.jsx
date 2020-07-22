import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

import Loading from './Loading'

test('Loading renders driving kiwi', async () => {
  const { asFragment } = renderWithRedux(<Loading />)
  expect(asFragment()).toMatchSnapshot()
})
