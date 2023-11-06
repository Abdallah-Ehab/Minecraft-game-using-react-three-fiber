import { useEffect, useState } from "react"
import { useKeyboard } from "./useKeyboard"
import { usestore } from "./usestore"
import {imgarray} from "../images/images"

export const Textureselection =()=>{

    const [active_texture,settexture] = usestore((state)=>[state.texture,state.settexture])
    const [isvisible,setisvisible] = useState(false)

   const { 
    dirt ,
    grass} = useKeyboard()

   console.log(imgarray)

       useEffect(()=>{
        const textures = { 
            dirt ,
            grass}
          const pressed_texture =  Object.entries(textures).find(([k,v])=>v)
          if(pressed_texture) 
          {
            settexture(pressed_texture[0])
          }
    },[settexture,dirt,grass]) 


    useEffect(()=>{
       const visibilityTimeout =  setTimeout(() => {
          setisvisible(false)  
        }, 2000);
        setisvisible(true)
        
        return () => {
			clearTimeout(visibilityTimeout)
		}
    },[active_texture,dirt,grass,settexture])
            
       return(
           isvisible && <div className="crosshair">
            {imgarray.map((src)=>(
                <img src={src} alt="image" />
            ))}
           </div>        
       )
        
}