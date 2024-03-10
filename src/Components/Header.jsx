import React from "react"
import { Link } from "react-router-dom"

const Header=()=>{
    return(<>
    
    <div style={{color:"white", background:"black", display:"flex"}}>
    <h1 style={{marginLeft:10}}>GrandCoffee</h1>
    <div style={{ marginTop: 35}}>
    <Link to="/" style={{color: "whitesmoke", textDecoration: "none" ,marginLeft:680}}>Home</Link>
    <Link to="/about" style={{ color: "whitesmoke", textDecoration: "none" ,marginLeft:25}}>About Us</Link>
    <Link to="/gallery" style={{ color: "whitesmoke", textDecoration: "none" ,marginLeft:25}}>Gallery</Link>
    <Link to="/services" style={{ color: "whitesmoke", textDecoration: "none" ,marginLeft:25}}>Services</Link>
    <Link to="/contact" style={{ color: "whitesmoke", textDecoration: "none" ,marginLeft:25}}>Contact</Link>

    </div>
    </div>
    </>);
}
export default Header;