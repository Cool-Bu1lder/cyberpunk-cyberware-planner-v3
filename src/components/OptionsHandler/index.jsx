import ListLayout from '../ListLayout'
import GridLayout from '../GridLayout'
import { usePage } from '../../contexts/PageContext'
import { useData } from '../../contexts/DataContext'
import { getData } from '../../utils/getData'

import { categoriesLookUp } from '../../data/categories'
import { cyberware, cyberwareLookUp } from '../../data/cyberware'
import SlotButton from '../SlotButton/index.jsx'

export default function OptionsHandler() {
  const { page, setPage } = usePage()

  const { data, setData } = useData()
  const categoryInfo = categoriesLookUp[page]

  const filteredCyberware = cyberware[page].filter(
    (item) => !data[page].includes(item.id),
  )

  function equip(itemId) {
    const searchParams = new URLSearchParams(window.location.search)
    const currentValues = searchParams.get(page)

    if (currentValues.length >= categoryInfo.slots) return null

    searchParams.set(page, currentValues + itemId)
    window.history.replaceState(null, '', '?' + searchParams.toString())

    setData(() => getData())
  }

  function unequip(itemId) {
    const searchParams = new URLSearchParams(window.location.search)
    const currentValues = searchParams.get(page)

    if (currentValues.length <= 0) return null

    searchParams.set(page, currentValues.replace(itemId, ''))
    window.history.replaceState(null, '', '?' + searchParams.toString())

    setData(() => getData())
  }

  return (
    <>
      <div className={'options-container'}>
        <div className={'category-selector'}>{categoryInfo.label}</div>
        <ListLayout gap={'1.5vh'} className={'equipped-container'}>
          {Array.from({ length: categoryInfo.slots }).map((_, index) => {
            const item = cyberwareLookUp[page][data[page][index]] // TODO: use cyberware.find instead?

            return (
              <SlotButton
                key={index}
                onClick={() => unequip(data[page][index])}
              >
                {item ? item.label : 'Empty'}
              </SlotButton>
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
            <SlotButton key={index} onClick={() => equip(item.id)}>
              {item ? item.label : 'Empty'}
            </SlotButton>
          ))}
        </GridLayout>
      </div>
      <button onClick={() => setPage('MainMenu')}>Back</button>
    </>
  )
}
