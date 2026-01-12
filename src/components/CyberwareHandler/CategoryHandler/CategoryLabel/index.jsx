export default function CategoryLabel({ children, isRight }) {
  return (
    <div
      style={{
        fontSize: '2.5vh',
        textAlign: isRight ? 'left' : 'right', // TODO: May be possible to convert to css logic line
      }}
    >
      {children}
    </div>
  )
}