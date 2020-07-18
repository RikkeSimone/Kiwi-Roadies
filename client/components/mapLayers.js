const mapboxToken = '';

const mapLayers = [
  {
    name: 'OpenStreetMap',
    type: 'TileLayer',
    url: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
    attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }, {
    name: 'WMS Tile Layer',
    type: 'WMSTileLayer',
    url: "https://demo.boundlessgeo.com/geoserver/ows",
    layers: 'nasa:bluemarble'
  },
]

export default mapLayers