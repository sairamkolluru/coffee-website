import React from "react";

const Gallery=()=>{
    return(<>
    <div>
    <h1 style={{color:"orangered",textAlign:"center"}}>Our Gallery</h1>
        <p>Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, 
            when an unknown printer took a galley of type and scra make a type specimen book. It has</p>
    </div>
    <div style={{display:"flex",justifyContent:"center",gap:40}}>
            <div style={{}}>
            <img src="./Photos/img-1.jpeg" style={{width:225,height:225}}/>
            </div>
            <div style={{}}>
            <img src="./Photos/img-2.jpeg" style={{width:225,height:225}}/>
            </div>
            <div style={{}}>
            <img src="./Photos/img-3.jpeg" style={{width:225,height:225}}/>
            </div>
        </div>

    </>)
}
export default Gallery;