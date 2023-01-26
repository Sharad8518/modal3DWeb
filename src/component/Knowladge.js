import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
import img from "../image/galaxy.png"

export default function Knowladge() {
  return (
  <div style={{background:"#000"}}>
  <Container>
    <Row>
        <Col md={6}>
        <div style={{marginTop:50}}>
            <Row>
                <Col ><h6 style={{color:"#fff"}}>HTML</h6></Col>

                <Col>
                <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
                <h6 style={{color:"#00dbde"}}>95%</h6>
                </div>
                </Col>
            </Row>
        <div style={{width:"100%",height:"20px",background:"#fff",borderRadius:50}}>
            <div style={{width:"98%",height:"20px",background:"#00dbde",borderRadius:50}}></div>

        </div>
        </div>
        <div style={{marginTop:20}}>
            <Row>
                <Col ><h6 style={{color:"#fff"}}>CSS</h6></Col>

                <Col>
                <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
                <h6 style={{color:"#00dbde"}}>90%</h6>
                </div>
                </Col>
            </Row>
        <div style={{width:"100%",height:"20px",background:"#fff",borderRadius:50}}>
            <div style={{width:"95%",height:"20px",background:"#00dbde",borderRadius:50}}></div>

        </div>
        </div>
        <div style={{marginTop:20}}>
            <Row>
                <Col ><h6 style={{color:"#fff"}}>Bootstrap</h6></Col>

                <Col>
                <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
                <h6 style={{color:"#00dbde"}}>96%</h6>
                </div>
                </Col>
            </Row>
        <div style={{width:"100%",height:"20px",background:"#fff",borderRadius:50}}>
            <div style={{width:"99%",height:"20px",background:"#00dbde",borderRadius:50}}></div>

        </div>
        </div>
        
        <div style={{marginTop:20}}>
            <Row>
                <Col ><h6 style={{color:"#fff"}}>JavaScript</h6></Col>

                <Col>
                <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
                <h6 style={{color:"#00dbde"}}>80%</h6>
                </div>
                </Col>
            </Row>
        <div style={{width:"100%",height:"20px",background:"#fff",borderRadius:50}}>
            <div style={{width:"88%",height:"20px",background:"#00dbde",borderRadius:50}}></div>

        </div>
        </div>
        <div style={{marginTop:20}}>
            <Row>
                <Col ><h6 style={{color:"#fff"}}>Python</h6></Col>

                <Col>
                <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
                <h6 style={{color:"#00dbde"}}>80%</h6>
                </div>
                </Col>
            </Row>
        <div style={{width:"100%",height:"20px",background:"#fff",borderRadius:50}}>
            <div style={{width:"88%",height:"20px",background:"#00dbde",borderRadius:50}}></div>

        </div>
        </div>
        
        </Col>

        <Col md={6}>
        
        <Image src={img} style={{width:"500px",height:"500px"}} className="img-fluid" alt="Responsive image" />
        </Col>
    </Row>
  </Container>


  </div>
  )
}
