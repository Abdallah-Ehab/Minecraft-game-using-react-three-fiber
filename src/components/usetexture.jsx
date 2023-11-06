import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'
import { useEffect,useState,useMemo } from 'react';
import { useLoader } from "@react-three/fiber"

export const useTexture = () => {
const [textures, setTextures] = useState({});

useMemo(() => {
  const textureNames = ['dirt','grass']; // Replace with your texture names
  const textureLoader = new TextureLoader();

  const loadedTextures = {};
  
    
    textureNames.forEach( (name) => {
      const texture =  textureLoader.load(`src/images/${name}.jpg`);
        texture.magFilter = NearestFilter
        texture.wrapS = RepeatWrapping
        texture.wrapT = RepeatWrapping
      loadedTextures[name] = texture;
    });
  

  setTextures(loadedTextures);
}, []);

return {textures,setTextures};
};
