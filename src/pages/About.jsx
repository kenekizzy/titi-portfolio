import AboutHero from '../components/AboutHero'
import Skills from '../components/Skills'
import Project from '../components/Project'
import ContactForm from '../components/ContactForm'
import ScrollToTop from 'react-scroll-to-top'

const About = () => {
  return (
    <>
    <ScrollToTop
          smooth
          component={
            <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          }
        />
        <AboutHero />
        <Skills />
        <Project available={false}/>
        <ContactForm/>
    </>
  )
}

export default About