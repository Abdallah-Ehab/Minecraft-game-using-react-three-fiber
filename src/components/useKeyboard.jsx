import { useCallback, useEffect, useState } from "react"

const actionbykeydown =(keypressed)=>{
    const actionbykeys = 
    {
        KeyW: 'moveForward',
		KeyS: 'moveBackward',
		KeyA: 'moveLeft',
		KeyD: 'moveRight',
		Space: 'jump',
		Digit1: 'dirt',
		Digit2: 'grass',
		Digit3: 'glass',
		Digit4: 'wood',
		Digit5: 'log',
    }
    return actionbykeys[keypressed]
    }
export const useKeyboard = ()=>{
    const [actions,setactions] = useState({
        moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
		jump: false,
		dirt: false,
		grass: false,
		glass: false,
		wood: false,
		log: false,
    })   

    

    const handleKeydown = useCallback((e)=>{
        const action = actionbykeydown(e.code)
        if(action){
            setactions((prev)=>{
                return(
                    {
                        ...prev,
                        [action]:true
                    }
                )
            })
        }
    },[])

    const handlekeyup = useCallback((e)=>{
        const action = actionbykeydown(e.code)
        if(action){
            setactions((prev)=>{
                return(
                    {
                        ...prev,
                        [action]:false
                    }
                )
            })
        }
    },[])

    useEffect(()=>{
        document.addEventListener('keydown',handleKeydown)
        document.addEventListener('keyup',handlekeyup)
        return () => {
			document.removeEventListener('keydown', handleKeydown)
			document.removeEventListener('keyup', handlekeyup)
		}
    },[handleKeydown,handlekeyup])

    return actions
}