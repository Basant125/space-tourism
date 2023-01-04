import React from "react";
import { Route, Routes } from "react-router-dom";
import Crew from "../../pages/Crew/Crew";
import Destination from "../../pages/Destination/Destination";
import Home from "../../pages/Home/Home";
import Technology from "../../pages/Technology/Technology";
import Nav from "../Nav/Nav";
import './Main.css'
const Main = () => {
    return <div className="main">
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
        </Routes>
    </div>;
};

export default Main;
