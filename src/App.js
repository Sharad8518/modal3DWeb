
import React,{Suspense, useEffect} from "react";
import "./App.css"
import { Canvas } from "@react-three/fiber";
import { House } from "./component/House";
import { OrbitControls } from "@react-three/drei";
import { Container,Row,Col } from "react-bootstrap";


function App() {
 


  return (
  <div className="App">
    <Container>
    <Row>
      <Col md={6}>
      <h1>asdsfsdfg</h1>
      </Col>
      <Col md={6}>
      <div style={{width:"100%",height:"80vh",marginTop:"100px",}}>
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
  );
}

export default App;
