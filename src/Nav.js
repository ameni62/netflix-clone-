import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
const [show, handlShow] = useState(false);

const transitionNavBar = () => {
    if(window.scrollY>100){
        handlShow(true);
    }else{
        handlShow(false);
    }
 }

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll",transitionNavBar)
}, [])


  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img 
                className='nav__logo'
                src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png" 
                alt=""
            />

            <img 
                className='nav__avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                alt=''
            />
        </div>  
    </div>
  );
}

export default Nav