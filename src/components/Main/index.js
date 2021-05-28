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
import Footer from '../Footer'

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
                    <iframe className="page-about-video-container__video" src="//www.youtube-nocookie.com/embed/9SbnhgjeyXA?wmode=transparent&controls=1&vq=hd1080&rel=0&showinfo=0&autohide=1&color=white&modestbranding=1&enablejsapi=1&autoplay=1">
                    </iframe> 
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
                <img id="page-about-collage-four__left__image" src={photo_eight} alt="Logo" />
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

        <Footer />
        </div>
    )
}

export default Main;