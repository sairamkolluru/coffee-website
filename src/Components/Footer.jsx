import React from "react";

const Footer=()=>{
    return(<>
    <div style={{color:"white",backgroundColor:"black",display:"flex",justifyContent:"space-around"}}>
    <div style={{width:200}}>
        <h4>About</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro temporibus laudantium tenetur cupiditate esse sint recusandae repellat </p>
    </div>
    <div style={{width:200}}>
    <h4>Menu</h4>
    <p>Home</p>
    <p>About Us</p>
    <p>Gallery</p>
    <p>Services</p>
    <p>Contact Us</p>
    </div>
    <div style={{width:200}}>
        <h4>Useful Link</h4>
        <p>Adipiscing Elit,sed do Eiusmod Tempor incididunt</p>
    </div>
    <div style={{width:200}}>
    <h4>Contact Us</h4>
    <p>Address:Loram ipusm</p>
    <p>Call:+01 1234567890</p>
    <p>Email:mail@domain.com</p>
    </div>

    </div>
    </>);
}
export default Footer;