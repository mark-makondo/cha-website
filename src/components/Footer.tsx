import React from 'react';

// svg components
import {ReactComponent as Logo} from '../img/svg/cha-logo.svg';

interface Props{

}

const Footer: React.FC<Props> = ({}) => {
    return(

        <section className="footer" id="Contact">
            <div className="footer__container">
                <div className="footer__logo outside"><Logo/></div>
                <span className="n-span">Check this out for more!</span>
                <div className="footer__contacts">
                    <div className="footer__logo inside"><Logo/></div>
                    <ul>
                        <li> 
                            <span><a href="https://www.facebook.com/chaartistbeauty"><i className="fab fa-facebook"></i></a></span>
                            <span className="f-span"><a href="https://www.facebook.com/chaartistbeauty">|Facebook</a></span>
                        </li>
                        <li> 
                            <span><a href="https://www.facebook.com/chaartistbeauty"><i className="fab fa-instagram"></i></a></span>
                            <span className="f-span"><a href="https://www.facebook.com/chaartistbeauty">|Instagram</a></span>
                        </li>
                    </ul>
                </div>
                <span className="f-span">Thank you for visiting my page!</span>
            </div>
        </section>
    )
}

export default Footer;