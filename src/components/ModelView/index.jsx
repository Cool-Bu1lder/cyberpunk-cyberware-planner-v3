import { Canvas } from '@react-three/fiber'

import Humanoid from './Humanoid'

import './ModelView.css'

export default function ModelView() {
  return (
    <Canvas
      className="model-view"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Humanoid position={[0, -2.7, 0]} scale={[0.03, 0.03, 0.03]} />
    </Canvas>
  )
}
