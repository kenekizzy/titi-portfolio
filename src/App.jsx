import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import ContactForm from './components/ContactForm'
import PlayGround from './components/PlayGround'
import './App.css'

function App() {

  return (
    <div className='bg-card bg-no-repeat'>
      <Navbar />
      <Hero />
      <Project />
      <PlayGround />
      <ContactForm />
    </div>
  )
}

// container max-w-full px-32 py-3

export default App
