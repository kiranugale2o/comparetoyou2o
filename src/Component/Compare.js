import React,{useState} from "react";

export default function Compare(){

      const [imgd,setImg]=useState("defualtp.jpg");
      const imageProvider=(e)=>{
        setImg(e.target.files[0].name);
        console.log(e.target.files[0])
      }
    return(
        <>
          <div className="text-center h2">Check Which animal your friend was in previous life</div>
          <div className="text-center" style={{width:"70%",margin:"auto",display:"flex",justifyContent:"space-evenly"}}>
          
          <div className="card" id="box"style={{ width: "18rem" ,height:"auto" }} >
           <img src={imgd} alt=""/>
           <input type="file" name="" onChange={imageProvider} />
          </div>
          <div className="card" id="box"style={{ width: "18rem" ,height:"auto" }}>
           <img src={imgd} alt=""/>
                </div>

          </div>
          <br>
          </br>
         <br/>
         <br/>
         
          <div className="text-center h2">Check Which animal your Girlfriend was in previous life</div>
          <div className="text-center" style={{width:"70%",margin:"auto",display:"flex",justifyContent:"space-evenly"}}>
          
          <div className="card" id="box"style={{ width: "18rem" ,height:"auto" }} >
           <img src={imgd} alt=""/>
           <input type="file" name="" onChange={imageProvider} />
          </div>
          <div className="card" id="box"style={{ width: "18rem" ,height:"auto" }}>
           <img src={imgd} alt=""/>
                </div>

          </div>
        </>
    );
}