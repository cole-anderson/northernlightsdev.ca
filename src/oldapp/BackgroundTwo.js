import { Parallax } from 'react-parallax';
import SpaceSky from '../images/spacesky.jpg';
import '../Images.css';

function BackTwo() {
    return (
        <Parallax className="image" bgImage={SpaceSky} strength={1000}>
            <div className='content'>
                <span className='img-txt'>
                    I am a Software Developer residing in Alberta, Canada
                </span>
            </div>

        </Parallax>
    )
};

export default BackTwo;
