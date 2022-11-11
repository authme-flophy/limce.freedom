import { Route, Routes } from 'react-router-dom'
import './App.css'
import Album from './components/Album'
import Footer from './components/Footer'
import Home from './components/Home'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/albums' element={<Album />}>
          <Route path='/albums/:id' element={<Album />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
