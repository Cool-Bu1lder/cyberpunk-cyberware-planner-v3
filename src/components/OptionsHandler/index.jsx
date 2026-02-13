import ListLayout from '../ListLayout'
import GridLayout from '../GridLayout'
import { usePage } from '../../contexts/PageContext'
import { useData } from '../../contexts/DataContext'
import { getData } from '../../utils/getData'
import { categories } from '../../data/categories'

import { categoriesLookUp } from '../../data/categories'
import { cyberware, cyberwareLookUp } from '../../data/cyberware'
import SlotButton from '../SlotButton/index.jsx'

import './OptionsHandler.css'

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

  function changePage(increment) {
    const i = categories.findIndex((item) => item.id === page) + increment
    const n = categories.length
    const p = categories[((i % n) + n) % n].id // arr[ (i % n + n) % n ]
    setPage(p)
  }

  return (
    <>
      <div className={'options-container'}>
        <div className={'category-selector'}>
          <button
            className={'category-button left'}
            onClick={() => changePage(-1)}
          ></button>
          <div className={'category-divider'}>
            <div className={'option-label'}>{categoryInfo.label}</div>
            <div className={'c-sm'}>
              {Array.from({ length: categories.length }).map((_, i) => {
                const j = categories.findIndex((item) => item.id === page)
                const active = i === j ? 'active' : ''
                return <div className={`i-bar ${active}`} />
              })}
            </div>
          </div>
          <button
            className={'category-button right'}
            onClick={() => changePage(1)}
          ></button>
        </div>
        <ListLayout gap={'1.5vh'} className={'equipped-container'}>
          {Array.from({ length: categoryInfo.slots }).map((_, index) => {
            const item = cyberwareLookUp[page][data[page][index]] // TODO: use cyberware.find instead?

            return (
              <SlotButton
                key={index}
                onClick={() => unequip(data[page][index])}
                icon={item ? item.icon : null}
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
            <SlotButton
              key={index}
              onClick={() => equip(item.id)}
              icon={item ? item.icon : null}
            >
              {item ? item.label : 'Empty'}
            </SlotButton>
          ))}
        </GridLayout>
      </div>
      <button onClick={() => setPage('MainMenu')}>Back</button>
    </>
  )
}
