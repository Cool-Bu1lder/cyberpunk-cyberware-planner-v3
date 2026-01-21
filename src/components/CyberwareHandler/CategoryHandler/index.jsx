import { useMemo } from 'react'

import CategoryContainer from './CategoryContainer'
import ListLayout from '../../ListLayout'
import CategoryLabel from './CategoryLabel'
import SlotButton from '../../SlotButton'

import { usePage } from '../../../contexts/PageContext'
import { useData } from '../../../hooks/useData.js'
import { cyberware } from '../../../data/cyberware'

export default function CategoryHandler({ category, side }) {
  const isRight = side === 'right'

  const { setPage } = usePage()
  const [urlData] = useData()

  const slotIds = urlData[category.id]
  const cyberwareCategory = cyberware[category.id]

  const cyberwareById = useMemo(() => {
    return Object.fromEntries(cyberwareCategory.map((item) => [item.id, item]))
  }, [cyberwareCategory])

  const items = slotIds.map((id) => cyberwareById[id]).filter(Boolean)

  return (
    <CategoryContainer>
      {/*TODO: pass class name into category label for font */}
      <CategoryLabel textAlignRight={!isRight}>{category.label}</CategoryLabel>
      <ListLayout justifyContentRight={!isRight} gap={'1.5vh'}>
        {Array.from({ length: category.slots }).map((_, index) => {
          const item = items[index] // TODO: may be better to pass the data of each equipped item into this component instead of handling data here

          return (
            <SlotButton key={index} onClick={() => setPage(category.id)}>
              {item ? item.label : 'Empty'}
            </SlotButton>
          )
        })}
      </ListLayout>
    </CategoryContainer>
  )
}
