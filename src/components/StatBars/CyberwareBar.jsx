import './StatBars.css'

export default function CyberwareBar({ now, label }) {
  return (
    <div className="bar-container left vertically-centered">
      <div className="cyberware" style={{ height: `${now}%` }}></div>
      <div>{label}</div>
    </div>
  )
}
