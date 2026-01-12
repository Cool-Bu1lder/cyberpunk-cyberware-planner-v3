import './CategoryRow.css'

export default function CategoryRow({ children, gap = '1vh' }) {
  return (
    <div className={'category-row'} style={{ gap: gap }}>
      {children}
    </div>
  )
}
