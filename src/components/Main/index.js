import './Main.css'
import heroImage from '../../assests/images/heroImage.jpeg'
import photo_one from '../../assests/images/photo-1.jpeg'
import photo_two from '../../assests/images/photo-2.jpeg'
import photo_three from '../../assests/images/photo-3.jpeg'
import photo_four from '../../assests/images/photo-4.jpeg'
import photo_five from '../../assests/images/photo-5.jpeg'
import photo_six from '../../assests/images/photo-6-a.jpeg'
import photo_seven from '../../assests/images/photo-7.jpeg'
import photo_eight from '../../assests/images/photo-8.jpeg'
import poster from '../../assests/images/poster-meet-the-makers.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

function Main(){
    return(
        <div className="main-container">
            <div className="hero-container">
                <div className="hero-text-container">
                    <h1 className="hero-text-style">Ableton</h1>
                </div>
                <img className="hero-image" src={heroImage} alt="Logo" />
            </div>

            <div className='page-about'>
                <h1>We make <a href="">Live</a>,
                <a href=""> Push</a> and 
                <a href=""> Link </a>
                — unique software and hardware for music creation and performance. 
                    With these products, our community of users creates amazing things.
                </h1>
                <p>Ableton was founded in 1999 and released the first version of Live in 2001. 
                Our products are used by a community of dedicated musicians, sound designers, 
                and artists from across the world.
                </p>
            </div>

            <div className="page-about-collage">
                <div className="page-about-collage__background"></div>
                <div className="page-about-collage__left">
                    <div className="page-about-collage__left__image_container">
                        <img className="hero-image" src={photo_one} alt="Logo" />
                    </div>   
                </div>
                <div className="page-about-collage__right">
                    <div className="page-about-collage__right__image_container">
                        <img className="hero-image" src={photo_two} alt="Logo" />
                    </div>   
                </div>
            </div>

            <div className='page-about'>
                <h1>Making music isn’t easy. It takes time, effort, and learning. 
                But when you’re in the flow, it’s incredibly rewarding.
                </h1>
                <p>We feel the same way about making Ableton products. 
                The driving force behind Ableton is our passion for what we make, 
                and the people we make it for.
                </p>
            </div>

            <div className="page-about-video">
                <div className="page-about-video-container">
                </div>
                <p className='page-about-video-text'>Why Ableton - Juanpe Bolivar</p>
            </div>


            <div className='page-about'>
                <h1>We are more than 350 people from 30 different countries divided 
                between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
                </h1>
                <p>Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. 
                We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are 
                self-taught, and most of us are somewhere in between. What connects us is the shared belief that each 
                of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
                </p>
            </div>

            <div className="page-about-collage-two">
                <div className="page-about-collage-two__background"></div>
                <div className="page-about-collage-two__left"> 
                    <div className="page-about-collage-two__left_image_one">
                        <img className="hero-image" src={photo_three} alt="Logo" />
                    </div>
                    <div className="page-about-collage-two__left_image_two">
                        <img className="hero-image" src={photo_four} alt="Logo" />
                    </div>
                </div>
                <div className="page-about-collage-two__right">  
                    <img className="hero-image" src={photo_five} alt="Logo" />
                </div>
            </div>


            <div className='page-about'>
                <h1>We believe it takes focus to create truly outstanding instruments. 
                We only work on a few products and we strive to make them great.
                </h1>
                <p>Rather than having a one-size-fits-all process, we try to give our people what they need to work 
                their magic and grow. We’ve learned that achieving the best results comes from building teams 
                that are richly diverse, and thus able to explore problems from a wider set of perspectives. 
                We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
                </p>
            </div>

            <div className="page-about-poster-image">
                 <img className="poster-image" src={poster} alt="Logo" />
            </div>

            <div className='page-about'>
                <h1>We’re passionate about what we do, but we’re equally passionate about improving who we are.
                </h1>
                <p>We work hard to foster an environment where people can grow both personally and professionally, 
                and we strive to create a wealth of opportunities to learn from and with each other.
                </p>
                <p>Alongside an internal training program, employees are actively supported in acquiring new 
                knowledge and skills, and coached on applying these in their daily work. In addition, 
                staff-organized development and music salons are a chance to discuss new technologies, 
                production techniques and best practices.
                </p>
            </div>

        <div className="page-about-collage-three">
            <div className="page-about-collage-three__background"></div>
            <div className="page-about-collage-three__left">
                <img className="hero-image" src={photo_six} alt="Logo" />
            </div>
            <div className="page-about-collage-three__right">
                <img className="hero-image" src={photo_seven} alt="Logo" />           
            </div>
        </div>

        <div className='page-about'>
                <h1>We want our employees to love it here. Since we’re looking 
                for exceptional talent from around the world, we will do 
                everything we can to make your transition as easy as possible.
                </h1>
                <p>If you're joining us in Berlin, we'll help with relocation and paperwork. 
                We’ll even provide you with free German or English lessons. 
                Plus, working in Germany means you can expect comprehensive health insurance for you 
                and your family, as well as generous maternity and paternity leave. Office hours 
                are flexible, but it’s not all work; we have several company and team outings throughout 
                the year as well as a variety of fun, informal small-group activities.
                </p>
        </div>

        <div className="page-about-collage-four">
            <div className="page-about-collage-four__left">
                <img className="hero-image" src={photo_eight} alt="Logo" />
            </div>
            <div className="page-about-collage-four__right">
                <div className="page-about-collage-four__right__content">
                    <h1>We’re really proud of the work we’ve done so far. But there’s so much more to come. 
                    If you’d like to be a part of it, please join us. 
                    <a href=""> See latest jobs <i class="arrow right"></i> </a>
                    
                    </h1>
                </div>
            </div>
        </div>


        <div className="line-break"></div>

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


        </div>
    )
}

export default Main;