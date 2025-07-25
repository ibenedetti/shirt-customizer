import React from 'react'
import { useGLTF, Decal, useTexture } from '@react-three/drei'
import { useCustomization } from '../Context/Customization'

export function Model(props) {
  const { nodes, materials } = useGLTF('/3D/shirt.glb')
  const { color, decal } = useCustomization()
  
  const decalTexture = decal ? useTexture(decal) : null

  if (!decalTexture && decal) {
    console.warn("Decal texture is not loaded yet, or there was an issue loading the image:", decal);
  }

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_6.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
      
      <mesh geometry={nodes.Object_8.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
      
      <mesh geometry={nodes.Object_10.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
      
      <mesh geometry={nodes.Object_11.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
      
      <mesh geometry={nodes.Object_12.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
      
      <mesh geometry={nodes.Object_14.geometry}>
        <meshStandardMaterial color={color} />
         {decal && decalTexture && (
          <Decal
            position={[0, 1.3, -0.05]} 
            rotation={[0, Math.PI, 0]} 
            scale={0.5}
            map={decalTexture}
            transparent
          />
        )}
      </mesh>
      
      <mesh geometry={nodes.Object_15.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
      
      <mesh geometry={nodes.Object_16.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
      
      <mesh geometry={nodes.Object_18.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
      
      <mesh geometry={nodes.Object_20.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/3D/shirt.glb')