// import {  useState , useEffect } from 'react';
import './Nav.css';

function Nav() {
//   const [show,handleShow] = useState(false);

//   useEffect(()=>{
//     window.addEventListener("scroll",() => {
//         if(window.scrollY > 100){
//              handleShow(true);
//         } else handleShow(false);
//     });
//     return () => {
//         window.removeEventListener("scroll");
//     };
// },[]);
      
  return (
    <div className='nav'>
    {/* // <div  className={`nav ${show && "nav_black"}`}> */}
        <img 
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        />

        <img 
         className="nav_avatar"
         src="https://github.com/sidmulajkar/netflix-clone-using-react/blob/main/public/images/users/1.png?raw=true"
         />
    </div>
  );
}

export default Nav;
