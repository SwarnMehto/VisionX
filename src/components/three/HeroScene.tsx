import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function CoreObject() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return

    meshRef.current.rotation.x = state.clock.elapsedTime * 0.12
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.18
  })

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.35}
      floatIntensity={0.8}
    >
      <mesh ref={meshRef} scale={2.35}>
        <icosahedronGeometry args={[1, 8]} />

        <MeshDistortMaterial
          color="#ffffff"
          roughness={0.16}
          metalness={0.75}
          distort={0.32}
          speed={1.8}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.4} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={2}
      />

      <CoreObject />

      <Sparkles
        count={70}
        scale={10}
        size={1.2}
        speed={0.25}
        opacity={0.35}
      />
    </>
  )
}

function HeroScene() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default HeroScene