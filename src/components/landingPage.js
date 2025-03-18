import bgImg from '../assets/VeteransPic.jpg';
import { BsList } from "react-icons/bs";
import { GrLock } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { GrMailOption } from "react-icons/gr";
import './landingPage.css';

function landingPage() {
    return (
        <div class="wrapper">
            <nav class="nav">
                <div class="nav-logo">
                    <p>Patriot Path</p>
                </div>
                <div class="nav-menu">
                    <ul>
                        <li><a href="#" class="link active">Home</a></li>
                        <li><a href="#" class="link">Blog</a></li>
                        <li><a href="#" class="link">Services</a></li>
                        <li><a href="#" class="link">About</a></li>

                    </ul>
                </div>
                <div class="nav-button">
                    <button class="btn white-btn" id="loginBtn">Sign In</button>
                    <button class="btn" id="registerBtn">Sign Up</button>
                </div>
                <div class="nav-menu-btn">
                    <BsList />
                </div>

            </nav>

                    {/* Form Box */}

            <div class="form-box">
                    {/* Registration form */}
                <div class="register-container" id="register">
                    <div class="top">
                        <span>Have an Account? <a href="#" onClick="login()">Login</a></span>
                        <header>Sign Up</header>
                    </div>

                    <div class="two-forms">
                        <div class="input-box">
                            <input type="text" class="input-field" placeholder="First Name"/>
                            <FaRegUser />
                        </div>
                        <div class="input-box">
                            <input type="text" class="input-field" placeholder="Last Name"/>
                            <FaRegUser />
                        </div>
                        <div class="input-box">
                            <input type="text" class="input-field" placeholder="Email"/>
                            <GrMailOption />
                        </div>
                        <div class="input-box">
                            <input type="text" class="input-field" placeholder="Password"/>
                            <GrLock />
                        </div>
                        <div class="input-box">
                            <input type="submit" class="submit" value="Register"/>
                        </div>

                        <div class="two-col"> 
                            <div class="one">
                                <input type="checkbox" id="register-check"/>
                                <label for="register-check">Remember Me</label>
                            </div>
                            <div class="two">
                                <label><a href="#">Terms & Conditions</a></label>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default landingPage;