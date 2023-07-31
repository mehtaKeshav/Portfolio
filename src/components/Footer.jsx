import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer = () => {
    const links = [
        {
            id: 1,
            child:(
                <>
                <FaLinkedin size={32} className='pl-1 fill-slate-200'/>
                </>
            ),
            href: 'https://www.linkedin.com/in/mehtakeshav',
            style: 'rounded-md'
        },
        {
            id: 2,
            child:(
                <>
                <FaGithub size={32} className='pl-1 fill-slate-200'/>
                </>
            ),
            href: 'https://github.com/mehtaKeshav',
            style: 'rounded-md'
        },
        {
            id: 3,
            child:(
                <>
                <HiOutlineMail size={32} className='pl-1 fill-slate-200'/>
                </>
            ),
            href: 'mailto:m12.keshav@gmail.com',
            style: 'rounded-md'
        },
        {
            id: 4,
            child:(
                <>
                <BsFillPersonLinesFill size={32} className='pl-1 fill-slate-'/>
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-md',
            download: true,
        }
    ]
  return (
    <div className=' sm:hidden grid flex-row justify-center h-48 items-center bg-gradient-to-b from-gray-900 to-black'>
        <ul className='flex flex-row'>
            {links.map(({id, child, href, style, download}) =>(
                <li key={id} 
                    className={" ml-5 flex justify-between items-center   2xl:w-36 2xl:h-14 h-10 px-2 bg-gray-600  "+
                                " "+style}>
                    <a href={href}
                        className='flex justify-between items-center w-full  text-white text-xs 2xl:text-base'
                        download={download}
                        target='_blank'
                        rel="noreferrer"
                    >
                        {child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Footer