import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faSortDown } from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    return (
        <div className="navbar">
            <div className="nav-main">
                <div className="nav-main-links">
                    <FontAwesomeIcon style={{fontSize: 35}} icon={faLayerGroup} />
                    <a className="nav-links" href="">Live</a>
                    <a className="nav-links" href="">Push</a>
                    <a className="nav-links" href="">Link</a>
                    <a className="nav-links" href="">Packs</a>
                    <a className="nav-links" href="">Help</a>
                    <a className="nav-links" href="">More +</a>
                </div>
                <div className="nav-actions">
                    <a className="nav-links try-live-link" href="">Try Live for free</a>
                    <a className="nav-links log-in-link" href="">Log in or register</a>
                </div>
                <div className="nav-menu">
                    <FontAwesomeIcon style={{fontSize: 35}} icon={faLayerGroup} />
                    <a className="nav-menu-link" href="">Menu</a>     
                    <FontAwesomeIcon style={{fontSize: 14}} icon={faSortDown} />    
                </div>
            </div>

            <div className="navbar__line-break"></div>

            <div className="nav-secondary">
                <a className="secondary-links orange-link" href="">About</a>
                <a className="secondary-links" href="">Jobs</a>
            </div>

        </div>
    )
}

export default Navbar;

