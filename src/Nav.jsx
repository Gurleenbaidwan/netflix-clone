// import React from 'react'
import { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const[show,handleShow]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",() =>{
        if(window.scrollY > 100){
             handleShow(true);
        } else handleShow(false);
    });
    return () =>{
        window.removeEventListener("scroll");
    };
},[]);
      
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img 
        className="nav_logo"
        src="https://toppng.com/uploads/preview/netflix-logo-png-download-11660600814vkfgjh8swu.png"
         alt="Netflix  logo"
         />

         <img 
         className="nav_avatar"
         src="https://github.com/sidmulajkar/netflix-clone-using-react/blob/main/public/images/users/1.png?raw=true"
         alt="Netflix Logo"
         />
    </div>
  )
}

export default Nav
