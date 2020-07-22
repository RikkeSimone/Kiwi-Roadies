import request from 'superagent'
import proj4 from 'proj4'

const campURL = 'http://localhost:3000/api/v1/coolstuff/campsites'

// EPSG 2193 NZGD2000 is the proj4string of the doc api data//
const tmerc = '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
// input coords World Geodetic System 1984 (G1762) used in conversion, check this string below?
const wgs84 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs'

export function getCampsites () {
  return request.get(campURL)
    .then(res => {
      const campsites = res.body
      // console.log('Long Lat:', proj4(tmerc, wgs84, [firstUTM.x, firstUTM.y]))
      campsites.forEach(campsite => {
        campsite.longLat = [campsite.x, campsite.y]
      })
      campsites.forEach(campsite => {
        campsite.longLat = proj4(tmerc, wgs84, campsite.longLat)
      })
      return (campsites)
    })
}
