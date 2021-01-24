import React from 'react';

// svg components
import {ReactComponent as Arrow} from '../img/svg/left-arrow.svg';

interface Props{}

const navList = (listName: string, i:number) =>{
    return(
        <li className={`list__${listName}`} key= {i}>
            <span className="n-span"><a href={`#${listName}`}>{listName}</a></span>
        </li>
    ) 
}

<li>

</li>
const Navbar: React.FC<Props> = () => {
    let lists = ["Home", "About", "Works", "Contact"];

    return(
        <div className="nav">
            <div className="nav__container">
                <ul>
                    {lists.map( (list, i) => navList(list, i) )}
                   
                </ul>
            </div>
            <div className="nav__arrow"><Arrow/></div>
        </div>
    )
}

export default Navbar;