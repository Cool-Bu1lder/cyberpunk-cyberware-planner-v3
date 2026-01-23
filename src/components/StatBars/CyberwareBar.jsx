import viteLogo from '/vite.svg'

import './StatBars.css'

const groups = 5
const bars = 10

const total = groups * bars

export default function CyberwareBar({ now, label }) {
  const fill = Math.floor((now / 100) * total)

  return (
    <div className="bar-container left vertically-centered">
      <div className="label" style={{ bottom: `${now - 6}%` }}>
        {label}
      </div>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <div className="tick-groups-layout">
        {Array.from({ length: groups }).map((_, i) => (
          <div className="tick-row-layout">
            {Array.from({ length: bars }).map((_, j) => {
              const active = fill > j + i * bars
              const activeClass = `tick ${active ? 'active' : ''}`
              const p = fill - j - i * bars - 1
              const positionClass =
                p === 0 ? 'first' : p === 1 ? 'second' : p === 2 ? 'third' : ''
              return (
                <div className="tick-layout">
                  <div className={`${activeClass}`} />
                  <div className={`${activeClass} ${positionClass}`} />
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
