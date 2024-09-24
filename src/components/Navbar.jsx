import logo from '../assets/icons/logo.svg'
import NightMode from '../assets/icons/night.svg'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isMenuOpen]);
  return (
    <>
        <div className='bg-portfolio'>
            <nav className="flex justify-between items-center container-custom py-8 px-4 md:px-24">
                <div className='flex justify-center items-center w-28 h-16'>
                    <img src={logo} alt="logo" className='w-full' />
                </div>

                <div className={`sm: hidden md:flex md:items-center md:space-x-4 ${isMenuOpen && 'hidden'} md:bg-navbar py-3 px-5 md:rounded-full`}>
                        <ul className="flex flex-col md:flex-row justify-between items-center font-workSans list-none space-y-4 md:space-y-0 md:space-x-8 font-normal text-base text-white">
                            <li>
                                <NavLink to="/" exact
                                    className={({ isActive }) =>
                                        isActive ? 'font-normal text-base text-white font-workSans' : 'font-normal text-base text-navbar font-workSans'
                                    }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/project" exact
                                    className={({ isActive }) =>
                                        isActive ? 'font-normal text-base text-white font-workSans' : 'font-normal text-base text-navbar font-workSans'
                                    }>
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/playground" exact
                                    className={({ isActive }) =>
                                        isActive ? 'font-normal text-base text-white font-workSans' : 'font-normal text-base text-navbar font-workSans'
                                    }>
                                    Playground
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" exact
                                    className={({ isActive }) =>
                                        isActive ? 'font-normal text-base text-white font-workSans' : 'font-normal text-base text-navbar font-workSans'
                                    }>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" exact
                                    className={({ isActive }) =>
                                        isActive ? 'font-normal text-base text-white font-workSans' : 'font-normal text-base text-navbar font-workSans'
                                    }>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                <div className={`p-4 fixed top-20 left-0 w-full h-full z-50 bg-portfolio transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                        <ul className="flex flex-col font-workSans list-none space-y-8 font-normal text-base text-white">
                            <li>
                            <NavLink to="/" exact
                                className={({ isActive }) =>
                                isActive ? 'font-normal text-4xl text-white font-workSans' : 'font-normal text-4xl text-navbar font-workSans'
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/project" exact
                                className={({ isActive }) =>
                                isActive ? 'font-normal text-4xl text-white font-workSans' : 'font-normal text-4xl text-navbar font-workSans'
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/playground" exact
                                className={({ isActive }) =>
                                isActive ? 'font-normal text-4xl text-white font-workSans' : 'font-normal text-4xl text-navbar font-workSans'
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Playground
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/about" exact
                                className={({ isActive }) =>
                                isActive ? 'font-normal text-4xl text-white font-workSans' : 'font-normal text-4xl text-navbar font-workSans'
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/contact" exact
                                className={({ isActive }) =>
                                isActive ? 'font-normal text-4xl text-white font-workSans' : 'font-normal text-4xl text-navbar font-workSans'
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </NavLink>
                            </li>
                        </ul>
                </div>


                <div className='bg-ellipse p-2 w-10 h-10 rounded-full'>
                    <img src={NightMode} alt="" />
                </div>

                <div className="md:hidden" onClick={toggleMenu}>
                    <button className="text-white focus:outline-none z-50">
                        {/* Hamburger icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </nav>

        </div>
    
    </>
    
  )
}

export default Navbar