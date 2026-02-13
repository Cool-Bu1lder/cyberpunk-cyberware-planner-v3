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

function Interface() {
  const maxCapacity = 500 // TODO: move to data
  const maxArmour = 1500

  const capacityValue = useTotalCapacity()
  const armourValue = useTotalArmor()

  const capacityPercent = (capacityValue / maxCapacity) * 100
  const armourPercent = (armourValue / maxArmour) * 100

  return (
    <>
      <PageProvider>
        <Pages />
      </PageProvider>

      <CyberwareBar
        className={'left vertically-centered'}
        now={capacityPercent}
        label={capacityValue}
      />
      <ArmourBar
        className={'right vertically-centered'}
        now={armourPercent}
        label={armourValue}
      />
    </>
  )
}

function App() {
  return (
    <>
      <DataProvider>
        <ModelView />
        <FullScreenContainer>
          <Interface />
        </FullScreenContainer>
      </DataProvider>
    </>
  )
}

export default App
