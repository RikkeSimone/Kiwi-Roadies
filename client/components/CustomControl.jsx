import { BaseControl } from 'react-map-gl'

class CustomControl extends BaseControl {
  toCoords = ({ x, y }) => {
    const [longitude, latitude] = this._context.viewport.unproject([x, y])
    return { longitude, latitude }
  }

  render () {
    return null
  }
}

export default CustomControl
