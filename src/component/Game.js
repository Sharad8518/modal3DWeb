import React,{useRef} from 'react'
import { Card, Container,Row,Col,Image } from 'react-bootstrap';
import { Unity, useUnityContext } from "react-unity-webgl";
export default function Game() {
  const windowWidth = useRef(window.innerWidth);
  console.log('width: ', windowWidth.current);

        const { unityProvider } = useUnityContext({
          loaderUrl: "GameWeb/build/GameWeb.loader.js",
          dataUrl: "GameWeb/build/GameWeb.data",
          frameworkUrl: "GameWeb/build/GameWeb.framework.js",
          codeUrl: "GameWeb/build/GameWeb.wasm",
        });
    
  return (
    <div>
      {
          windowWidth.current <=800 ?
          <>
          <Container>
            <Row>
              <Col md={4}></Col>
              <Col md={4}>
              <Card className='mx-auto d-block' style={{marginTop:100}}>
            <h5 style={{textAlign:"center",marginTop:20}}>This Game is Not Available for mobile  screen</h5>
            <Image src="https://img.freepik.com/premium-vector/serious-portable-video-game-character-mascot-with-angry-expression-isolated-cartoon_574864-485.jpg?w=2000" style={{width:"50%",height:"50%"}} className='mx-auto d-block'/>
          </Card>

              </Col>
              <Col md={4}></Col>
            </Row>
         
          </Container>
          </>
          :
          <>
           <Unity unityProvider={unityProvider}  style={{
   width: '100vw',
    height: '46.00vw',
      border:"2px solid black",
      background:"green"
    

     }} />

          
          </>



      }


    </div>
  )
}
