import ModelView from './components/ModelView'

import AppContainer from './components/AppContainer'
import CyberwareHandler from './components/CyberwareHandler/index.jsx'

import { categories } from './data/categories.js'

function App() {
  return (
    <>
      <ModelView />
      <AppContainer>
        <CyberwareHandler categories={categories} />
      </AppContainer>
    </>
  )
}

export default App
