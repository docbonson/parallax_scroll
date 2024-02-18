import { Parallax } from 'react-parallax'
import spaceStation from '../img/spaceStation.jpeg'

const ImageThree = () => (
  <Parallax className="image" bgImage={spaceStation} strength={800}>
    <div className="content"></div>
  </Parallax>
)

export default ImageThree
