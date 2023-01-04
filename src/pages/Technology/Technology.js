import React, { useEffect, useState } from "react";
import './Technology.css';
import { data } from '../../data'
const Technology = () => {
    const [count, setCount] = useState(0)
    const [technology, setTechnology] = useState(data.technology);
    const [currentData, setCurrentData] = useState(data.technology[0]);
    const handleClick = (ind) => {
        setCount(ind)
    }

    const instantCall = (value) => {
        setCurrentData(data.technology[value])
    }

    useEffect(() => {
        instantCall(count);
    }, [count])
    return <div className="technology">
        <div className="technology_container">
            <div className="technology_left">
                <div className="btn_group_technolgy">
                    {
                        technology?.map((item, index) => (<button onClick={() => handleClick(index)} className={count === index ? 'background_color' : 'border'}>{index + 1}</button>))
                    }
                </div>
                <div className="technolgy_info">
                    <span>THE TERMINOLOGY...</span>
                    <h2>{currentData.name}</h2>
                    <p>{currentData.description}</p>
                </div>
            </div>
            <div className="technology_right">
                <img src={currentData.images.portrait} alt={currentData.name} />
            </div>
        </div>
    </div>;
};

export default Technology;
