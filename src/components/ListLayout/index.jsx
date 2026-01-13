import './ListLayout.css'

export default function ListLayout({
  children,
  justifyContentRight,
  gap = '10px',
  className = '',
}) {
  return (
    <div
      className={`list-layout ${justifyContentRight ? 'right' : 'left'} ${className}`}
      style={{
        gap,
      }}
    >
      {children}
    </div>
  )
}
