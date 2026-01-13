import CategoryContainer from './CategoryContainer'
import ListLayout from '../../ListLayout'
import CategoryLabel from './CategoryLabel'

import TempBox from '../../TempBox'

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

export default function CategoryHandler({ category, side }) {
  const isRight = side === 'right'

  return (
    <CategoryContainer>
      <CategoryLabel isRight={isRight}>{category.label}</CategoryLabel>
      <ListLayout justifyContentRight={!isRight} gap={'1.5vh'}>
        {Array.from({ length: category.slots }).map((_, index) => (
          <TempBox key={index} />
        ))}
      </ListLayout>
    </CategoryContainer>
  )
}
