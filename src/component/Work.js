import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "../componetCss/Work.css"
import { FaGlobe,FaAndroid,FaDesktop } from "react-icons/fa";

export default function Work() {
  return (
    <div style={{background:"#000"}}>
      <h6 style={{textAlign:"center",fontSize:40,fontWeight:"bold",color:"#00dbde"}}>Work Experience</h6>
    <Container style={{marginTop:20}}>
    <Row>
    <Col md={4}>
   <div className='box'>

     <div className='content'>
     <FaGlobe  className="icon"/>
    <h5>React Js</h5>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
  </div>
   </div>


    </Col>
    <Col md={4}>

    <div className='box'>

<div className='content'>
<FaAndroid  className="icon"/>
<h5>React Native </h5>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
</div>
</div>
    </Col>
    <Col md={4}>

    <div className='box'>

<div className='content'>
<FaDesktop  className="icon"/>
<h5>Electron</h5>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
</div>
</div>
    </Col>
    </Row>
    </Container>
    </div>
  )
}
