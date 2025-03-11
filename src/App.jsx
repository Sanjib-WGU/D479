import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Lodging from './components/Lodging'
import Transportation from './components/Transportation'
import ThingsToDo from './components/ThingsToDo'
import Destinations from './components/Destinations'
import Faq from './components/Faq'
import Hospital from './components/hospital'

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          < Route path='/' element={<Main/>} />
          <Route path='/lodging' element={<Lodging/>} />
          <Route path='/transportation' element={<Transportation/>} />
          <Route path='/todo' element={<ThingsToDo/>} />
          <Route path='/destinations' element={<Destinations/>} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/hospital' element={<Hospital/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
