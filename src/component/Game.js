import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
export default function Game() {
   

        const { unityProvider } = useUnityContext({
          loaderUrl: "GameWeb/build/GameWeb.loader.js",
          dataUrl: "GameWeb/build/GameWeb.data",
          frameworkUrl: "GameWeb/build/GameWeb.framework.js",
          codeUrl: "GameWeb/build/GameWeb.wasm",
        });
    
  return (
    <div>
 <Unity unityProvider={unityProvider}  style={{
   width: '100vw',
    height: '46.00vw',
      border:"2px solid black",
      background:"green"
    

     }} />


    </div>
  )
}
