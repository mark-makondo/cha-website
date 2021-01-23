import React, { useEffect } from 'react';

// svg components
import WorkLogo from '../img/svg/works-beauty.svg';

// jpg components
import Default from '../img/jpg/default.jpg';
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
        let works_lists = document.querySelectorAll(".works__list__container ul li span");
        let img_box = document.querySelector("#img-box") as HTMLImageElement;

        const switch_img = (target:string) => {
            img_box.src = target;
        }

        let images = [Hair, Eyebrows, BeautyCare, NailCare, Waxing];

        Array.prototype.forEach.call( works_lists, (el, i) => {
            let listItem = "list__"+i;

            if(spanId === listItem){
                let img = images[i]
                switch_img(img);
                works_lists[i].classList.add("active");
            }else{
                works_lists[i].classList.remove("active");
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
                <span onClick={getCurrentId} id={`list__${i}`} className="n-span">{target}.</span> 
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
                        <h1 className="works__list__title">Featuring</h1>
                        <h2>#Be it</h2>
                        <ul>
                            {lists.map( (list, i) => worksList(list, i))}
                        </ul>
                    </div>
                </div>
                <h2>.</h2>
                <div className="works__img-box">
                    <img id="img-box" alt="Featured Works" src={Default} />
                </div>
            </div>
        </section>
    )
}

export default Works;