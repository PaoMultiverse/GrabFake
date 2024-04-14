
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/Home'
import Restaurant from './components/Restaurant'
import StoreMeal from './components/Store'
import "./App.css"
function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/GrabFake' element={<HomePage/>}/>
          <Route path='/Restaurant' element={<Restaurant/>}/>
          <Route path='/StoreMeal' element={<StoreMeal/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
