import ListLayout from '../ListLayout'
import GridLayout from '../GridLayout'
import TempBox from '../TempBox'
import { usePage } from '../../contexts/PageContext'

export default function OptionsHandler() {
  const { setPage } = usePage()
  return (
    <>
      <div className={'options-container'}>
        <div className={'category-selector'}></div>
        <ListLayout gap={'1.5vh'} className={'equipped-container'}>
          <TempBox />
          <TempBox />
          <TempBox />
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
