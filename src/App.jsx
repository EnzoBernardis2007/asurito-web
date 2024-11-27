import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landpage from './pages/Landpage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Landpage /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
