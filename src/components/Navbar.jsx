import logo from '../assets/icons/logo.svg'
import HeaderIcon from '../assets/icons/header-icon.svg'
import { NavLink, Link } from 'react-router-dom'
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
            <nav className="flex justify-between items-center container-custom py-6 px-4 md:px-24 md:sticky">
                <div className='flex justify-center items-center w-28 h-16'>
                   <Link to="/"><img src={logo} alt="logo" className='w-full' /></Link> 
                </div>

                <div className={`sm: hidden md:flex md:items-center md:space-x-4 ${isMenuOpen && 'hidden'} md:bg-navbar py-3 px-5 md:rounded-full`}>
                        <ul className="flex flex-col md:flex-row justify-between items-center font-workSans list-none space-y-4 md:space-y-0 md:space-x-8 font-normal text-base text-white">
                            <li>
                                <NavLink to="/" exact
                                    className={({ isActive }) =>
                                        `font-normal text-base font-workSans flex justify-center items-center ${
                                          isActive ? 'text-white' : 'text-navbar'
                                        }`
                                      }>
                                    {({ isActive }) => (
                                    <>
                                    {isActive && <div className="w-1 h-1 rounded-full bg-white mr-1"></div>}
                                    Home
                                    </>
                                )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/project" exact
                                    className={({ isActive }) =>
                                        `font-normal text-base font-workSans flex justify-center items-center ${
                                        isActive ? 'text-white' : 'text-navbar'
                                        }`
                                    }
                                >
                                {({ isActive }) => (
                                    <>
                                    {isActive && <div className="w-1 h-1 rounded-full bg-white mr-1"></div>}
                                    Projects
                                    </>
                                )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/playground" exact
                                    className={({ isActive }) =>
                                        `font-normal text-base font-workSans flex justify-center items-center ${
                                          isActive ? 'text-white' : 'text-navbar'
                                        }`
                                      }>
                                    {({ isActive }) => (
                                    <>
                                    {isActive && <div className="w-1 h-1 rounded-full bg-white mr-1"></div>}
                                    Playground
                                    </>
                                )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" exact
                                    className={({ isActive }) =>
                                        `font-normal text-base font-workSans flex justify-center items-center ${
                                          isActive ? 'text-white' : 'text-navbar'
                                        }`
                                      }>
                                    {({ isActive }) => (
                                    <>
                                    {isActive && <div className="w-1 h-1 rounded-full bg-white mr-1"></div>}
                                    About
                                    </>
                                )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" exact
                                    className={({ isActive }) =>
                                        `font-normal text-base font-workSans flex justify-center items-center ${
                                          isActive ? 'text-white' : 'text-navbar'
                                        }`
                                      }>
                                    {({ isActive }) => (
                                    <>
                                    {isActive && <div className="w-1 h-1 rounded-full bg-white mr-1"></div>}
                                    Contact
                                    </>
                                )}
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                <div className={`py-8 px-6 fixed top-20 left-0 w-full h-full z-50 bg-portfolio transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                        <ul className="flex flex-col font-workSans list-none space-y-8 font-normal text-base text-white">
                            <li>
                            <NavLink to="/" exact
                                className={({ isActive }) =>
                                `font-normal text-4xl font-workSans flex items-center gap-x-4 ${isActive ? 'text-white' : 'text-navbar'}`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {({ isActive }) => (
                                    <>
                                    {isActive ? (<div className="w-2 h-2 rounded-full bg-white"></div>) : (<div></div>)}
                                    Home
                                    </>
                                )}
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/project" exact
                                className={({ isActive }) =>
                                    `font-normal text-4xl font-workSans flex items-center gap-x-4 ${isActive ? 'text-white' : 'text-navbar'}`
                                    }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {({ isActive }) => (
                                    <>
                                    {isActive ? (<div className="w-2 h-2 rounded-full bg-white"></div>) : (<div></div>)}
                                    Projects
                                    </>
                                )}
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/playground" exact
                                className={({ isActive }) =>
                                    `font-normal text-4xl font-workSans flex items-center gap-x-4 ${isActive ? 'text-white' : 'text-navbar'}`
                                    }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {({ isActive }) => (
                                    <>
                                    {isActive ? (<div className="w-2 h-2 rounded-full bg-white"></div>) : (<div></div>)}
                                    Playground
                                    </>
                                )}
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/about" exact
                                className={({ isActive }) =>
                                    `font-normal text-4xl font-workSans flex items-center gap-x-4 ${isActive ? 'text-white' : 'text-navbar'}`
                                    }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {({ isActive }) => (
                                    <>
                                    {isActive ? (<div className="w-2 h-2 rounded-full bg-white"></div>) : (<div></div>)}
                                    About
                                    </>
                                )}
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/contact" exact
                                className={({ isActive }) =>
                                    `font-normal text-4xl font-workSans flex items-center gap-x-4 ${isActive ? 'text-white' : 'text-navbar'}`
                                    }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {({ isActive }) => (
                                    <>
                                    {isActive ? (<div className="w-2 h-2 rounded-full bg-white"></div>) : (<div></div>)}
                                    Contact
                                    </>
                                )}
                            </NavLink>
                            </li>
                        </ul>
                </div>


                <div className='hidden md:block'>
                    <img src={HeaderIcon} alt="" />
                </div>

                <div className='md:hidden flex justify-between items-center gap-x-6'>
                    <img src={HeaderIcon} alt="" className='w-12 h-12' />

                    <div onClick={toggleMenu}>
                        <button className="text-white focus:outline-none z-50">
                            {/* Hamburger icon */}
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>
                </div>

                
            </nav>

        </div>
    
    </>
    
  )
}

export default Navbar