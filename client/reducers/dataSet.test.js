import reducer from './dataSet'

describe('dataSet reducer', () => {
  it('should be able to read data from our trips.js file', () => {
    expect(reducer(undefined, {})).toEqual({
      trips: [
        {
          id: 1,
          location: 'Auckland',
          latitude: -36.8485,
          longitude: 174.7633,
          activity: 'Walk',
          drivetime: 0
        },
        {
          id: 2,
          location: 'Thames',
          latitude: -37.13832,
          longitude: 175.54011,
          activity: 'Walk',
          drivetime: 2
        },
        {
          id: 3,
          location: 'Raglan',
          latitude: -37.8014,
          longitude: 174.8718,
          activity: 'Beach',
          drivetime: 2.5
        },
        {
          id: 4,
          location: 'Whangarei',
          latitude: -35.7251,
          longitude: 174.3237,
          activity: 'Bike',
          drivetime: 2.5
        }

      ]
    })
  })
})
