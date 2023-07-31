import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b  from-gray-900 to-black text-white'>
        <div className='max-w-screen-lg sm: mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='md:text-3xl p-2 text-xl font-semibold  border-b-2 border-gray-500'>
                    About
                </p>
            </div>
            <p className='md:text-xl sm:px-2 text-base md:mx-0 mx-5'>
            I am an enthusiastic and dedicated Software Developer with a burning passion for crafting impactful solutions that enhance people's lives. Equipped with a Bachelor's degree in Computer Science and a wealth of experience in diverse domains such as software development, machine learning, and web development, I bring a versatile and dynamic skill set to the table.
            </p>
            
            <br/>

            <p className='md:text-xl  sm:px-2 text-base  md:mx-0 mx-5 '>
            As a collaborative team player, I am committed to fostering open communication and synergy among cross-functional teams, ensuring that we can achieve remarkable results together. I am always open to exploring new opportunities and would be absolutely delighted to connect with you to have an engaging conversation about tech and more. Let's create something extraordinary together!
            </p>
        </div>
    </div>
  )
}

export default About