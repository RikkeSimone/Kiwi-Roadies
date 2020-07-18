// const initialCampState = {
//   campsites: []
// }

const campsites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CAMP':
      return {
        campsites: action.campsites
      }
    default:
      return state
  }
}

export default campsites
