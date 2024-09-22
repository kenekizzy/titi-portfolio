import Heros from '../assets/images/new-logo.png'
import DownloadIcon from "../assets/icons/download.svg"
import Rocket from "../assets/icons/rocket.svg"

const Hero = () => {
  return (
    
      <div className='bg-portfolio'>
          <section className="flex flex-col container-custom md:flex-row md:justify-between md:items-center py-3 px-4 md:px-24">
            <div className='px-1 py-8 space-y-8'>
                <h2 className='text-3xl md:text-5xl font-bold font-ogg text-white w-mobile-hero-header md:w-[75%]'>Hi there! I’m Titi Arigbe, A Product Designer</h2>
                <p className='font-normal text-sm md:text-lg font-workSans text-hero-description w-full md:w-hero-description'>A versatile and open-minded UI/UX designer who prioritizes simplicity and usability, seamlessly integrating these principles with modern, aesthetically pleasing designs. Continuously pushing creative boundaries, I am committed to evolving, learning, and refining my craft to deliver innovative and impactful user experiences.</p>
                <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-start pl-0 space-x-0 md:space-x-4'>
                    <button className='flex justify-center text-center items-center py-3 px-0 md:px-5 font-workSans bg-secondaryButton text-hero-secondaryButton border-none rounded-lg gap-0 w-full md:w-[250px] md:gap-2'>Download Resume <span><img src={DownloadIcon} alt="" className='ml-2'/></span></button>
                    <button className='flex justify-center text-center items-center py-3 px-0 md:px-5 font-workSans bg-primaryButton text-white border-none rounded-lg gap-0 w-full md:w-[250px] md:gap-2'>Get in touch <span><img src={Rocket} alt="" className='ml-2'/></span></button>
                </div>
            </div>
            <div className='flex justify-center md:justify-end'>
                <img src={Heros} alt="hero-image" className='w-[364px] md:w-full h-[364px] md:h-full' />
            </div>
        </section>
      </div>
  )
}

export default Hero