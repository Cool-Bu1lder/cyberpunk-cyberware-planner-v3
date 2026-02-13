import capacityIcon from '/src/assets/capacity.png'

import styles from './StatBars.module.css'

const groups = 5
const bars = 10

const total = groups * bars

function TickRow({ fill, rowIndex, groupIndex }) {
  const active = fill > rowIndex + groupIndex * bars
  const activeClass = `${styles.tick} ${styles.cyberware} ${active ? styles.active : ''}`
  const p = fill - rowIndex - groupIndex * bars - 1
  const positionClass = `${p === 0 ? styles.first : p === 1 ? styles.second : p === 2 ? styles.third : ''}`

  return (
    <div className={`${styles['tick-layout']}`}>
      <div className={`${activeClass}`} />
      <div className={`${activeClass} ${positionClass}`} />
    </div>
  )
}

export default function CyberwareBar({ className, now, label }) {
  const icon = capacityIcon || ''

  const fill = Math.floor((now / 100) * total)

  const tickGroups = Array.from({ length: groups }).map((_, i) => {
    const tickRow = Array.from({ length: bars }).map((_, j) => (
      <TickRow fill={fill} rowIndex={j} groupIndex={i} />
    ))

    return <div className={`${styles['tick-row-layout']}`}>{tickRow}</div>
  })

  return (
    <div className={`${className} ${styles['stat-bar']}`}>
      <div
        className={`${styles.label} ${styles.cyberware}`}
        style={{ bottom: `${now - 6}%` }}
      >
        {label}
      </div>
      <img src={icon} className={`${styles.logo}`} alt="Vite logo" />
      <div className={`${styles['tick-groups-layout']}`}>{tickGroups}</div>
    </div>
  )
}
