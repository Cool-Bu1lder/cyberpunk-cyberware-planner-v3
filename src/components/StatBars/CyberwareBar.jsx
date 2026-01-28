import viteLogo from '../../assets/vite.svg'

import './StatBars.css'

const groups = 5
const bars = 10

const total = groups * bars

function TickRow({ fill, j, groupIndex }) {
  const active = fill > j + groupIndex * bars
  const activeClass = `tick ${active ? 'active' : ''}`
  const p = fill - j - groupIndex * bars - 1
  const positionClass =
    p === 0 ? 'first' : p === 1 ? 'second' : p === 2 ? 'third' : ''

  return (
    <div className="tick-layout">
      <div className={`${activeClass}`} />
      <div className={`${activeClass} ${positionClass}`} />
    </div>
  )
}

function TickGroup({ groupIndex, fill }) {
  const tickRow = Array.from({ length: bars }).map((_, j) => (
    <TickRow fill={fill} j={j} groupIndex={groupIndex} />
  ))

  return <div className="tick-row-layout">{tickRow}</div>
}

export default function CyberwareBar({ now, label }) {
  const fill = Math.floor((now / 100) * total)

  const tickGroups = Array.from({ length: groups }).map((_, i) => (
    <TickGroup group={i} fill={fill} />
  ))

  return (
    <div className="bar-container left vertically-centered">
      <div className="label" style={{ bottom: `${now - 6}%` }}>
        {label}
      </div>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <div className="tick-groups-layout">{tickGroups}</div>
    </div>
  )
}
