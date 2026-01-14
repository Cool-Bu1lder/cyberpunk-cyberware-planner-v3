import './SlotButton.css'

export default function SlotButton({ children, className, onClick }) {
  return (
    <button className={`slot-button ${className}`} onClick={onClick} style={{}}>
      {children}
    </button>
  )
}
