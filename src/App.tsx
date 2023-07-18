import { useState } from 'react'
import Display from './components/Display'
import Digits from './components/digits'
import Operations from './components/operations'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JavaScript Calculator</h1>
      <Display />
      <Digits />
      <Operations />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
