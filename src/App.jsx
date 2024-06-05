import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import ContactForm from './components/ContactForm'
import PlayGround from './components/PlayGround'
import './App.css'

function App() {

  return (
    <div className='container max-w-full bg-portfolio px-32 py-3'>
      <Navbar />
      <Hero />
      <Project />
      <PlayGround />
      <ContactForm />
    </div>
  )
}

export default App
