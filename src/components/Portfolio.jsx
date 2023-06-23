import React from 'react'
import AddRemoveUser from "../assets/portfolio/AddRemoveUser.png"
import AutoPriceMLChart from "../assets/portfolio/AutoPriceMLChart.png"
import beachEvents1 from "../assets/portfolio/beachEvents1.JPG"
import beachEvents2 from "../assets/portfolio/beachEvents2.JPG"
import EvilTwinAttack from "../assets/portfolio/EvilTwinAttack.jpg"
import FridgeManager from "../assets/portfolio/FridgeManager.JPG"
import FridgeManagerApp from "../assets/portfolio/FridgeManagerApp.png"
import MITM from "../assets/portfolio/MITM.JPG"
import pokemonChart from "../assets/portfolio/pokemonChart.png"
import PokemonMain from "../assets/portfolio/PokemonMain.jpeg"

function Portfolio() {
    const portfolios = [
        {
            id: 1, 
            src: beachEvents1
        },
        {
            id: 2, 
            src:  FridgeManagerApp 
        },
        {
            id: 3, 
            src: EvilTwinAttack
        },
        {
            id: 4, 
            src: PokemonMain
        },
        {
            id: 5, 
            src: AutoPriceMLChart
        }

    ]
  return (
    <div name='Portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pt-28'>
                <p className='md:text-4xl text-2xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            
            <div  className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-14 sm-px-0 h-full'>
                {
                    portfolios.map(({id, src}) => (
                        <div key={id} className=' max-h-48 shadow-md shadow-gray-600 rounded-lg '>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 h-4/6 w-full '/>
                            <div className=' flex items-center justify-center'>
                                <button  className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110' >Demo</button>
                                <button className=' w-1/2 px-6  py-3  m-4 duration-200 hover:scale-110' >Code</button>
                            </div>
                            
                            
                        </div>
                        
                        
                    ))
                }
                        
            </div>
        </div>
    </div>
  )
}

export default Portfolio