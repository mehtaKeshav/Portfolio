import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child:(
                <>
                LinkedIn <FaLinkedin size={32} className='pl-1 fill-slate-200'/>
                </>
            ),
            href: 'https://www.linkedin.com/in/mehtakeshav',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:(
                <>
                Github <FaGithub size={32} className='pl-1 fill-slate-200'/>
                </>
            ),
            href: 'https://github.com/mehtaKeshav',
        },
        {
            id: 3,
            child:(
                <>
                Mail <HiOutlineMail size={32} className='pl-1 fill-slate-200'/>
                </>
            ),
            href: 'mailto:m12.keshav@gmail.com',
        },
        {
            id: 4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={32} className='pl-1 fill-slate-'/>
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) =>(
                <li key={id} 
                    className={"flex justify-between items-center w-28  2xl:w-36 2xl:h-14 h-10 px-2 bg-gray-600  ml-[-70px] hover:ml-[-2px] hover:rounded-r-xl duration-300"+
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

export default SocialLinks