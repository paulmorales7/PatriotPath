import React from 'react';
import logo from '../assets/PatriotPathLogo.png';
import { IoMenu } from "react-icons/io5"
import { IoHomeOutline } from "react-icons/io5";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { TbInfoHexagonFilled } from "react-icons/tb";
import { RiContactsBook3Line } from "react-icons/ri";
import '../styles/main.scss';
// import './sideNav.css';


function sideNav() {

    return (
        <div className='sideBar'>

           <div className='logoContainer'>
                <img src={logo} alt="logo" className='logo'/>
                {/* <h2 className="title">Patriot Path</h2> */}
           </div> 

           <div className="expandContainer">
                <div className="expandTrigger"></div>
                {/* i want to add <IoMenu /> as the menu icon instead 
                using css as the menu and x */}
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
                <li className='active'>
                    <IoHomeOutline className='navIcon'/>
                    <a href= "/home">Home</a>
                </li>
                <li >
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
                <li className='active'>
                    <RiContactsBook3Line className='navIcon'/>
                    <a href= "/contact">Another one</a>
                </li>
            </ul>
           </div>
        </div>
    )
}

export default sideNav;