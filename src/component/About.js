import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
import img from "../image/rocket.png"
import cv from "../image/pavanfinal.pdf"

export default function About() {
  return (
    <div style={{background:"#000"}}>
    <h5 style={{textAlign:"center",fontSize:40,fontWeight:"bold",color:"#00dbde"}}>About Me</h5>
  

   <Container>
    <Row>
      <Col md={6}>
      <Image src={img} style={{width:"500px",height:"500px"}} className="img-fluid" alt="Responsive image" />
      </Col>
      <Col md={6}>
        <div style={{display:"flex",marginTop:60}}>
        <h6 style={{color:"#fff",}}>I am Pavan Ahirwar and </h6>
        <h6 style={{marginLeft:10,color:"#00dbde"}}>Web </h6>
        <h6 style={{marginLeft:10,color:"#00dbde"}}>App </h6>
        <h6 style={{marginLeft:10,color:"#00dbde"}}>Software Developer</h6>
        </div>
        <p style={{color:"#fff"}}>To make use  of my interpersonal skill to achieve goals of a company that focuses on customer satisfaction and customer experience</p>
      
      <h5 style={{color:"#95afc0"}}>Personal Information</h5>
      <div style={{display:"flex",marginTop:20}}>
        <h6 style={{color:"#fff"}}>Birthday Date :</h6>
        <h6 style={{color:"#00dbde",marginLeft:20}}>11/11/1997</h6>
      </div>
      <div style={{display:"flex",marginTop:20}}>
        <h6 style={{color:"#fff"}}>Degree :</h6>
        <h6 style={{color:"#00dbde",marginLeft:20}}>CS</h6>
      </div>
      <div style={{display:"flex",marginTop:20}}>
        <h6 style={{color:"#fff"}}>City :</h6>
        <h6 style={{color:"#00dbde",marginLeft:20}}>Sagar (M.P)</h6>
      </div>
      <div style={{display:"flex",marginTop:20}}>
        <h6 style={{color:"#fff"}}>Phone :</h6>
        <h6 style={{color:"#00dbde",marginLeft:20}}>+91 8269656605  , 6264434541</h6>
      </div>
      <div style={{display:"flex",marginTop:20}}>
        <h6 style={{color:"#fff"}}>Email :</h6>
        <h6 style={{color:"#00dbde",marginLeft:20}}>sharadkum9@gmail.com</h6>
      </div>

      <div  style={{marginTop:20}}>
        <a href={cv} style={{background:"#00dbde",padding:10,color:"#000",borderRadius:"50px"}} download>Download CV</a>
      </div>
      </Col>
    </Row>


   </Container>
    
    </div>
  )
}
