import React from 'react'
import { renderWithRedux } from '../testing/utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime';

import MainMap from './MainMap'

test('MainMap contains a map', async () => {
  const { asFragment } = renderWithRedux(<MainMap />)
  expect(asFragment()).toMatchSnapshot()
})

