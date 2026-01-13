import CategoryContainer from './CategoryContainer'
import SlotRow from '../../SlotRow'
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
      <SlotRow isRight={isRight}>
        {Array.from({ length: category.slots }).map((_, index) => (
          <TempBox key={index} />
        ))}
      </SlotRow>
    </CategoryContainer>
  )
}
