import { MapLayer, withLeaflet } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-routing-machine'

const startPosition = [-36, 175]
const endPosition = [-37.13, 175.5413]

class Routing extends MapLayer {
  createLeafletElement () {
    const { map } = this.props
    const leafletElement = L.Routing.control({
      waypoints: [L.latLng({ startPosition }), L.latLng({ endPosition })]
    }).addTo(map.leafletElement)
    return leafletElement.getPlan()
  }
}
export default withLeaflet(Routing)
