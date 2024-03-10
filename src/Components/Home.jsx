import React from "react"

const Home=()=>{
    return (<>
    <div>
    <div style={{backgroundImage: 'url("./Photos/banner-bg.jpeg")',display:"flex",height:450,flexDirection:"column",}}>
            <h1 style={{marginLeft:100 ,marginTop:200}}>Outstanding</h1>
            <h2 style={{color:"white",marginLeft:100}}>Coffee Shop</h2>
            <p style={{color:"whitesmoke",width:500,marginLeft:100}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore mollitia aliquam repellendus? Incidunt, repellendus maiores eveniet, optio obcaecati officia soluta ex exercitationem ea doloremque aspernatur rerum, est architecto fuga?</p>
        </div>
        <div style={{display:"flex" ,height:315}}>
            <div style={{marginLeft:50,marginTop:100}}>
                <h2 style={{color:"orangered"}}>About Us</h2>
                <p style={{color:"grey"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iusto saepe ipsam veritatis ex adipisci qui ad porro? Porro molestias culpa perferendis officiis reiciendis cum asperiores ex, aliquam unde animi!</p>
                <button style={{color:"white",backgroundColor:"black"}}>Read More</button>
            </div>
            <div>
                <img src="./Photos/about.jpeg" style={{width:500,height:315}}/>
            </div>
          </div> 
          <div>
            <h1 style={{color:"orangered",textAlign:"center"}}>Our Gallery</h1>
            <p style={{color:"grey"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse corporis doloremque ipsum debitis, exercitationem recusandae culpa quidem fuga sequi minima ratione perferendis alias veritatis quas consequuntur totam iusto praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque maiores dolor aperiam amet quod, non assumenda ducimus ut blanditiis dolores numquam ea et quisquam consequatur, maxime odit debitis quia!. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt magni nulla porro velit necessitatibus esse enim accusamus voluptates aliquid, fugit nisi unde recusandae impedit laboriosam, at perspiciatis dolore, numquam sint?</p>
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
        <div>
            <div>
            <h1 style={{color:"orangered"}}>Testimonial</h1>
            <p style={{color:"grey"}}>Eeven slightly believable.If you are going to use a passage of Lorem Ipsum you need to</p>
            </div>
            <div>
                <fieldset>
                    <legend><h3 style={{color:"orangered"}}>MONILA</h3></legend>
                    <p style={{color:"grey"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odio minima voluptate ea ipsam, quod id hic at blanditiis suscipit inventore provident accusantium praesentium alias consequatur molestiae sed eaque harum, totam culpa sint iusto. Quas neque, porro ea aliquam quia maiores unde numquam dolorem ipsam fugit praesentium expedita quam eius molestias. Ullam hic repudiandae, esse minima perspiciatis itaque incidunt omnis, unde sapiente dolorem suscipit perferendis voluptatum quasi alias voluptates numquam cumque ad. Deleniti repellat molestias quae dolore, consequatur obcaecati cupiditate, eaque iusto animi, at laudantium unde. Autem nemo expedita accusamus vero amet voluptate quidem quibusdam cupiditate, sint asperiores excepturi provident.</p>
                </fieldset>

            </div>
        </div>
        </div>
    </>)
}
export default Home;