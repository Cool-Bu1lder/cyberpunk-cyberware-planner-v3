import './SlotRow.css'

export default function SlotRow({ children, isRight, className = '' }) {
  return (
    <div className={`slot-row ${isRight ? 'right' : 'left'} ${className}`}>
      {children}
    </div>
  )
}
