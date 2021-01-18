import React from 'react';

// svg components
import {ReactComponent as WorkLogo} from '../img/svg/works-beauty.svg';
import {ReactComponent as Lines} from '../img/svg/rect-lines.svg';


// jpg components
import Hair from '../img/jpg/hair.jpg';
import Eyebrows from '../img/jpg/eyebrows.jpg';
import BeautyCare from '../img/jpg/beauty-care.jpg';
import NailCare from '../img/jpg/nail-care.jpg';
import Waxing from '../img/jpg/nail-care.jpg';


interface Props{
}


const works__li = (target:string) =>{
    return(
        <li>
            <span className="n-span">{target}</span> 
            <div className="works__line"><Lines/></div>
        </li>
    )
}


const Works: React.FC<Props> = () =>{
    return(
        <section className="works">
            <div className="works__container">
                <div className="works__list">
                    <div className="works__list__logo"><WorkLogo/></div>
                    <div className="works__list__container">
                        <h2>.Be it.</h2>
                        <ul>
                            {works__li("Hair")}
                            {works__li("Eyebrows")}
                            {works__li("Beauty Care")}
                            {works__li("Nail Care")}
                            {works__li("Waxing")}
                        </ul>
                    </div>
                </div>

                <div className="works__img-box">
                    <img src={Hair} alt="Sample Hair Work"/>
                </div>
            </div>
        </section>
    )
}

export default Works;