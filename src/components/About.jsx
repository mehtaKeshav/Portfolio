import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='md:text-4xl text-2xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='md:text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis eum quos dolorum quis reprehenderit 
                illum quia. Minima doloremque tempora, natus et architecto sit placeat laborum corporis, tempore explicabo esse delectus nam? 
                Hic, nemo distinctio, maiores sunt quasi quo natus vel qui numquam blanditiis consectetur odit debitis, cum ad dolore.
            </p>
            
            <br/>

            <p className='md:text-xl '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum fuga quis sed culpa aut. 
                Suscipit eius corrupti excepturi alias maiores dolor et odit sunt incidunt vitae quia autem 
                quasi pariatur, esse provident nihil ducimus obcaecati aut iusto amet? Natus, incidunt. Accusantium, 
                eligendi sunt ipsa fugiat numquam corporis cumque facilis non.
            </p>
        </div>
    </div>
  )
}

export default About