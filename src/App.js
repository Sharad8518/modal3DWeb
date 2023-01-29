
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

function App() {
 


  return (
  <>
 <NavbarBootsrap/>
   <TopHeader/>
   <About/>
    <Knowladge/>
    <Work/>
  </>
  );
}

export default App;
