export default function SlotRow({ children, isRight }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isRight ? 'flex-start' : 'flex-end',
        gap: '1.5vh',
      }}
    >
      {children}
    </div>
  )
}