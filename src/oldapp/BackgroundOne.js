import { Parallax } from 'react-parallax';
import NorthernSky from '../images/northernsky.jpg';
import '../Images.css';

function BackOne() {
    return (
        <Parallax className="image" bgImage={NorthernSky} strength={1000}>
            <div className='content'>
                <span className='img-txt'>
                    Hello World, I am Cole Anderson
                </span>
            </div>

        </Parallax>
    )
};

export default BackOne;
