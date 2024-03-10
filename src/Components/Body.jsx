import React from "react";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services";
import Contact from "./Contact";

import { Route,Routes } from 'react-router-dom'
const Body=()=>{
    return(<>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
    </Routes>
    </>);
}
export default Body;

