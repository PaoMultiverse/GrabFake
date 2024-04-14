
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
      <Footer/>
    </>
  )
}

export default App
