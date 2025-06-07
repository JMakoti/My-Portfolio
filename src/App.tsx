import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './Pages/HeroSection'
import AboutMe from './Pages/AboutMe'
import Education from './Pages/Education'
import Skills from './Pages/Skills'
import Portfolio from './Pages/Portfolio'
import Contacts from './Pages/Contacts'
import NotFound from './Pages/NotFound'

const NAVBAR_PATHS = [
  '/',
  '/about',
  '/education',
  '/skills',
  '/projects',
  '/contact'
];

function App() {

  const location = useLocation();
  const hideNavbar = !NAVBAR_PATHS.includes(location.pathname);
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
