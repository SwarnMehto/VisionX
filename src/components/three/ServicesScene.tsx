import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function ServicesCore() {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const { pointer } = useThree()

  useFrame((state) => {
    if (!groupRef.current || !meshRef.current) return

    const targetX = pointer.y * 0.25
    const targetY = pointer.x * 0.35

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.035,
    )

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY + state.clock.elapsedTime * 0.08,
      0.035,
    )

    meshRef.current.rotation.z = state.clock.elapsedTime * 0.12
  })

  return (
    <group ref={groupRef}>

      {/* Main form */}

      <Float
        speed={1.2}
        rotationIntensity={0.25}
        floatIntensity={0.6}
      >
        <mesh ref={meshRef} scale={2.15}>

          <torusKnotGeometry
            args={[1, 0.28, 180, 32, 2, 3]}
          />

          <meshPhysicalMaterial
            color="#d9d9d9"
            metalness={0.85}
            roughness={0.18}
            clearcoat={1}
            clearcoatRoughness={0.12}
            transmission={0.05}
          />

        </mesh>
      </Float>

      {/* Inner ring */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.012, 16, 160]} />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Second ring */}

      <mesh rotation={[0.7, 0.3, 0]}>
        <torusGeometry args={[3.7, 0.008, 16, 160]} />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
        />
      </mesh>

    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={4}
      />

      <pointLight
        position={[-4, -2, 4]}
        intensity={3}
      />

      <pointLight
        position={[4, 0, -3]}
        intensity={2}
      />

      <ServicesCore />

      <Sparkles
        count={90}
        scale={11}
        size={1}
        speed={0.2}
        opacity={0.3}
      />

      <Environment preset="studio" />
    </>
  )
}

function ServicesScene() {
  return (
    <div
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 9],
          fov: 42,
        }}
        dpr={[1, 1.25]}
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

export default ServicesScene