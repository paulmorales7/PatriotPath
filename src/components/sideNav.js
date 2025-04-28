import React from 'react';
import { MdMilitaryTech } from "react-icons/md"
import './sideNav.css';


function sideNav() {

    return (
        <div className='sideBar'>
           <div className='logoContainer'>
                <MdMilitaryTech className="logo" />


           </div>
        </div>
    )
}

export default sideNav;