import React from "react";
import './Home.css'
import video from '../../assets/video/galexy_video.mp4'
import { NavLink } from "react-router-dom";
const Home = () => {
    return <div className="home">
        <div className="home_content">
            <div className="home_info">
                <span>So, you want to travel to</span>
                <h1>SPACE</h1>
                <p>  Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="home_circle">
                <NavLink to='/destination'>
                    <span>
                        Explore
                    </span>
                </NavLink>
            </div>
        </div>
    </div>;
};

export default Home;
