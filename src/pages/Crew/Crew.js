import React, { useEffect, useState } from "react";
import './Crew.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from '../../data'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules
import { Pagination, EffectCube } from "swiper";

const Crew = () => {
    const [count, setCount] = useState(0)
    const [crew, setCrew] = useState(data.crew);
    const [currentData, setCurrentData] = useState(data.crew[0]);
    const handleClick = (ind) => {
        setCount(ind)
        console.log(ind, 'index')
    }

    const instantCall = (value) => {
        setCurrentData(data.destinations[value])
    }

    useEffect(() => {
        instantCall(count);
    }, [count])
    return <div className="crew">
        <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 0,
                shadowScale: 0,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
        >
            {
                crew?.map((person, index) => (<SwiperSlide key={index + 1}>
                    <>
                        <div className="crew_container">
                            <h2 className="crew_heading"><span className="color">0{index + 1}</span> MEET YOUR CREW</h2>
                            <div className="crew_left">
                                <span>{person.role}</span>
                                <h1>{person.name}</h1>
                                <p>{person.bio}</p>
                            </div>
                            <div className="crew_right">
                                <img src={person.images.png} />
                            </div>
                        </div></>
                </SwiperSlide>))
            }
        </Swiper>
    </div>;
};

export default Crew;
