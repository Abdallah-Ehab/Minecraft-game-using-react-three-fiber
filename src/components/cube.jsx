import {useBox} from '@react-three/cannon'
import {useTexture} from "./usetexture"
import { usestore } from './usestore'
import { useFrame } from '@react-three/fiber'

export const Cube = ({position,texture})=>{
   
    const {textures} = useTexture()
   const [cubes,addcubes,removecubes] = usestore((state)=>[state.cubes,state.addcubes,state.removecubes])
    const [ref,api] = useBox(()=>({
        
        position
    }))

    
    const active_texture = textures[texture]
    
    return(
        <mesh onClick={(e)=>{
            e.stopPropagation()
            const clickedFace = Math.floor(e.faceIndex/2)
            const [x,y,z] = ref.current.position
            if (e.altKey) {
                e.stopPropagation()
                removecubes(x, y, z)
                return
            }
            else if (clickedFace === 0) {
                addcubes(x + 1, y, z)
                return
            }
            else if (clickedFace === 1) {
                addcubes(x - 1, y, z)
                return
            }
            else if (clickedFace === 2) {
                addcubes(x, y + 1, z)
                return
            }
            else if (clickedFace === 3) {
                addcubes(x, y - 1, z)
                return
            }
            else if (clickedFace === 4) {
                addcubes(x, y, z + 1)
                return
            }
            else if (clickedFace === 5) {
                addcubes(x, y, z - 1)
                return
            }
        }

        
            
        }ref={ref}>
            <boxGeometry attach="geometry" />
            <meshStandardMaterial attach="material" map={active_texture} />
        </mesh>
    )
}