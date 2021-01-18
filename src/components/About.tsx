import React from 'react';

// jpg components
import Profile from '../img/jpg/about-pic.jpg';

interface Props{

}

const About: React.FC<Props> = () => {
    return(
        <div className="about">
            <div className="about__container">
                <div className="about__image-box">
                    <img src={Profile} alt="Hair sample"/>
                </div>

                <div className="about__info">
                    <h2> .Chanda Makondo.</h2>
                    <span className="n-span">.Certified Beauty Artist</span>
                    <span className="n-span">.Skilled @Everthing</span>
                </div>
            </div>
        </div>
    )
}

export default About;