
import React,{Suspense, useEffect} from "react";
import "./App.css"
import { Canvas } from "@react-three/fiber";
import { House } from "./component/House";
import { OrbitControls } from "@react-three/drei";
import { Container,Row,Col } from "react-bootstrap";
import TopHeader from "./component/TopHeader";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Knowladge from "./component/Knowladge";
import Work from "./component/Work";
import NavbarBootsrap from "./component/NavbarBootsrap";

import ParticleBackground2 from "./component/ParticleBackground2";
import ParticleBackground from "./component/ParticleBackground";

function App() {
 


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
  );
}

export default App;
