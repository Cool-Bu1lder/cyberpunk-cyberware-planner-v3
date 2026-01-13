import './GridLayout.css'

export default function GridLayout({
  children,
  columns = 1,
  rowGap = '10px',
  columnGap = '10px',
  className = '',
}) {
  return (
    <div
      className={`grid-layout ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        rowGap,
        columnGap,
      }}
    >
      {children}
    </div>
  )
}
