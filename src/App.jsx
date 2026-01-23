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
  return (
    <>
      <PageProvider>
        <Pages />
      </PageProvider>

      <CyberwareBar now={capacity} label={capacity} />
      <ArmourBar now={50} label={50} />
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
