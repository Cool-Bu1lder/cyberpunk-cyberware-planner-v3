// TODO: Rename to cyberware container

export default function CategoriesContainer({ children }) {
  return (
    <div
      style={{
        position: 'fixed',
        height: '100%',
        width: '100%',

        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1.5vh',
        /*background: 'Red',*/
      }}
    >
      {children}
    </div>
  )
}
