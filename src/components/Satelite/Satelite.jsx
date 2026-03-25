import './Satelite.css'
import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import gsap from 'gsap'
import model from './satelite.glb'

function SateliteModel() {
  const { scene } = useGLTF(model)
  return <primitive object={scene} scale={1} />
}

function Satelite({ position }) {
  const ref = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      y: -20,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })
  }, [])

  return (
    <figure ref={ref} className="satellite-figure" style={{ position: 'absolute', ...position }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <directionalLight position={[-5, -5, -5]} intensity={1} />
        <pointLight position={[0, 10, 0]} intensity={2} />
        <SateliteModel />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </figure>
  )
}

export default Satelite