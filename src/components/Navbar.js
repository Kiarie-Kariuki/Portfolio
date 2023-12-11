import collins from '../Images/collins.JPG'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';


console.log (collins)

function Navbar(){

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 460); 

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return(
        <div className='NavbarContainer'>
            <div className={`Navbar ${visible ? '' : 'scrolled'}`} id="navbar">
                <div className='cv'>
                    <h2>ONLINE CV</h2>
                </div>
                <div className="nav-icons">
                    <ul className="icon">
                        <li> ABOUT</li>
                        <li>SKILL</li>
                        <li>EXPERIENCE</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
            <div className="Photocard">
                <img className="photo" src={collins} alt="Collins"/>
            </div>
            <div className='intro'>
                <h1 className='name'>Collins K. Kiarie</h1>
                <h3 className='info'>SOFTWARE ENGINEER, FULLSTACK DEVELOPER</h3>
            </div>
            <div className='buttons'>
                <div className='cvButton'>
                    <button className='cv'> CV </button>
                </div>
                <div className='hireButton'>
                    <button className='hire'> Hire Me </button>
                </div>
            </div>
            <div className='share'>
                <ul className='icons'>
                    <li>
                        <a href='https://github.com/yourusername'>
                            <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/collins-kiarie'>
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;


