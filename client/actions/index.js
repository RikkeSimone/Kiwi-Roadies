export const ADD_NAME = 'ADD_NAME'
export const RECEIVED_INFO = 'RECEIVED_INFO'

export const addName = (name) => {
  return {
    type: 'ADD_NAME',
    name: name,
    waiting: true
  }
}

export const turnOffWait = () => {
  return {
    type: 'RECEIVED_INFO',
    waiting: false
  }
}
