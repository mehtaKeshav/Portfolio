import React from 'react'


const Contact = () => {
  return (
    <div name='Contact' className=' sm:pt-20 w-full  h-screen sm:h-fit bg-gradient-to-b from-black to-gray-900  text-white'>
        <div className='flex flex-col px-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 px-2'>
                <p className='text-xl p-2 md:text-3xl font-semibold border-b-2 border-gray-500'>Contact</p>
            </div>
            <div className='flex justify-center items-center mx-5'>
                <form action="https://getform.io/f/6741ff7a-a093-4a25-a08c-8dc692728622" method="post" className=' flex flex-col w-full md:w-1/2'>
                    <input  type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md h-1/2 text-white  '/>
                    <input type="text" name='Email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2  h-1/2 rounded-md text-white  '/>
                    <textarea placeholder='Enter your message'name="message" rows="8" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-nonene-none'></textarea>
                    <button className='text-white bg-gradient-to-r from-[#00dfff]  via-[#308eef] to-[#514bd0] hover:bg-right-bottom  bg-size-200 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-500'> Let's Connect</button>
                </form>
            </div>  
        </div>
    </div>
  )
}

export default Contact