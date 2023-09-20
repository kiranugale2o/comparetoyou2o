import React from "react";
import './navbar.css';
export default function Navbar(){
    return(
        <>
       <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" id="logo"  href="#"  style={{display:"flex"}}>
      <img
        src="comdp.png"
        alt="Logo"
        id="img"
        className="d-inline-block align-text-top" style={{borderRadius:"50%"}}
      />
  <div className="h2"> CompareYourFriends</div>
    </a>
    
  </div>
</nav>

        </>
    );
}