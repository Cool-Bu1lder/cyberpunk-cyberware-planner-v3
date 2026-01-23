import './StatBars.css'

const groups = 5
const bars = 10

const total = groups * bars

export default function CyberwareBar({ now, label }) {
  const fill = Math.floor((now / 100) * total)

  return (
    <div className="bar-container left vertically-centered">
      <div>{label}</div>
      <div className="tick-groups-layout">
        {Array.from({ length: groups }).map((_, i) => (
          <div className="tick-row-layout">
            {Array.from({ length: bars }).map((_, j) => {
              const active = fill > j + i * bars
              return (
                <div className="tick-layout">
                  <div className={`tick ${active ? 'active' : ''}`} />
                  <div className={`tick ${active ? 'active' : ''}`} />
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
