
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './components/Home'
import Restaurant from './components/Restaurant'

import "./App.css"
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Restaurant'ZZZZ element={<Restaurant/>}/>
      </Routes>
    </>
  )
}

export default App
