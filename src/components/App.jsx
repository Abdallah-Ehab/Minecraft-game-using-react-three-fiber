import React from 'react'
import "./index.css"
import { Canvas } from '@react-three/fiber'
import {Sky,OrbitControls} from '@react-three/drei'
import { Ground } from './ground'
import { Physics } from '@react-three/cannon'
import {Player} from "./player"
import {FPV} from './fpv'
import {Cubes} from "./cubes"
import { Textureselection } from './textureselection'



function App() {
  return (<>
<Canvas style={{height:'100vh',width:'100vw'}}>
<Sky/>
<ambientLight intensity={1}/>
<FPV/>
<Physics>
<Ground/>
<Cubes/>
<Player/>
</Physics>
</Canvas>
<Textureselection/>
<div className='crosshair'>+</div>
  
  </>

    )
}

export default App
