import './css/App.css'
import Navbar from './components/Navbar'
import Favorite from './pages/Favorites'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
     <Navbar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favorites' element= {<Favorite />}></Route>
      </Routes>
    </main>
    </>
  )
}

export default App
