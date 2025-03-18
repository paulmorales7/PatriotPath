import bgImg from '../assets/VeteransPic.jpg';
import './landingPage.css';

function landingPage() {
    return (
        <nav class="nav">
            <div class="nav-logo">
                <p>Patriot Path</p>
            </div>
            <div class="nav-menu">
                <ul>
                    <li><a href="#" class="link active">Home</a></li>
                    <li><a href="#" class="link active">Blog</a></li>
                    <li><a href="#" class="link active">Services</a></li>
                    <li><a href="#" class="link active">About</a></li>

                </ul>
            </div>
            <div class="nav-button">
                <button class="btn" id="loginBtn">Sign In</button>
                <button class="btn" id="registerBtn">Sign Up</button>

            </div>

        </nav>


    );
}

export default landingPage;