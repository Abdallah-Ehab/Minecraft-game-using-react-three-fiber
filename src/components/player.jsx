import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import {useKeyboard} from './useKeyboard'

const speed = 5;
const jump_force = 4;

export const Player=()=>{
    const { moveBackward, moveForward, moveRight, moveLeft, jump } = useKeyboard()
    const {camera} = useThree()
    const [ref,api] = useSphere(()=>({
      mass:1,  
      type:"Dynamic",
      position:[0,0.5,0]
    }))
   
   
    const vel = useRef([0, 0, 0])
	useEffect(() => {
		api.velocity.subscribe((v) => vel.current = v)
	}, [api.velocity])
   
   
   
    const pos = useRef([0,0,0])

    useEffect(()=>{
        api.position.subscribe((p)=>pos.current=p)
    },[api.position])

    useFrame(()=>{
        camera.position.copy(new Vector3(pos.current[0],pos.current[1],pos.current[2]))

        const direction = new Vector3()

        const forwardvector = new Vector3(0,0,(moveForward?0:1) - (moveBackward?0:1))

        const sidevector = new Vector3((moveRight?0:1)-(moveLeft?0:1),0,0)

        direction.subVectors(forwardvector,sidevector).normalize().multiplyScalar(speed).applyEuler(camera.rotation)

        api.velocity.set(direction.x,vel.current[1],direction.z)

        if(jump && Math.abs(vel.current[1]) < 0.05){
            api.velocity.set(vel.current[0],jump_force,vel.current[2])
        }else if(Math.abs(vel.current[1]) > 5){
            api.velocity.set(vel.current[0],-5,vel.current[2])
        }
    })

    
    return(
        <mesh ref={ref}>
        </mesh>
    )
}
