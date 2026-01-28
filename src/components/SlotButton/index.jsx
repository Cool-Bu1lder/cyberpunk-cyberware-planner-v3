import './SlotButton.css'

import viteLogo from '../../assets/vite.svg'

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_icon_buttons

export default function SlotButton({ children, className, onClick, icon }) {
  return (
    <button className={`slot-button ${className}`} onClick={onClick} style={{}}>
      <img src={icon || viteLogo} className={'icon'} alt={children} />
      {children}
    </button>
  )
}
