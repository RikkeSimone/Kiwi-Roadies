// import React from 'react'
// import MapGL from '@urbica/react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'
// import { connect } from 'react-redux'

// require('dotenv').config()

// const MAPBOX_TOKEN = process.env.ACCESS_TOKEN

// const [position, setPosition] = trips.map({
//   console.log('marker:', trips.map),
//   latitute: 0,
//   longitute: 0
// })

// const style = {
//   padding: '10px',
//   color: '#fff',
//   cursor: 'pointer',
//   background: '#1978c8',
//   borderRadius: '6px'
// }

// const onDragEnd = (lngLat) => {
//   setPosition({ longitude: lngLat.lng, latitude: lngLat.lat })
// }

// return (
//   <MapGL
//     style={{ width: '100%', height: '400px' }}
//     mapStyle='mapbox://styles/mapbox/light-v9'
//     mapboxApiAccessToken={MAPBOX_TOKEN}
//     latitude={0}
//     longitude={0}
//     zoom={0}
//   >
//     <Marker
//       longitude={position.longitude}
//       latitude={position.latitude}
//       onDragEnd={onDragEnd}
//       draggable
//     >
//       <div style={style}>Hi there! 👋</div>
//     </Marker>
//   </MapGL>
// )

// export default connect(mapStateToProps)(MainMap)