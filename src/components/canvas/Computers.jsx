/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import {Suspense, useState, useEffect, React, useRef}from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'

import Loader from '../Loader' 

const Computers = ( isMobile ) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight  intensity={1.35} groundColor="black" color={'#c010c0'} />
      <pointLight intensity={3} position={[0,-2,-0.5]} />
      <spotLight 
        position={[-1, 0, 0]}
        angle={20}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
        
        />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] :[0,-3.25,-1.5]}
        rotation={[-0.01,-0.2,-0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)
    const handleMediaQuery = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQuery)

    return () => { 
      mediaQuery.removeEventListener('change', handleMediaQuery)
    }
  }, [])


  return (
    <Canvas 
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true}}
      >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle ={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
  </Canvas>
  )
}

export default ComputersCanvas