import React from 'react'
import { useGLTF, Decal, useTexture } from '@react-three/drei'
import { useCustomization } from '../Context/Customization'

export function Model(props) {
  const { nodes, materials } = useGLTF('/3D/shirt.glb')
  const { color, decal, decalPosY, decalScale } = useCustomization()
  
  // Only load texture when decal exists
  const decalTexture = decal ? useTexture(decal) : null

  return (
    <group {...props} dispose={null}>
      {/* Front body parts */}
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
            position={[0, decalPosY, -0.05]} 
            rotation={[0, Math.PI, 0]}
            scale={decalScale}
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
      
      {/* Sleeves */}
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