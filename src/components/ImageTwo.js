import { Parallax } from 'react-parallax'
import Satellite from '../img/satellite.jpeg'

const ImageTwo = () => (
  <Parallax className="image" bgImage={Satellite} strength={800}>
    <div className="content"></div>
  </Parallax>
)

export default ImageTwo
