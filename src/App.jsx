import ModelView from './components/ModelView'
import FullScreenContainer from './components/FullScreenContainer'
import CyberwareHandler from './components/CyberwareHandler'
import OptionsHandler from './components/OptionsHandler'
import CyberwareBar from './components/StatBars/CyberwareBar'
import ArmourBar from './components/StatBars/ArmourBar'

import { usePage, PageProvider } from './contexts/PageContext'
import { DataProvider } from './contexts/DataContext'
import { categories } from './data/categories'
import { useTotalCapacity } from './hooks/useTotalCapacity'
import { useTotalArmor } from './hooks/useTotalArmor.js'

import './App.css'

function Pages() {
  const { page } = usePage()
  return (
    <>
      {page === 'MainMenu' ? (
        <CyberwareHandler categories={categories} />
      ) : (
        <OptionsHandler />
      )}
    </>
  )
}

function Component() {
  const capacity = useTotalCapacity()
  const armor = useTotalArmor()
  return (
    <>
      <PageProvider>
        <Pages />
      </PageProvider>

      <CyberwareBar now={(capacity / 500) * 100} label={capacity} />
      <ArmourBar now={(armor / 1500) * 100} label={armor} />
    </>
  )
}

function App() {
  return (
    <>
      <ModelView />
      <FullScreenContainer>
        <DataProvider>
          <Component />
        </DataProvider>
      </FullScreenContainer>
    </>
  )
}

export default App
