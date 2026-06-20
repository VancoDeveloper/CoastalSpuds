import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false)

  return (
    <Router>
      <Navbar isEnquireOpen={isEnquireOpen} setIsEnquireOpen={setIsEnquireOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App