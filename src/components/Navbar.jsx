import Logo from '../assets/images/logo.png'
import NightMode from '../assets/icons/night.svg'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-portfolio px-32 py-3">
        <div className='flex justify-start items-start'>
            <img src={Logo} alt="logo" className='w-20 h-20' />
        </div>
        <div className='py-3 px-5 rounded-full bg-navbar'>
            <ul className="flex justify-between items-center list-none space-x-4 font-normal text-base text-white">
                <li>Home</li>
                <li>Projects</li>
                <li>Playground</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='bg-ellipse p-2 w-10 h-10 rounded-full'>
            <img src={NightMode} alt="" />
        </div>
    </nav>
  )
}

export default Navbar