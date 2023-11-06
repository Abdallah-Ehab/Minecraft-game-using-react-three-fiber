import {create} from 'zustand'
import { nanoid } from 'nanoid'
import {useTexture} from "./usetexture"


export const usestore = create((set)=>({
    cubes:[],
    texture:"dirt",
    addcubes:(x,y,z)=>{
        set((prev)=>({
            cubes:[
                ...prev.cubes,
                {
                    key:nanoid(),
                    position:[x,y,z],
                    texture:prev.texture
                }
            ]
        }))
    },
    removecubes:(x,y,z)=>{
        set((prev)=>({
            cubes:prev.cubes.filter(cube=>{
                const[X,Y,Z] = cube.position
                return x!==X || y!==Y||z!==Z
            })
        }))
    },
    settexture:(texture)=>{
        set(()=>({
            texture
        }))
    }
})
)
