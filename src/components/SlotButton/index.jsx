import './SlotButton.css'

export default function SlotButton({ className, onClick }) {
  return (
    <button
      className={`slot-button ${className}`}
      onClick={onClick}
      style={{}}
    />
  )
}
