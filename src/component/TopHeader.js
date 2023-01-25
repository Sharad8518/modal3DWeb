import React,{Suspense, useEffect} from "react";

import { Canvas } from "@react-three/fiber";
import { House } from "./House";
import { OrbitControls } from "@react-three/drei";
import { Container,Row,Col } from "react-bootstrap";
import "../componetCss/topHeader.css"

export default function TopHeader() {

  document.addEventListener("mousemove",function(e){

    let body =document.querySelector("body");
    let bubble =document.createElement("span");
    let x= e.offsetX;
    let y =e.offsetY;
    bubble.style.left =x+"px";
    bubble.style.top =x+"px";
    let size =Math.random()*10;

    bubble.style.width=20 +size +"px";
    bubble.style.height=20 +size +"px";

    body.appendChild(bubble);
    
    setTimeout(function(){
      bubble.remove();
    },3000);
  });




  return (
    <div> <Container>
    <Row>
      <Col md={6}>
        <div className="gpt3_header section_padding" id="home">
          <div className="gpt3_header-content">
      <h1 className="text">Hi Pavan Ahirwar I Am Full Stack Developer From India</h1>
      <h6 style={{marginTop:20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h6>
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

    </Container>
   </div>
  )
}
