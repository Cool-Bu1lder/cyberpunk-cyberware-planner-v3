import './StatBars.css'

export default function ArmourBar({ now, label }) {
  return (
    <div className="bar-container right vertically-centered">
      <div className="armour" style={{ height: `${now}%` }}></div>
      <div>{label}</div>
    </div>
  )
}
