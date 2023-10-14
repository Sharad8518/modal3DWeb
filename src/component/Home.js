import React,{useRef} from 'react'
import About from './About'
import Work from './Work'
import NavbarBootsrap from './NavbarBootsrap'
import TopHeader from './TopHeader'
import Knowladge from './Knowladge'
import ParticleBackground2 from './ParticleBackground2'

export default function Home() {

  
  return (
    <>
    <NavbarBootsrap/>
   <TopHeader/>
   <About/>
    <Knowladge style={{marginTop:20}} />
    <Work style={{marginTop:20}}/>
    <br></br> <br></br>
   <ParticleBackground2/>
    
    </>
  )
}
