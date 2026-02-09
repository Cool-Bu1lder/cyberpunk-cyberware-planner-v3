import capacityIcon from '../../assets/capacity.png'

import './StatBars.css'

const groups = 5
const bars = 10

const total = groups * bars

function TickRow({ fill, rowIndex, groupIndex }) {
  const active = fill > rowIndex + groupIndex * bars
  const activeClass = `tick cyberware ${active ? 'active' : ''}`
  const p = fill - rowIndex - groupIndex * bars - 1
  const positionClass =
    p === 0 ? 'first' : p === 1 ? 'second' : p === 2 ? 'third' : ''

  return (
    <div className="tick-layout">
      <div className={`${activeClass}`} />
      <div className={`${activeClass} ${positionClass}`} />
    </div>
  )
}

export default function CyberwareBar({ now, label }) {
  const fill = Math.floor((now / 100) * total)

  const tickGroups = Array.from({ length: groups }).map((_, i) => {
    const tickRow = Array.from({ length: bars }).map((_, j) => (
      <TickRow fill={fill} rowIndex={j} groupIndex={i} />
    ))

    return <div className="tick-row-layout">{tickRow}</div>
  })

  return (
    <div className="bar-container left vertically-centered">
      <div className="label cyberware" style={{ bottom: `${now - 6}%` }}>
        {label}
      </div>
      <img src={capacityIcon} className="logo" alt="Vite logo" />
      <div className="tick-groups-layout">{tickGroups}</div>
    </div>
  )
}
