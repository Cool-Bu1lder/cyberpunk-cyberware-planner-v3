import CyberwareContainer from './CyberwareContainer'
import CategoryRow from './CategoryRow'
import CategoryHandler from './CategoryHandler'

import { arrayToChunks } from '../../utils/array.js'

export default function CyberwareHandler({ categories }) {
  const categoryGaps = [25, 40, 55, 25, 25]

  const categoryPairs = arrayToChunks(categories, 2)

  return (
    <CyberwareContainer>
      {categoryPairs.map((pair, rowIndex) => (
        <CategoryRow key={rowIndex} gap={`${categoryGaps[rowIndex]}vh`}>
          {pair.map((category, categoryIndex) => (
            <CategoryHandler
              key={category.id}
              category={category}
              side={categoryIndex === 0 ? 'left' : 'right'}
            />
          ))}
        </CategoryRow>
      ))}
    </CyberwareContainer>
  )
}
