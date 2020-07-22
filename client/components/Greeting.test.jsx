import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

import Greeting from './Greeting'

test('Greeting displays welcoming message', async () => {
  const { asFragment } = renderWithRedux(<Greeting />)
  expect(asFragment()).toMatchSnapshot()
})
