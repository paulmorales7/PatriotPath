import React from 'react';
import logo from '../assets/PatriotPathLogo.png';
import { MdMilitaryTech } from "react-icons/md"
import { IoHomeOutline } from "react-icons/io5";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { TbInfoHexagonFilled } from "react-icons/tb";
import { RiContactsBook3Line } from "react-icons/ri";

import './sideNav.css';


function sideNav() {

    return (
        <div className='sideBar'>

           <div className='logoContainer'>
                <img src={logo} alt="logo" className='logo'/>
                {/* <h2 className="title">Patriot Path</h2> */}
           </div> 

           <div className="expandContainer">
                <div className="expandTrigger"></div>
                <div className="expandMenu"></div>
           </div>



           <div className="profileContainer">
                <div className="profileInfo">
                <p className="userName">Hello, user 👋</p>
                </div>
                   
                    {/* possibly another user info displayed here  */}
           </div>

           <div className="contentContainer">
            <ul>
                <li>
                    <IoHomeOutline className='navIcon'/>
                    <a href= "/home">Home</a>
                </li>
                <li>
                    <BsFillSuitcaseLgFill className='navIcon'/>
                    <a href= "/services">Services</a>
                </li>
                <li>
                    <GrArticle className='navIcon'/>
                    <a href= "/blog">Blog</a>
                </li>
                <li>
                    <TbInfoHexagonFilled className='navIcon aboutIcon'/>
                    <a href= "/about">About Us</a>
                </li>
                <li>
                    <RiContactsBook3Line className='navIcon'/>
                    <a href= "/contact">Contact Us</a>
                </li>
                <li>
                    <RiContactsBook3Line className='navIcon'/>
                    <a href= "/contact">Another one</a>
                </li>
            </ul>
           </div>
        </div>
    )
}

export default sideNav;