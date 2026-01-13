import CategoryContainer from './CategoryContainer'
import ListLayout from '../../ListLayout'
import CategoryLabel from './CategoryLabel'

import TempBox from '../../TempBox'

export default function CategoryHandler({ category, side }) {
  const isRight = side === 'right'

  return (
    <CategoryContainer>
      {/*TODO: pass class name into category label for font */}
      <CategoryLabel textAlignRight={!isRight}>{category.label}</CategoryLabel>
      <ListLayout justifyContentRight={!isRight} gap={'1.5vh'}>
        {Array.from({ length: category.slots }).map((_, index) => (
          <TempBox key={index} />
        ))}
      </ListLayout>
    </CategoryContainer>
  )
}
