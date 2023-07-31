import {React, useState} from 'react'
import {FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'

function Navbar() {
    const [navOpen, setNav] = useState(false)
    const links = [
      {
        id: 1,
        link: 'Home'
      },
      {
        id: 2,
        link: 'About'
      },
      {
        id: 3,
        link: 'Projects'
      },
      {
        id: 4,
        link: 'Skills'
      },
      {
        id: 5,
        link: 'Contact'
      }
    ]
    return (
      // Navbar
      <div className="flex  justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10">
        {/* Logo */}
        <div> 
          <h1 className=" text-4xl 2xl:text-5xl font-signature ml-2">
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500'>K</span><span className='text-transparent bg-clip-text bg-gray-600'>B</span><span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-white'>M</span>
          </h1>
        </div>
        {/* Links inside Navbar */}
        <ul className="hidden md:flex "> 
          {links.map(({id, link}) =>(
            <li key={id} 
              className="px-4 cursor-pointer 2xl:text-lg capitalize font-medium  text-gray-500 hover:scale-125 duration-200">
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav(!navOpen)} className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          { navOpen ? <FaTimes size={30}/>: <FaBars size={30}/>}
        </div>
        {navOpen && 
        <ul className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({id, link}) =>(
                <li key={id} 
                  className="px-4 cursor-pointer capitalize py-6 text-4xl">
                  <Link to={link} smooth duration={500} onClick={() => setNav(!navOpen)}>{link}</Link>
                </li>
              ))}
        
        </ul>
        }
      </div>
    )
}

export default Navbar 