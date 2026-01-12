import ModelView from './components/ModelView'
import CategoriesContainer from './components/CategoriesContainer'
import CategoryRow from './components/CategoryRow'

import { categories } from './data/categories.js'

import { arrayToChunks } from './utils/array.js'

function Box() {
  return (
    <div
      style={{
        height: '12vh',
        width: '12vh',
        background: 'Orange',
      }}
    />
  )
}

function CategoryContainer({ category, side }) {
  const isRight = side === 'right'

  return (
    <div
      style={{
        width: '100%',
        //background: 'Purple',
      }}
    >
      <div
        style={{
          fontSize: '2.5vh',
          textAlign: isRight ? 'left' : 'right', // TODO: May be possible to convert to css logic line
        }}
      >
        {category.label}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: isRight ? 'flex-start' : 'flex-end',
          gap: '1.5vh',
        }}
      >
        {Array.from({ length: category.slots }).map((_, index) => (
          <Box key={index} />
        ))}
      </div>
    </div>
  )
}

function App() {
  const categoryGaps = [25, 40, 55, 25, 25]

  const categoryPairs = arrayToChunks(categories, 2)

  return (
    <>
      <ModelView />

      <CategoriesContainer>
        {categoryPairs.map((pair, rowIndex) => (
          <CategoryRow key={rowIndex} gap={`${categoryGaps[rowIndex]}vh`}>
            {pair.map((category, categoryIndex) => (
              <CategoryContainer
                key={category.id}
                category={category}
                side={categoryIndex === 0 ? 'left' : 'right'}
              />
            ))}
          </CategoryRow>
        ))}
      </CategoriesContainer>
    </>
  )
}

export default App
