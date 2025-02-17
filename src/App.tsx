import './global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './components/AuthProvider'
import Landpage from './pages/Landpage'
import Signup from './pages/Signup'
import Login from './pages/Login/Login'
import Contact from './pages/Contact/Contact'
import About from './pages/About'
import Profile from './pages/Profile/Profile'
import Championships from './pages/Championships'

function App(): JSX.Element {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Landpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* After login */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/championships" element={<Championships />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
