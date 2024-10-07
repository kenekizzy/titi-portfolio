/* eslint-disable react/no-unescaped-entities */
import AboutHeader from "../assets/images/about-header.png"
import DownloadIcon from "../assets/icons/download.svg"
import Rocket from "../assets/icons/rocket.svg"

const AboutHero = () => {
  return (
    <div className="bg-portfolio">
        <section className='flex flex-col md:flex-row px-4 md:px-24 justify-between container-custom py-10'>
          <h2 className="text-4xl font-bold font-ogg mb-2 block md:hidden text-white text-center">About me</h2>
          <div className='flex-1 flex items-center justify-center md:items-start'>
              <img src={AboutHeader} alt="" className="w-2/3 h-2/3 md:w-[400px] md:h-[520px]" />
          </div>

          <div className='flex-1 text-white'>
              <h2 className="text-4xl font-bold font-ogg mb-2 hidden md:block">About me</h2>
              <p className="text-base md:text-xl font-normal leading-8 md:leading-9 mb-7 font-nb">Hey there! I'm Titi, a product designer with a passion for turning complex challenges into intuitive digital experiences. My journey took an exciting twist when I pivoted from Petroleum Engineering to the colorful world of UI/UX design – a move that perfectly blends my analytical mindset with my creative spirit.
              When I'm not crafting pixel-perfect interfaces or deep-diving into user research, you'll find me exploring the latest design trends or collaborating with cross-functional teams to bring innovative ideas to life.
              Outside of design, I'm an avid learner, always eager to pick up new skills or perspectives. I love losing myself in a good book, experimenting with new recipes in the kitchen, and occasionally trying my hand at digital illustration. </p>
              <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-start space-x-0 md:space-x-4 py-10'>
                  <a href="/src/assets/files/titi-resume.pdf"  download="Resume.pdf" className='flex justify-center items-center py-3 px-5 font-workSans bg-secondaryButton text-hero-secondaryButton border-none rounded-lg gap-2 w-full md:w-[250px]'>Download Resume <span><img src={DownloadIcon} alt="" /></span></a>
                  <button className='flex justify-center items-center py-3 px-5 font-workSans bg-primaryButton text-white border-none rounded-lg gap-2 w-full md:w-[250px]'>Get in touch <span><img src={Rocket} alt="" /></span></button>
              </div>
          </div>

          </section>
    </div>
  )
}

export default AboutHero