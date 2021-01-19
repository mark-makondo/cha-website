import React from 'react'


// svg components
import {ReactComponent as HeroLogo} from '../img/svg/hero-logo/hero-logo-colored.svg';

interface Props {

}

const Header: React.FC<Props> = ({}) => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                        <HeroLogo/>
                    </div>

                <div className="header__info n-span"> 
                    "I will bring out the <span>Beauty</span> in you"
                </div>
            </div>
        </div>
    );
}

export default Header;