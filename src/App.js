
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
import { Routes, Route } from "react-router-dom"
import Home from "./component/Home";
import Game from "./component/Game";

function App() {
 


  return (
  <>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Game" element={ <Game/> } />
      </Routes>
 
  </>
  );
}

export default App;
