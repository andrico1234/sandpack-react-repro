import './App.css'
import { Sandpack } from '@codesandbox/sandpack-react'

function App() {
  return (
    <Sandpack template="react" files={{
      '/App.js': {
        code: `
export default function App() {
  return <h1Hello world</h1>
}
    `}
    }} />
  )
}

export default App
