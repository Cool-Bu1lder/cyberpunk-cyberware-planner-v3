import ListLayout from '../ListLayout'
import GridLayout from '../GridLayout'
import TempBox from '../TempBox'
import { usePage } from '../../contexts/PageContext'
import { useData } from '../../hooks/useData'

import { categoriesLookUp } from '../../data/categories'
import { cyberwareLookUp } from '../../data/cyberware'
import SlotButton from '../SlotButton/index.jsx'

export default function OptionsHandler() {
  const { page, setPage } = usePage()

  const urlData = useData()
  const category = categoriesLookUp[page]

  return (
    <>
      <div className={'options-container'}>
        <div className={'category-selector'}>{category.label}</div>
        <ListLayout gap={'1.5vh'} className={'equipped-container'}>
          {Array.from({ length: category.slots }).map((_, index) => {
            const item = cyberwareLookUp[page][urlData[page][index]] // TODO: may be better to pass the data of each equipped item into this component instead of handling data here

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
          <TempBox />
          <TempBox />
          <TempBox />
          <TempBox />
          <TempBox />
          <TempBox />
          <TempBox />
          <TempBox />
        </GridLayout>
      </div>
      <button onClick={() => setPage('MainMenu')}>Back</button>
    </>
  )
}
