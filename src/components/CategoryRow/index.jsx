export default function CategoryRow({ children, gap = '1vh' }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: gap,
        //background: 'Green'
      }}
    >
      {children}
    </div>
  )
}
