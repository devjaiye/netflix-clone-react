import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {

    const [show, handleShow] = useState(false)

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true)
        } else {
            handleShow(false)
        } 
    } 

    //..the useEffect works when the component is triggered once
    useEffect(()=>{
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}> 
       <div className="nav_contents">
       <img 
            className='nav_logo'
        src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-2048x550.png" alt="" />
        <img 
            className='nav_avatar'
        src="https://www.dlf.pt/dfpng/maxpng/276-2761324_default-avatar-png.png" alt="" /> 
       
       </div>
    </div>
  )
}

export default Nav