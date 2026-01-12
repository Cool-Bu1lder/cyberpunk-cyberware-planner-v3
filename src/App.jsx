import ModelView from './components/ModelView/index.jsx'

function TestContainer({ children }) {
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

function TestRow({ children, gap = '1vh' }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: gap,
        /*background: 'Green',*/
      }}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <>
      <ModelView />

      <TestContainer>
        <TestRow gap="25vh">
          <div
            style={{
              height: '12vh',
              width: '30vh',
              background: 'Orange',
            }}
          />
          <div
            style={{
              height: '12vh',
              width: '30vh',
              background: 'Orange',
            }}
          />
        </TestRow>
        <TestRow gap="40vh">
          <div
            style={{
              height: '12vh',
              width: '30vh',
              background: 'Orange',
            }}
          />
          <div
            style={{
              height: '12vh',
              width: '30vh',
              background: 'Orange',
            }}
          />
        </TestRow>
        <TestRow gap="55vh">
          <div
            style={{
              height: '12vh',
              width: '30vh',
              background: 'Orange',
            }}
          />
          <div
            style={{
              height: '12vh',
              width: '30vh',
              background: 'Orange',
            }}
          />
        </TestRow>
        <TestRow gap="25vh">
          <div
            style={{
              height: '12vh',
              width: '30vh',
              background: 'Orange',
            }}
          />
          <div
            style={{
              height: '12vh',
              width: '30vh',
              background: 'Orange',
            }}
          />
        </TestRow>
        <TestRow gap="25vh">
          <div
            style={{
              height: '12vh',
              width: '30vh',
              background: 'Orange',
            }}
          />
          <div
            style={{
              height: '12vh',
              width: '30vh',
              background: 'Orange',
            }}
          />
        </TestRow>
      </TestContainer>
    </>
  )
}

export default App
