import { Parallax } from 'react-parallax';
import Fire from '../images/fire.jpg';
import '../Images.css';

function BackThree() {
    return (
        <Parallax className="image" bgImage={Fire} strength={1000}>
            <div className='content'>
                <span className='img-txt'>
                    I am a graduate of the University of Lethbridge with a B. Sc. in Computer Science
                </span>
            </div>

        </Parallax>
    )
};

export default BackThree;
