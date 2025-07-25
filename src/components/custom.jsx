import { PresentationControls, Stage, MeshReflectorMaterial } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'
import { Model as Shirt } from './shirt' 
import { useCustomization } from '../Context/Customization'
import { useFrame } from '@react-three/fiber'

function Custom () {
    const { side } = useCustomization();
    const controlsRef = useRef()

    const rotations = {
        front: [0, 0, 0],
        right: [0,Math.PI / 2, 0],
        left: [0,-Math.PI / 2, 0],
        back: [0, Math.PI, 0]
    }

    useFrame (() => {
        const targetRotation = rotations[side] || rotations.front;

        controlsRef.current.rotation.x = (targetRotation[0] - controlsRef.current.rotation.x) * 0.1;
        controlsRef.current.rotation.y += (targetRotation[1] - controlsRef.current.rotation.y) * 0.1
        controlsRef.current.rotation.z += (targetRotation[2] - controlsRef.current.rotation.z) * 0.1
    })

    return (
            <PresentationControls 
                speed={1.5} 
                global 
                zoom={0.7} 
                polar={[-0.1, Math.PI / 4]}
            >
                <Stage 
                    environment={"city"} 
                    intensity={0.5} 
                    contactShadow={false}
                    adjustCamera={(2)}
                >
                    <group ref={controlsRef}>
                        <Suspense fallback={null}>
                            <Shirt />
                        </Suspense>
                    </group>
                </Stage>

                <mesh rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.5, 0]}>
                <planeGeometry args={[170, 170]} 
                    
                />
                <MeshReflectorMaterial
                    blur={[300,100]}
                    resolution={2048}  
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010" 
                    envMapIntensity={1}
                    metalness={0.5}  
                />
                </mesh>
            </PresentationControls>
    )
}

export default Custom