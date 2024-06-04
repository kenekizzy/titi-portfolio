import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import './App.css'

function App() {

  return (
    <div className='container max-w-full bg-portfolio px-32 py-3'>
      <Navbar />
      <Hero />
      <Project />
    </div>
  )
}

export default App
