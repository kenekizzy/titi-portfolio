import AboutHero from '../components/AboutHero'
import Skills from '../components/Skills'
import Project from '../components/Project'
import ContactForm from '../components/ContactForm'

const About = () => {
  return (
    <>
        <AboutHero />
        <Skills />
        <Project available={false}/>
        <ContactForm/>
    </>
  )
}

export default About