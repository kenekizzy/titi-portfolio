import DribbleIcon from '../assets/icons/dribble.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import InstagramIcon from '../assets/icons/instagram.svg'

const ComingSoon = () => {
  return (
    <div className="bg-coming-soon w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white">
        <h2 className='font-ogg font-bold text-[64px] py-4'>Coming Soon</h2>
        <h5 className='font-nb f'>This project will be made available soon. Till then you can check out my work on any of the following platforms.</h5>

        <div className="flex flex-row md:justify-between gap-x-4 md:gap-x-8">
                <a href='' className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={DribbleIcon} alt="" /> Dribbble
                </a>
                <a href='https://www.linkedin.com/in/arigbe-titi-26804815a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={LinkedInIcon} alt="" /> LinkedIn
                </a>
                <a href='https://www.instagram.com/logic_mafia?igsh=MWxuZnZ5NnJhOWs3bQ%3D%3D&utm_source=qr' className="inline-flex items-center font-normal text-base gap-3">
                    <img className="w-6 h-6" src={InstagramIcon} alt="" /> Instagram
                </a>
            </div>
    </div>
  )
}

export default ComingSoon