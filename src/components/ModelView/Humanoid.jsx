import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import { useAnimations } from '@react-three/drei'

import characterModel from '../../assets/Y Bot.fbx?url'
import idleAnimation from '../../assets/y-bot-idle.fbx?url'
import { useEffect } from 'react'

export default function Humanoid(props) {
  const fbx = useLoader(FBXLoader, characterModel)
  const { animations: idleClips } = useLoader(FBXLoader, idleAnimation)

  const { actions, names } = useAnimations(idleClips, fbx)

  useEffect(() => {
    const animationName = names[0]
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0).play()
    }
  }, [actions, names])

  return <primitive {...props} object={fbx} />
}
