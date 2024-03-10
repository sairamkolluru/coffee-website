import React from "react";

const About=()=>{
    return (<>
    <div style={{display:"flex", height:315}}>
    <div style={{marginLeft:50,marginTop:50}}>
        <h2 style={{color:"orangered"}}>About Us</h2>
        <p>Full cleaning and housekeeping services for companies and households.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
            <button style={{color:"white",backgroundColor:"black"}}>Read More</button>
    </div>
    <div>
        <img src="./Photos/about.jpeg" alt="" style={{width:500, height:315}}></img>
    </div>
    </div>
    </>)
}
export default About;