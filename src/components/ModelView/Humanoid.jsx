import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'

import characterModel from '../../assets/Y Bot.fbx?url'

export default function Humanoid(props) {
  const fbx = useLoader(FBXLoader, characterModel)
  return <primitive {...props} object={fbx} />
}
