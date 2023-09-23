import React,{useEffect, useState} from "react";
import './compare.css';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import { initializeApp } from "firebase/app";
 import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyBSOza1llrMEaEcNLeyUGHlUgIpeiEApi4",
  authDomain: "devtech-b5946.firebaseapp.com",
  databaseURL: "https://devtech-b5946-default-rtdb.firebaseio.com",
  projectId: "devtech-b5946",
  storageBucket: "devtech-b5946.appspot.com",
  messagingSenderId: "75622780740",
  appId: "1:75622780740:web:53fae44ee2563304b25111"
};


// Initialize Firebase
initializeApp(firebaseConfig)

// Create a root reference
const storage = getStorage();

export default function Compare(){
      const[bimgcheck,setbimg]=useState(false)
      const[gimgcheck,setgimg]=useState(false)
      const [imgd,setImg]=useState("defualtp.jpg");
      const [gimgd,setGimg]=useState("girl.png");
      const [boycheckimg,setBoycheckImg]=useState("question.jpg ");
      const [girlcheckimg,setGirlcheckImg]=useState("question.jpg ");
    
      
    
      const imageProvider=(e)=>{
        
        const  iname=e.target.files[0];
      
        const mountainsRef = ref(storage,`postimg/${iname.name}` );
    
    // Create a reference to 'images/mountains.jpg'
    const mountainImagesRef = ref(storage, `postimg/${iname}`);
     uploadBytes(mountainsRef,iname).then(()=>{
      getDownloadURL(ref(storage, `postimg/${iname.name}`)).then((url)=>{
       setImg(url);
       setbimg(true)
      })
      
    })
    alert("WAIT A Minute");
      }

      const girlimageProvider=(e)=>{
        const  giname=e.target.files[0];
       
        const mountainsRef = ref(storage,`postimg/${giname.name}` );
    
    // Create a reference to 'images/mountains.jpg'
    const mountainImagesRef = ref(storage, `postimg/${giname}`);
     uploadBytes(mountainsRef,giname).then(()=>{
      getDownloadURL(ref(storage, `postimg/${giname.name}`)).then((url)=>{
       setGimg(url);
       
     setgimg(true)
       
      })
      
     })  
     alert("WAIT A Minute");
      }

      const imageUploader=()=>{
        if(bimgcheck){
          axios.get("https://random.dog/woof.json")
          .then((d)=>{
            setBoycheckImg(d.data.url)
            console.log(d.data.url)
          })
          .catch((e)=>{
            alert(e)
          })
        }else{
         alert("upload image!")
        }
      }

      const getCatimage=()=>{
   if(gimgcheck){
    axios.get("https://api.thecatapi.com/v1/images/0XYvRd7oD")
    .then((d)=>{
   console.log(d.data.url)
   setGirlcheckImg(d.data.url)
    })
   }else{
    alert("upload image")
   }
      }
    return(
        <>
          <div className="text-center h2">Check Which animal your friend was in previous life</div>
          <div className="text-center" style={{width:"70%",margin:"auto",display:"flex",justifyContent:"space-evenly"}}>
          
          <div className="card" id="box"style={{ width: "18rem" ,height:"auto" }} >
           <img src={imgd} alt=""/>
           <label htmlFor="imgget">
            Upload image
           </label>
           <input type="file" id="imgget" style={{display:"none"}}   name="" onChange={imageProvider} />
          </div>
         
            
          
          <div className="card" id="box"style={{ width: "18rem" ,height:"auto" }}>
           <img src={boycheckimg} style={{height:"auto"}} alt=""/>
                </div>

          </div>
          <div className="btn btn-primary"  style={{margin:"auto",width:"20%"}} onClick={imageUploader}>Check</div>
          <br>
          </br>
         <br/>
         <br/>
         
          <div className="text-center h2">Check Which animal your Girlfriend was in previous life</div>
          <div className="text-center" style={{width:"70%",margin:"auto",display:"flex",justifyContent:"space-evenly"}}>
          
          <div className="card" id="box"style={{ width: "18rem" ,height:"auto" }} >
           <img src={gimgd} alt=""/>
           <label htmlFor="gimg">
            Upload image
           </label>
           <input type="file" name="" id="gimg" style={{display:"none"}}onChange={girlimageProvider} />
          </div>
          <div className="card" id="box"style={{ width: "18rem" ,height:"auto" }}>
           <img src={girlcheckimg} alt=""/>
                </div>
                </div>
                <div className="btn btn-primary"  style={{margin:"auto",width:"20%"}} onClick={getCatimage}>Check</div>
       

                <>
  
</>

        </>
    );
}