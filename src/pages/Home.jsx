import PlayGround from '../components/PlayGround'
import Hero from '../components/Hero'
import Project from '../components/Project'
import ContactForm from '../components/ContactForm'
import ScrollToTop from 'react-scroll-to-top'

const Home = () => {
  return (
    <div>
      <ScrollToTop
          smooth
          component={
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                width="24"
                height="24"
                className='mt-2'
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              <span className="text-sm mt-4 text-white font-nb font-normal text-nowrap">Back to Top</span>
            </div>
          }
        />
        <Hero />
        <Project />
        <PlayGround />
        <ContactForm />
    </div>
  )
}

export default Home