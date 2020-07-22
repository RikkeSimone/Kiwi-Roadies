import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import 'regenerator-runtime/runtime'

import CoolStuff from './CoolStuff'

jest.mock('./getCampsites', () => {
  return {
    getCampsites: function () {
      return Promise.resolve([
        { assetId: 100000811, name: 'LITTLE HELLFIRE CAMPSITE' },
        { assetId: 100030221, name: 'Lake Mackenzie Campsite' }
      ])
    }
  }
})

jest.mock('./getHuts', () => {
  return {
    getHuts: function () {
      return Promise.resolve([
        { assetId: 100000034, name: 'Bull Creek Hut' },
        { assetId: 100030976, name: 'Kellys Hunters Hut' }
      ])
    }
  }
})

jest.mock('./getTracks', () => {
  return {
    getTracks: function () {
      return Promise.resolve([
        { assetId: '1e72f18c-a04b-448b-95c5-2ce387948372', name: 'Te Iringa Track' },
        { assetId: 'b3e33c02-1732-4820-8715-4c7b9e337bd4', name: 'Arrowtown Chinese Settlement' }
      ])
    }
  }
})

test('CoolStuff has list of cool stuff to do', async () => {
  const { asFragment } = renderWithRedux(<CoolStuff/>)
  expect(asFragment()).toMatchSnapshot()
})

test('CoolStuff can take in an array from our Campsites API', async () => {
  renderWithRedux(<CoolStuff />)
  const post = await screen.findByText('LITTLE HELLFIRE CAMPSITE')
  expect(post).toBeInTheDocument()
})

test('CoolStuff can take in an array from our Huts API', async () => {
  renderWithRedux(<CoolStuff />)
  const post = await screen.findByText('Bull Creek Hut')
  expect(post).toBeInTheDocument()
})

test('CoolStuff can take in an array of items from our Tracks API', async () => {
  renderWithRedux(<CoolStuff />)
  const post = await screen.findByText('Te Iringa Track')
  expect(post).toBeInTheDocument()
})
