import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

import CoolStuff from './CoolStuff'

test('CoolStuff has list of cool stuff to do', async () => {
  const { asFragment } = renderWithRedux(<CoolStuff/>)
  expect(asFragment()).toMatchSnapshot()
})
