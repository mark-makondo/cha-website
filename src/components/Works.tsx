import React, { DetailedHTMLProps } from 'react';

// svg components
import {ReactComponent as Lines} from '../img/svg/rect-lines.svg';
import WorkLogo from '../img/svg/works-beauty.svg';


// jpg components
import Hair from '../img/jpg/hair.jpg';
import Eyebrows from '../img/jpg/eyebrows.jpg';
import BeautyCare from '../img/jpg/beauty-care.jpg';
import NailCare from '../img/jpg/nail-care.jpg';
import Waxing from '../img/jpg/nail-care.jpg';
import Helper from '../helper/helper';

// query 
// let works_imgBox = document.querySelector(".works__img-box img");
let works_hair = Helper.querySelector(".works__list__container ul li:nth-of-type(1) span");
let works_eyebrows = Helper.querySelector(".works__list__container ul li:nth-of-type(2) span");
let works_beautyCare = Helper.querySelector(".works__list__container ul li:nth-of-type(3) span");
let works_nailCare = Helper.querySelector(".works__list__container ul li:nth-of-type(4) span");
let works_waxing = Helper.querySelector(".works__list__container ul li:nth-of-type(5) span");
// let img_box = Helper.getElementByIdImage("img-box");
let img_box = document.getElementById("img-box");

  
const svgBackground = {
    background: `url(${WorkLogo}) no-repeat center`,
    backgroundSize: 'contain',
}

interface imageesI{
    image: [
        {
            id:number,
            img:string
        },
        {
            id:number,
            img:string
        },
        {
            id:number,
            img:string
        },
        {
            id:number,
            img:string
        },
        {
            id:number,
            img:string
        },
    ]
}

const images:imageesI = {
    image: [
        {
            id: 0,
            img: Hair
        },
        {
            id: 1,
            img: Eyebrows
        },
        {
            id: 2,
            img: BeautyCare
        },
        {
            id: 3,
            img: NailCare
        },
        {
            id: 4,
            img: Waxing
        }
    ]
}

const switch_img = (target:string) => {
   
}

const clickHandler = () => {
    
}



const worksList = (target:string, i:number) =>{
    return(
        <li className={`list__${target}`} key={i}>
            <span className="n-span">{target}</span> 
            <div className="works__line"><Lines/></div>
        </li>
    )
}

 
interface Props{
}

const Works: React.FC<Props> = () =>{
    let lists = ["Hair", "Eyebrows", "Beauty Care", "Nail Care", "Waxing"];

    return( 
        <section className="works" id="Works">
            <div className="works__container">
                <div className="works__list">
                    <div className="works__list__container"  style = {svgBackground} >
                        <h2>.Be it.</h2>
                        <ul>
                            {lists.map( (list, i) => worksList(list, i))}
                        </ul>
                    </div>
                </div>
                <h2>.</h2>
                <div className="works__img-box">
                    <img id="img-box" src={Hair} alt="Featured Works"/>
                </div>
            </div>
        </section>
    )
}

export default Works;