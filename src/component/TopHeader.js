import React,{Suspense, useEffect} from "react";

import { Canvas } from "@react-three/fiber";
import { House } from "./House";
import { OrbitControls } from "@react-three/drei";
import { Container,Row,Col } from "react-bootstrap";
import "../componetCss/topHeader.css"

export default function TopHeader() {

  

    let body =document.querySelector("body");
    let bubble =document.createElement("span");
 
    let size =Math.random()*10;

    bubble.style.width=80 +size +"px";
    bubble.style.height=80 +size +"px";

    body.appendChild(bubble);
    
    setTimeout(function(){
      bubble.remove();
    },3000);
  




  return (
    <div style={{background:"#000"}}> <Container>
    <Row>
      <Col md={6}>
        <div className="gpt3_header section_padding" id="home">
          <div className="gpt3_header-content">
      <h1 className="text">Hi Pavan Ahirwar I Am Full Stack Developer</h1>
      <h6 style={{marginTop:20,color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h6>
      </div>
      </div>
      </Col>
      <Col md={6}>
      <div style={{width:"100%",height:"80vh",marginTop:"10px",}} className="boxTopHeader">
      <Canvas>
      <OrbitControls/>
      <directionalLight intensity={0.5}/>
      <ambientLight intensity={0.2}/>
      <Suspense  fallback={null}>
      <House/>
      </Suspense>
    </Canvas>
  
  
</div>
      </Col>
    </Row>
    <Row>
      <Col>
      <div className="mx-auto d-block">
     
      </div>
      </Col>
      <Col>
      <div >
      <span></span>
      <span></span>
      
      </div>
      </Col>
      <Col>
      <div className="mx-auto d-block">
      
      </div>
      </Col>
      </Row>
    </Container>
  
  
   </div>
  )
}
