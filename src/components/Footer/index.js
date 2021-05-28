import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css";

function Footer(){
    return (
        <div className="footer">
            <h1>Ableton</h1>
            <div className="footer__foot-row reverse">
                <div className="footer__foot-row__foot-column">
                    <a href=""> Register Live or Push  <i class="arrow-small right"></i>  </a>
                    <a href=""> About Ableton <i class="arrow-small right"></i></a>
                    <a href=""> Jobs <i class="arrow-small right"></i></a>

                    <div className="footer__foot-row__foot-column__social-media">
                        <div className="footer__foot-row__foot-column__social-media__box">
                            <FontAwesomeIcon className="social-media-icon" icon={faFacebook} /> 
                        </div>
                        <div className="footer__foot-row__foot-column__social-media__box">
                            <FontAwesomeIcon className="social-media-icon" icon={faTwitter} /> 
                        </div>
                        <div className="footer__foot-row__foot-column__social-media__box">
                            <FontAwesomeIcon className="social-media-icon" icon={faYoutube} /> 
                        </div>
                        <div className="footer__foot-row__foot-column__social-media__box">
                            <FontAwesomeIcon className="social-media-icon" icon={faInstagram} /> 
                        </div>              
                    </div>

                </div>
                <div className="footer__foot-row__foot-column">
                    <p>Education</p>
                    <a href=""> Offers for Students and teachers <i class="arrow-small right"></i></a>
                    <a href=""> Ableton for the Classroom <i class="arrow-small right"></i></a>
                    <a href=""> Ableton for Colleges and Universities <i class="arrow-small right"></i></a>
                </div>
                <div className="footer__foot-row__foot-column">
                    <p>Sign up to our newsletter</p>
                    <p id="text-style-normal">Enter your email address to stay up to date with the latest offers, 
                    tutorials, downloads, surveys and more.
                    </p>
                    <div className="footer__foot-row__foot-column_sign-up">
                        <input placeholder="  Email Address"></input>
                        <button> Sign up </button>
                    </div>
                </div>
            </div>

            <div className="footer__foot-row">
                <div className="footer__foot-row__foot-column">
                    <p>Community</p>
                    <a href="">Find Ableton User Groups  <i class="arrow-small right"></i>  </a>
                    <a href="">Find Certified Training <i class="arrow-small right"></i></a>
                    <a href="">Become a Certified Trainer <i class="arrow-small right"></i></a>
                </div>
                <div className="footer__foot-row__foot-column">
                    <p>Distributors</p>
                    <a href=""> Find Distributors <i class="arrow-small right"></i></a>
                    <a href=""> Try Push in-store<i class="arrow-small right"></i></a>
                </div>
                <div className="footer__foot-row__foot-column">
                    <p>Language and Location</p>

                    <div className="footer__foot-row__foot-column__select">
                        <div className="select-wrapper">
                            <select id="language-select">
                                <option value="">English</option>
                                <option value="">Deutsch</option>
                                <option value="">Français</option>
                                <option value="">日本語</option>
                                <option value="">简体中文</option>
                            </select>
                        </div>
                        <div className="select-wrapper">
                            <select id="country-select">
                                <option value="">United State</option>
                                <option value="">United Kingdom</option>
                                <option value="">France</option>
                                <option value="">Germany</option>
                                <option value="">Candada</option>
                                <option value="">Somalia</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__foot-last-row">
                <div className="footer__foot-row__secondary-link">
                        <a  href="">Archive</a>
                        <a  href="">Contact Us</a>
                        <a  href="">Press Resources</a>
                        <a  href="">Legal Info</a>
                        <a  href="">Privacy Police</a>
                        <a  href="">Cookie Settings</a>
                        <a  href="">Imprint</a>         
                </div>
                <div className="footer__foot-row__foot-row">
                    <FontAwesomeIcon className="footer__foot-row__foot-row__logo" icon={faLayerGroup} />  
                    <span>Made in Berlin</span>     
                </div>
            </div>
        </div>
    )
}

export default Footer;