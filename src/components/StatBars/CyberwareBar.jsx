import './StatBars.css'

const groups = 5
const bars = 10

const total = groups * bars

export default function CyberwareBar({ now, label }) {
  const fill = Math.floor((now / 100) * total)

  return (
    <div className="bar-container left vertically-centered">
      <div>{label}</div>
      <div className="tick-set">
        {Array.from({ length: groups }).map((_, i) => (
          <div className="tick-group">
            {Array.from({ length: bars }).map((_, j) => (
              <div className="tick-row">
                <div className="tick" />
                <div className="tick" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/*

<div className="bar-container left vertically-centered">
  <div className="cyberware" style={{ height: `${now}%` }}></div>
  <div>{label}</div>
</div>

 */
