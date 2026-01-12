import ModelView from './components/ModelView'
import CategoryContainer from './components/CategoryContainer'
import CategoryRow from './components/CategoryRow'

import { categories } from './data/categories.js'

import { arrayToChunks } from './utils/array.js'

function Box() {
  return (
    <div
      style={{
        height: '12vh',
        width: '30vh',
        background: 'Orange',
      }}
    />
  )
}

function App() {
  const gaps = [25, 40, 55, 25, 25]

  const categoryPairs = arrayToChunks(categories, 2)

  return (
    <>
      <ModelView />

      <CategoryContainer>
        {categoryPairs.map((pair, rowIndex) => (
          <CategoryRow key={rowIndex} gap={`${gaps[rowIndex]}vh`}>
            {pair.map((category) => (
              <Box key={category.id} category={category} />
            ))}
          </CategoryRow>
        ))}
      </CategoryContainer>
    </>
  )
}

export default App
