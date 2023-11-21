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
        </div>
    );
}

export default Navbar;


