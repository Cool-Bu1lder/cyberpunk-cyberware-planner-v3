import CategoryContainer from './CategoryContainer'
import ListLayout from '../../ListLayout'
import CategoryLabel from './CategoryLabel'
import SlotButton from '../../SlotButton'

import { usePage } from '../../../contexts/PageContext'

export default function CategoryHandler({ category, side }) {
  const isRight = side === 'right'

  const { setPage } = usePage()

  return (
    <CategoryContainer>
      {/*TODO: pass class name into category label for font */}
      <CategoryLabel textAlignRight={!isRight}>{category.label}</CategoryLabel>
      <ListLayout justifyContentRight={!isRight} gap={'1.5vh'}>
        {Array.from({ length: category.slots }).map((_, index) => (
          <SlotButton key={index} onClick={() => setPage('Other')} />
        ))}
      </ListLayout>
    </CategoryContainer>
  )
}
