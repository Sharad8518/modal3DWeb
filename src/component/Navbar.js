import React ,{useState}from 'react'
import{Image} from "react-bootstrap"
import "../componetCss/navbar.css"
import { FaBars,FaWindowClose } from "react-icons/fa";

const Menu =()=>{
  return(
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#home">About</a></p>
    <p><a href="#home">Feature</a></p>
    <p><a href="#home">Service</a></p>
    <p><a href="#home">Setting</a></p>
    </>
  )

 
}

export default function() {
    const[toggleMenu,setToggleMenu] =useState(false)

  

    console.log("menu",Menu)

  return (
    <div  className='gpt3_navbar'>
        <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_logo'>
            <Image src="https://www.logodesign.net/images/home-page-logo-03.png" alt="logo" style={{width:50,height:50,borderRadius:"100%"}} />
        </div>
        <div className='gpt3_navbar-links_container'>
        <Menu/>
        </div>


        </div>
        <div className='gpt3_navbar-links_sign'>
           <p>Sign In</p>
           <button type="button">Sign Up</button>
        </div>

        <div className='gpt3_navbar-menu'>
          {
            toggleMenu
            ? <FaWindowClose  color='#000' size={27} onClick={()=>setToggleMenu(false)}/>
            :<FaBars  color='#000' size={27} onClick={()=>setToggleMenu(true)}/>
          }
          {
            toggleMenu &&(
              <div className='gpt3_navbar-menu_container scale-up-center'>
               <div  className='gpt3_navbar-menu_container-links'>
               <Menu/>
               <div className='gpt3_navbar-menu_container-links-sign'>
           <p style={{color:"#22a6b3"}}>Sign In</p>
           <button type="button">Sign Up</button>
        </div>
               </div>
              </div>
            )
          }



        </div>
    </div>
  )
}
