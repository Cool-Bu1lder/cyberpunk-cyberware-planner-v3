import ModelView from './components/ModelView'

import FullScreenContainer from './components/FullScreenContainer'
import CyberwareHandler from './components/CyberwareHandler'

import { categories } from './data/categories.js'

import './App.css'

function CyberwareBar({ now, label }) {
  return (
    <div className="bar-container left vertically-centered">
      <div className="cyberware" style={{ height: `${now}%` }}></div>
      <div>{label}</div>
    </div>
  )
}

function ArmourBar({ now, label }) {
  return (
    <div className="bar-container right vertically-centered">
      <div className="armour" style={{ height: `${now}%` }}></div>
      <div>{label}</div>
    </div>
  )
}

function App() {
  return (
    <>
      <ModelView />
      <FullScreenContainer>
        <CyberwareHandler categories={categories} />
        <CyberwareBar now={50} label={50} />
        <ArmourBar now={50} label={50} />
      </FullScreenContainer>
    </>
  )
}

export default App
