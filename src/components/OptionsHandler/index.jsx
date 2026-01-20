import ListLayout from '../ListLayout'
import GridLayout from '../GridLayout'
import { usePage } from '../../contexts/PageContext'
import { useData } from '../../hooks/useData'

import { categoriesLookUp } from '../../data/categories'
import { cyberware, cyberwareLookUp } from '../../data/cyberware'
import SlotButton from '../SlotButton/index.jsx'

export default function OptionsHandler() {
  const { page, setPage } = usePage()

  const urlData = useData()
  const categoryInfo = categoriesLookUp[page]

  const filteredCyberware = cyberware[page].filter(
    (item) => !urlData[page].includes(item.id),
  )

  return (
    <>
      <div className={'options-container'}>
        <div className={'category-selector'}>{categoryInfo.label}</div>
        <ListLayout gap={'1.5vh'} className={'equipped-container'}>
          {Array.from({ length: categoryInfo.slots }).map((_, index) => {
            const item = cyberwareLookUp[page][urlData[page][index]] // TODO: use cyberware.find instead?

            return (
              <SlotButton key={index}>{item ? item.label : 'Empty'}</SlotButton>
            )
          })}
        </ListLayout>
        <GridLayout
          columns={4}
          rowGap={'1.5vh'}
          columnGap={'1.5vh'}
          className={'items-container'}
        >
          {filteredCyberware.map((item, index) => (
            <SlotButton key={index}>{item ? item.label : 'Empty'}</SlotButton>
          ))}
        </GridLayout>
      </div>
      <button onClick={() => setPage('MainMenu')}>Back</button>
    </>
  )
}
