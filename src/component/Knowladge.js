import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
import img from "../image/galaxy.png"
import Lottie from 'react-lottie';
import * as animationData from '../Anim/Comp.json'
export default function Knowladge() {

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
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
        <div style={{width:"100%",height:"10px",background:"#fff",borderRadius:50}}>
            <div style={{width:"98%",height:"10px",background:"#00dbde",borderRadius:50}}></div>

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
        <div style={{width:"100%",height:"10px",background:"#fff",borderRadius:50}}>
            <div style={{width:"95%",height:"10px",background:"#00dbde",borderRadius:50}}></div>

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
        <div style={{width:"100%",height:"10px",background:"#fff",borderRadius:50}}>
            <div style={{width:"99%",height:"10px",background:"#00dbde",borderRadius:50}}></div>

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


        <div style={{width:"100%",height:"10px",background:"#fff",borderRadius:50}}>
            <div style={{width:"88%",height:"10px",background:"#00dbde",borderRadius:50}}></div>

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
        <div style={{width:"100%",height:"10px",background:"#fff",borderRadius:50}}>
            <div style={{width:"88%",height:"10px",background:"#00dbde",borderRadius:50}}></div>

        </div>
       
        </div>


        <div style={{marginTop:20}}>
            <Row>
                <Col ><h6 style={{color:"#fff"}}>Graphql</h6></Col>

                <Col>
                <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
                <h6 style={{color:"#00dbde"}}>80%</h6>
                </div>
                </Col>
            </Row>
        <div style={{width:"100%",height:"10px",background:"#fff",borderRadius:50}}>
            <div style={{width:"88%",height:"10px",background:"#00dbde",borderRadius:50}}></div>

        </div>
        

        
        </div>
        <div style={{marginTop:20}}>
            <Row>
                <Col ><h6 style={{color:"#fff"}}>AWS</h6></Col>

                <Col>
                <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
                <h6 style={{color:"#00dbde"}}>70%</h6>
                </div>
                </Col>
            </Row>
        <div style={{width:"100%",height:"10px",background:"#fff",borderRadius:50}}>
            <div style={{width:"70%",height:"10px",background:"#00dbde",borderRadius:50}}></div>

        </div>
        

        
        </div>
        
        
        </Col>

        <Col md={6}>
        <div className='mx-auto d-block' id="lottie">
        <Lottie
    options={defaultOptions}
    height={"100%"}
    width={"100%"}
    style={{
      top: "30%",
      right: "10%",
      zIndex: -1,
    
    }}
  />
             </div>
        </Col>
    </Row>
  </Container>


  </div>
  )
}
