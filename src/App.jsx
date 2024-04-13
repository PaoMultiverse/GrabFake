import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/GrabFake' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
