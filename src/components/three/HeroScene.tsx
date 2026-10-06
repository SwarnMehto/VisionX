import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Float,
  MeshDistortMaterial,
  Sparkles,
  Torus,
} from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

/* =========================================================
   MAIN DIGITAL CORE
========================================================= */

function DigitalCore() {
  const coreRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const { pointer } = useThree()

  useFrame((state) => {
    if (!coreRef.current || !meshRef.current) return

    const time = state.clock.elapsedTime

    /* Core rotation */
    meshRef.current.rotation.x = time * 0.10
    meshRef.current.rotation.y = time * 0.16
    meshRef.current.rotation.z = time * 0.04

    /* Mouse parallax */
    coreRef.current.rotation.x = THREE.MathUtils.lerp(
      coreRef.current.rotation.x,
      pointer.y * 0.18,
      0.025,
    )

    coreRef.current.rotation.y = THREE.MathUtils.lerp(
      coreRef.current.rotation.y,
      pointer.x * 0.30,
      0.025,
    )
  })

  return (
    <group ref={coreRef}>

      <Float
        speed={1.1}
        rotationIntensity={0.18}
        floatIntensity={0.55}
      >

        {/* =========================================
            MAIN CORE
        ========================================= */}

        <mesh ref={meshRef} scale={2.25}>
          <icosahedronGeometry args={[1, 7]} />

          <MeshDistortMaterial
            color="#d9d9df"
            roughness={0.08}
            metalness={0.95}
            distort={0.22}
            speed={1.35}
          />
        </mesh>

        {/* =========================================
            INNER DIGITAL STRUCTURE
        ========================================= */}

        <mesh scale={2.36}>
          <icosahedronGeometry args={[1, 2]} />

          <meshBasicMaterial
            color="#7c3aed"
            wireframe
            transparent
            opacity={0.16}
          />
        </mesh>

        {/* =========================================
            INNER CYAN STRUCTURE
        ========================================= */}

        <mesh scale={2.48}>
          <icosahedronGeometry args={[1, 1]} />

          <meshBasicMaterial
            color="#22d3ee"
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>

        {/* =========================================
            ORBIT 01
        ========================================= */}

        <Torus
          args={[2.95, 0.014, 12, 180]}
          rotation={[Math.PI / 2.2, 0.25, 0]}
        >
          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.32}
          />
        </Torus>

        {/* =========================================
            ORBIT 02
        ========================================= */}

        <Torus
          args={[3.35, 0.01, 12, 180]}
          rotation={[0.5, Math.PI / 3, 0.25]}
        >
          <meshBasicMaterial
            color="#7c3aed"
            transparent
            opacity={0.24}
          />
        </Torus>

        {/* =========================================
            ORBIT 03
        ========================================= */}

        <Torus
          args={[3.75, 0.006, 12, 180]}
          rotation={[1.1, 0.15, 0.8]}
        >
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.10}
          />
        </Torus>

      </Float>
    </group>
  )
}


/* =========================================================
   FLOATING ENERGY NODES
========================================================= */

function EnergyNodes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return

    const time = state.clock.elapsedTime

    groupRef.current.rotation.y = time * 0.035
    groupRef.current.rotation.x = Math.sin(time * 0.18) * 0.05
  })

  const nodes = [
    {
      position: [3.7, 1.6, 0] as [number, number, number],
      color: '#22d3ee',
      scale: 0.045,
    },
    {
      position: [-3.4, 1.2, -0.5] as [number, number, number],
      color: '#7c3aed',
      scale: 0.06,
    },
    {
      position: [2.8, -2.1, 0.5] as [number, number, number],
      color: '#ffffff',
      scale: 0.04,
    },
    {
      position: [-2.8, -1.8, 0] as [number, number, number],
      color: '#22d3ee',
      scale: 0.035,
    },
  ]

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh
          key={index}
          position={node.position}
          scale={node.scale}
        >
          <sphereGeometry args={[1, 16, 16]} />

          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  )
}


/* =========================================================
   PARTICLE FIELD
========================================================= */

function ParticleField() {
  return (
    <>
      <Sparkles
        count={150}
        scale={13}
        size={1.25}
        speed={0.22}
        opacity={0.42}
        color="#ffffff"
      />

      <Sparkles
        count={70}
        scale={9}
        size={1.7}
        speed={0.14}
        opacity={0.25}
        color="#22d3ee"
      />

      <Sparkles
        count={45}
        scale={7}
        size={1.5}
        speed={0.12}
        opacity={0.20}
        color="#7c3aed"
      />
    </>
  )
}


/* =========================================================
   SCENE
========================================================= */

function Scene() {
  return (
    <>
      {/* Soft environment light */}

      <ambientLight intensity={0.7} />

      {/* Main white light */}

      <directionalLight
        position={[5, 6, 5]}
        intensity={3.5}
      />

      {/* Cyan edge light */}

      <pointLight
        position={[4, 1, 4]}
        color="#22d3ee"
        intensity={4}
        distance={12}
      />

      {/* Violet edge light */}

      <pointLight
        position={[-4, -1, 3]}
        color="#7c3aed"
        intensity={3.5}
        distance={11}
      />

      {/* Main core */}

      <DigitalCore />

      {/* Floating nodes */}

      <EnergyNodes />

      {/* Particle field */}

      <ParticleField />
    </>
  )
}


/* =========================================================
   HERO CANVAS
========================================================= */

function HeroScene() {
  return (
    <div className="absolute inset-0 h-full w-full">

      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 43,
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