import collins from '../Images/collins.JPG'


console.log (collins)

function Navbar(){
    return(
        <div>
            <div className="Navbar" id="navbar">
                <div>
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
                <h3 className='info'>I am a Software Developer</h3>
            </div>
            <div className='buttons'>
                <div className='cvButton'>
                    <button className='cv'> CV </button>
                </div>
                <div className='hireButton'>
                    <button className='hire'> Hire Me </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;


