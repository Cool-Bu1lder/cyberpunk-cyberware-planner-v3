import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'

export default function Humanoid(props) {
  const fbx = useLoader(FBXLoader, '/Y Bot.fbx')
  return <primitive {...props} object={fbx} />
}
