import {usePlane} from "@react-three/cannon"
import { useRef,useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as Three from "three"
import {useTexture} from "./usetexture"
import { RepeatWrapping } from 'three'
import { usestore } from "./usestore"

export const Ground =()=>{
    const [addcubes] = usestore((state)=>[state.addcubes])
    const {textures} = useTexture()
    
    const [ref] = usePlane(()=>({
        rotation:[-Math.PI/2,0,0],position:[0,-0.5,1]
    }))


        const active_texture = textures["grass"]
        useEffect(() => {
            if (active_texture) {
              active_texture.repeat.set(100,100);
            }
          }, [active_texture]);
   
    return(
        <mesh  onClick={(e) => {
            e.stopPropagation()
            const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
            addcubes(x, y, z)
            console.log(x,y,z)
        }} ref={ref}>
            <planeGeometry attach="geometry" args={[100,100]} />
            <meshStandardMaterial attach="material" map={active_texture}/>
        </mesh>
    )
}