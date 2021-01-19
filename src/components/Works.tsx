import React from 'react';

// svg components
import {ReactComponent as Lines} from '../img/svg/rect-lines.svg';
import WorkLogo from '../img/svg/works-beauty.svg';


// jpg components
import Hair from '../img/jpg/hair.jpg';
import Eyebrows from '../img/jpg/eyebrows.jpg';
import BeautyCare from '../img/jpg/beauty-care.jpg';
import NailCare from '../img/jpg/nail-care.jpg';
import Waxing from '../img/jpg/nail-care.jpg';


interface Props{
}


const worksList = (target:string) =>{
    return(
        <li>
            <span className="n-span">{target}</span> 
            <div className="works__line"><Lines/></div>
        </li>
    )
}

  
const svgBackground = {
    background: `url(${WorkLogo}) no-repeat center`,
    backgroundSize: 'contain',
}


const Works: React.FC<Props> = () =>{
    return( 
        <section className="works">
            <div className="works__container">
                <div className="works__list">
                    <div className="works__list__container"  style = {svgBackground} >
                        <h2>.Be it.</h2>
                        <ul>
                            {worksList("Hair")}
                            {worksList("Eyebrows")}
                            {worksList("Beauty Care")}
                            {worksList("Nail Care")}
                            {worksList("Waxing")}
                        </ul>
                    </div>
                </div>
                <h2>.</h2>
                <div className="works__img-box">
                    <img src={Hair} alt="Sample Hair Work"/>
                </div>
            </div>
        </section>
    )
}

export default Works;