import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "../componetCss/Work.css"
import { FaGlobe,FaAndroid,FaDesktop } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Work() {

 const navigate= useNavigate()
  return (
    <div style={{background:"#000"}}>
      <h6 style={{textAlign:"center",fontSize:40,fontWeight:"bold",color:"#00dbde",marginTop:50}}>Work Experience</h6>
     
    <Container style={{marginTop:20}}>
    <Row>
    <Col md={4}>
   <div className='box'>

     <div className='content'>
     <FaGlobe  className="icon"/>
    <h5>React Js </h5>
  <p>I have two year experience in reactJs and I have develop differnt kind of website like e-commerce, hotel management ,hospital mangement,matrimonial</p>
  </div>
   </div>


    </Col>
    <Col md={4}>

    <div className='box'>

<div className='content'>
<FaAndroid  className="icon"/>
<h5>React Native </h5>
<p>I have two year experience in react-native I have develop differnt kind of like delivery boy(with live tracking google map),hospital management,gym mangement,e-commerce</p>
</div>
</div>
    </Col>
    <Col md={4}>

    <div className='box'>

<div className='content'>
<FaDesktop  className="icon"/>
<h5>Electron</h5>
<p>I have six month experience in Electron and I have develop one project as name like warehouse management</p>
</div>
</div>
    </Col>
    </Row>
    <h6 style={{textAlign:"center",fontSize:20,fontWeight:"bold",color:"#00dbde",marginBottom:20}}>these are used for frontend now than use for backend graphql ,mongodb ,AWS and node,js</h6>

    <h6 style={{color:"#fff" ,textAlign:"center"}}>I Am Create First Basic 2D Game in Unity And If You Are Play Game Click Button Now 👇  </h6>
    <button className='mx-auto d-block' style={{padding:10,width:150,borderRadius:50,background:"#fff"}} onClick={()=>navigate("/Game")}>Play Game</button>
    </Container>
    </div>
  )
}
