import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

import InfoReq from './InfoReq'

test('InfoReq renders the expected items', async () => {
  const { asFragment } = renderWithRedux(<InfoReq />)
  expect(asFragment()).toMatchSnapshot()
})
