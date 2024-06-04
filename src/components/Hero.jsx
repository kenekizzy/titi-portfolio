import Heros from '../assets/images/hero-image.png'
import DownloadIcon from "../assets/icons/download.svg"
import Rocket from "../assets/icons/rocket.svg"

const Hero = () => {
  return (
    <section className="flex justify-between items-center pt-8">
        <div className='px-6 py-8 space-y-8'>
            <h2 className='text-5xl font-bold text-white w-hero-header'>Hi there! I’m Titi Arigbe, A Product Designer</h2>
            <p className='font-normal text-lg text-hero-description w-hero-description'>An open-minded designer that designs with simplicity & usability in mind, nicely blended with beautifully designed modern aesthetics. A designer that constantly pushes boundaries, evolving, learning and growing.</p>
            <div className='flex justify-start pl-2 space-x-4'>
                <button className='flex items-center py-3 px-5 bg-secondaryButton text-hero-secondaryButton border-none rounded-lg gap-2'>Download Resume <span><img src={DownloadIcon} alt="" /></span></button>
                <button className='flex items-center py-3 px-5 bg-primaryButton text-white border-none rounded-lg gap-2'>Get in touch <span><img src={Rocket} alt="" /></span></button>
            </div>
        </div>
        <div>
            <img src={Heros} alt="hero-image" className='w-[620px] h-[608px]' />
        </div>
    </section>
  )
}

export default Hero