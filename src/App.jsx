import ModelView from './components/ModelView'

import FullScreenContainer from './components/FullScreenContainer'
import CyberwareHandler from './components/CyberwareHandler'

import ListLayout from './components/ListLayout'
import GridLayout from './components/GridLayout'
import TempBox from './components/TempBox'

import { categories } from './data/categories.js'

import './App.css'

// TODO: Put in stat bar folder
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

function OptionsHandler() {
  return (
    <>
      <div className={'options-container'}>
        <div className={'category-selector'}></div>
        <ListLayout className={'equipped-container'}>
          <TempBox />
          <TempBox />
          <TempBox />
        </ListLayout>
        <GridLayout
          columns={4}
          rowGap={'1.5vh'}
          columnGap={'1.5vh'}
          className={'items-container'}
        >
          <TempBox />
          <TempBox />
          <TempBox />
          <TempBox />
          <TempBox />
          <TempBox />
          <TempBox />
          <TempBox />
        </GridLayout>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <ModelView />
      <FullScreenContainer>
        {/*<OptionsHandler />*/}

        <CyberwareHandler categories={categories} />
        <CyberwareBar now={50} label={50} />
        <ArmourBar now={50} label={50} />
      </FullScreenContainer>
    </>
  )
}

export default App
