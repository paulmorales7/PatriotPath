import React, { useRef } from "react";
// import bgImg from '../assets/VeteransPic.jpg';
import { BsList } from "react-icons/bs";
import { GrLock } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { GrMailOption } from "react-icons/gr";
import './LandingPage.css';
 

function LandingPage() {

    const registerRef = useRef(null);
    const loginRef = useRef(null);


    function login() {
        if (loginRef.current && registerRef.current) {
            loginRef.current.classList.remove("hidden");
            loginRef.current.classList.add("active");
    
            registerRef.current.classList.remove("active");
            registerRef.current.classList.add("hidden");
        }
    }
    
    function register() {
        if (loginRef.current && registerRef.current) {
            registerRef.current.classList.add("active");
            loginRef.current.classList.add("hidden");
    
            // Make sure login doesn't have active class anymore
            loginRef.current.classList.remove("active");
            registerRef.current.classList.remove("hidden");
        }
    }

    function menuFunction() {

        var i = document.getElementById("navMenu");

        if(i.className === "nav-menu") {
            i.className += " responsive";
        } else {
            i.className = "nav-menu";
        }

    }

// need to fix nav btn not showing up


    return (
        <div className="wrapper">
            <nav className="nav">
                <div className="nav-logo">
                    <p>Patriot Path</p>
                </div>
                <div className="nav-menu" id="navMenu">
                    <ul>
                        <li><a href="#" className="link active">Home</a></li>
                        <li><a href="#" className="link">Blog</a></li>
                        <li><a href="#" className="link">Services</a></li>
                        <li><a href="#" className="link">About</a></li>

                    </ul>
                </div>
                <div className="nav-button">
                    <button className="btn white-btn" id="loginBtn" onClick={login}>Sign In</button>
                    <button className="btn" id="registerBtn" onClick={register}> Sign Up</button>
                </div>
                <div className="nav-menu-btn">
                    <BsList onClick={menuFunction}/>
                </div>

            </nav>

                    {/* Form Box */}
            <div className="form-box">

                    {/* Login form */}
                <div className="login-container" ref={loginRef} id="login">
                    <div className="top">
                        <span onClick={register}>Don't have an Account? <a href="#" >Sign Up</a></span>
                        <header>Login</header>
                    </div>

                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Username or Email"/>
                            <FaRegUser className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Password"/>
                            <GrLock className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="submit" className="submit" value="Register"/>
                        </div>

                        <div className="two-col"> 
                            <div className="one">
                                <input type="checkbox" id="login-check"/>
                                <label htmlFor="login-check">Remember Me</label>
                            </div>
                            <div className="two">
                                <label><a href="#">Forgot Password?</a></label>
                            </div>

                        </div>
                    
                </div>

                    {/* Registration form */}
                <div className="register-container" ref={registerRef} id="register">
                    <div className="top">
                        <span onClick={login}>Have an Account? <a href="#" >Sign In</a></span>
                        <header>Sign Up</header>
                    </div>

                    <div className="two-forms">
                        
                            <div className="input-box">
                                <input type="text" className="input-field" id="nameBox" placeholder="First Name"/>
                                <FaRegUser className="icon"/>
                            </div>
                            <div className="input-box">
                                <input type="text" className="input-field" id="nameBox" placeholder="Last Name"/>
                                <FaRegUser className="icon"/>
                            </div>


                     </div>
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Email"/>
                            <GrMailOption className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Password"/>
                            <GrLock className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="submit" className="submit" value="Register"/>
                        </div>

                        <div className="two-col"> 
                            <div className="one">
                                <input type="checkbox" id="register-check"/>
                                <label htmlFor="register-check">Remember Me</label>
                            </div>
                            <div className="two">
                                <label><a href="#">Terms & Conditions</a></label>
                            </div>

                        </div>
                    
                </div>

            </div>
        </div>

    );
}

export default LandingPage;