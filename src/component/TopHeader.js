import React,{Suspense, useEffect} from "react";

import { Canvas } from "@react-three/fiber";
import { House } from "./House";
import { OrbitControls } from "@react-three/drei";
import { Container,Row,Col } from "react-bootstrap";
import "../componetCss/topHeader.css"
import EarthMove from "./EarthMove";

 
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
      <h1 className="text">Hi Pavan Ahirwar <br></br>I Am Full Stack Developer</h1>
      <h6 style={{marginTop:20,color:"#fff"}}>I am Expert in Develop Responsive & Interactive Website & App . </h6>
      <h6 style={{marginTop:5,color:"#fff"}}> I'm Expert CSS3 ,HTML5, Bootstrap, and Reactjs , React Native ,Electron ,node.js vary good Knowladge of JavaScript, python , c-sharp
        and  I have one year experience in Web and App Development.</h6>
       
      
      
      </div>
      </div>
      
      </Col>
      <Col md={6}>
      <div style={{width:"100%",height:"80vh",marginTop:"10px",}} className="boxTopHeader">
      <Canvas>
      <OrbitControls   enableZoom={false}  />
      <directionalLight intensity={0.5}/>
      <ambientLight intensity={0.2}/>
      <Suspense  fallback={null}>
      <EarthMove/>
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
