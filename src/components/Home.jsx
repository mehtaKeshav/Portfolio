import React from 'react'
import HeroImg from "../assets/hero.JPG"
import {TbArrowRightTail} from "react-icons/tb"
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 sm:px-0 '>
            <div className='flex flex-col justify-center sm:h-full sm:px-12 md:pl-12  md:w-full'>
                <h2 className='text-3xl sm:text-5xl 2xl:text-8xl font-bold text-white  md:pt-0'>
                    I'm a <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#00f1ff] via-[#8abcfb] to-[#7b09a6]'>Full Stack Developer</span>
                </h2>
                <p className='text-gray-400 py-4 max-w-md 2xl:text-lg'>
                    Bringing ideas to life by developing software that converges technology and creativity.  
                </p>
                <div>
                    <button className='group md:w-fit duration-500 text-white px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-[#00dfff]  via-[#308eef] to-[#514bd0] hover:bg-right-bottom  bg-size-200 cursor-pointer'>
                    <Link to={'Projects'} smooth duration={500}>{'Projects'}</Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <TbArrowRightTail size={20} className='ml-1'/>
                            
                        </span> 
                    </button>
                </div>
            </div>
            <div className=' pt-6 sm:pt-0 md:w-4/6 2xl:w-full'>
                <img src={HeroImg} alt="my profile" className='rounded-3xl mx-auto w-5/6 md:w-5/6 2xl:w-full  md:flex-row' />
            </div>          
        </div>
    </div>
    
  )
}       

export default Home