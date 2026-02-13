import styles from './SlotButton.module.css'

import emptyIcon from '../../assets/empty.webp'

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_icon_buttons

export default function SlotButton({ children, className, onClick, icon }) {
  const colour = icon ? styles.full : styles.empty

  return (
    <button
      className={`${styles['slot-button']} ${colour} ${className}`}
      onClick={onClick}
      style={{}}
    >
      <img src={icon || emptyIcon} className={styles.icon} alt={children} />
      {children}
    </button>
  )
}
