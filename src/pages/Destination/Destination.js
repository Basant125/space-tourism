import React, { useEffect, useState } from "react";
import './Destination.css'
import { data } from '../../data'
// import TabPanel from '@mui/material/TabPanel';
import { Box, Tab, Tabs, } from "@mui/material";
const Destination = () => {
    const [count, setCount] = useState(0)
    const [destination, setDestination] = useState(data.destinations);
    const [currentData, setCurrentData] = useState(data.destinations[0]);
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
    return <div className="destination" >
        <div className="destination_container">
            <div className="destination_left">
                <h2><span className="color">01</span> PICK YOUR DESTINATION</h2>
                <img src={currentData.images.png} alt={destination.description} className="img_desti" />
            </div>
            <div className="destination_right">
                <div className="btn_group">
                    {
                        destination?.map((item, index) => (<button onClick={() => handleClick(index)} className={count === index ? 'border_color' : 'border_none'}>{item.name}</button>))
                    }
                </div>
                <div className="destination_content">
                    <h2>{currentData.name}</h2>
                    <p>{currentData.description}</p>
                </div>
                <div className="destination_sub_content">
                    <div>
                        <span>AVG. DISTANCE</span>
                        <h4>{currentData.distance}</h4>
                    </div>
                    <div>
                        <span>EST. TRAVEL TIME</span>
                        <h4>{currentData.travel}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Destination;
