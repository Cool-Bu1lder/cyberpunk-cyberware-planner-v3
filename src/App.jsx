import ModelView from './components/ModelView'
import CyberwareHandler from './components/CyberwareHandler/index.jsx'

import { categories } from './data/categories.js'

function App() {
  return (
    <>
      <ModelView />
      <CyberwareHandler categories={categories} />
    </>
  )
}

export default App
