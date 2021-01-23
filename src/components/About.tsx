import React from 'react';

// jpg components
import Profile from '../img/jpg/about-pic.jpg';

export interface Props{

}

const About: React.FC<Props> = () => {
    return(
        <section className="about" id="About">
            <div className="about__container">
                <h2>.</h2>
                <div className="about__container__fit">
                    <div className="about__half">
                        <h1 className="about__title">Who Am I?</h1>
                    </div>
                    <div className="about__image-box">
                        <img src={Profile} alt="Hair sample"/>
                    </div> 
                    <div className="about__info">
                        <div className="about__info__container">
                            <h2> .Chanda Makondo.</h2>
                            <span className="n-span">#Experienced Professional</span>
                            <span className="n-span">#Certified Beauty Artist</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;