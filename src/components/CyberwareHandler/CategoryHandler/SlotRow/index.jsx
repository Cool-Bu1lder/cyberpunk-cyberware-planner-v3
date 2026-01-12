import './SlotRow.css'

export default function SlotRow({ children, isRight }) {
  return (
    <div className={`slot-row ${isRight ? 'right' : 'left'}`}>{children}</div>
  )
}
