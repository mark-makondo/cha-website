import React, { useEffect } from 'react';

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
    spanId: string,
    setSpanId: any
}


const Works: React.FC<Props> = ({spanId, setSpanId}) =>{
    
    const imageHandler = () => {
        let works_list = document.querySelectorAll(".works__list__container ul li");
        let img_box = document.querySelector("#img-box") as HTMLImageElement;

        const switch_img = (target:string) => {
            img_box.src = target;
        }

        let images = [Hair, Eyebrows, BeautyCare, NailCare, Waxing];

        Array.prototype.forEach.call( works_list, (el, i) => {
            let listItem = "list__"+i;

            if(spanId === listItem){
                let img = images[i]
                switch_img(img);
            }
        })
    }
    
    const getCurrentId = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        spanId = e.currentTarget.id;

        setSpanId(spanId);
    }
   
    const worksList = (target:string, i:number) =>{
        return(
            <li className={`list__${target}`} key={i}>
                <span onClick={getCurrentId} id={`list__${i}`} className="n-span">{target}</span> 
                <div className="works__line"><Lines/></div>
            </li>
        )
    }

    const svgBackground = {
        background: `url(${WorkLogo}) no-repeat center`,
        backgroundSize: 'contain',
    }

    useEffect(()=>{
        imageHandler()
    },[spanId])
    

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
                    <img id="img-box" alt="Featured Works" src={Hair} />
                </div>
            </div>
        </section>
    )
}

export default Works;