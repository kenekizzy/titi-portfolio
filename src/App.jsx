import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ProjectPage from './pages/ProjectPage'
import PlaygroundPage from './pages/PlaygroundPage'
import ProjectRouteHandler from './components/ProjectRouteHandler'
import Contact from './pages/Contact'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (

    <>
      <Router>
        <div className='bg-card bg-no-repeat bg-cover'>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/project' element={<ProjectPage />}/>
            <Route path='/project/:id' element={<ProjectRouteHandler />} />
            <Route path='/playground' element={<PlaygroundPage />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

// container max-w-full px-32 py-3

export default App
