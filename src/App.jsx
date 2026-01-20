import ModelView from './components/ModelView'
import FullScreenContainer from './components/FullScreenContainer'
import CyberwareHandler from './components/CyberwareHandler'
import OptionsHandler from './components/OptionsHandler'
import CyberwareBar from './components/StatBars/CyberwareBar'
import ArmourBar from './components/StatBars/ArmourBar'

import { usePage, PageProvider } from './contexts/PageContext'

import { categories } from './data/categories'

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

function App() {
  return (
    <>
      <ModelView />
      <FullScreenContainer>
        <PageProvider>
          <Pages />
        </PageProvider>

        <CyberwareBar now={50} label={50} />
        <ArmourBar now={50} label={50} />
      </FullScreenContainer>
    </>
  )
}

export default App
