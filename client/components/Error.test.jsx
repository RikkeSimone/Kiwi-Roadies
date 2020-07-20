import React from 'react'
import { renderWithRedux } from '../testing/utils'
import '@testing-library/jest-dom'
// To resolve the ReferenceError: regeneratorRuntime is not defined error, we need to import this runtime module
/* eslint-disable no-unused-vars */
import regeneratorRuntime from 'regenerator-runtime'
/* eslint-enable no-unused-vars */
import Error from './Error'
// const initialState = {
//   error: null
// }

const newState = {
  error: 'error'
}

// test('Error component for falsey for initial store value and when there is no error', async () => {
//   const { asFragment } = renderWithRedux(<Error />, { initialState })
//   expect(asFragment()).toMatchSnapshot()
// })

test('Error component for truthy when store changes', async () => {
  const { asFragment } = renderWithRedux(<Error />, { newState })
  expect(asFragment()).toMatchSnapshot()
})
